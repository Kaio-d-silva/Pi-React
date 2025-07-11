import React, {useState} from 'react';
import styles from '../assets/css/HistoricoFormularios.module.css'; // Seu CSS existente
import { useNavigate } from 'react-router-dom';
import Collapse from "./Collapse";
import DetalhesFormulario from './DetalhesFormulario';


interface FilledForm {
    id: number;
    date: string; 
    type: string; 
}
const HistoricoFormularios = () => {
    // Olhar depois
    // eslint-disable-next-line  
    const [filledForms, setFilledForms] = useState<FilledForm[]>([
        { id: 1, date: '2023-10-26', type: 'Controle de Glicemia e Diálise' },
        { id: 2, date: '2023-10-25', type: 'Controle de Diálise' },
        { id: 3, date: '2023-10-24', type: 'Controle de Glicemia' },
        { id: 4, date: '2023-10-20', type: 'Controle de Glicemia' },
    ]);

    const formatDate = (dateString: string) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };
    
    const navigate = useNavigate();
    const detalhes = () =>{
        navigate("/dados");
}
    
    return (
        <div className={styles.historicoContainer}>
            <h2>Histórico de Formulários Preenchidos</h2>
            {filledForms.length > 0 ? (
                <ul className={styles.historicoLista}>
                    {filledForms.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Ordena mais recentes primeiro
                        .map(form => (
                            <Collapse title={`Data : ${formatDate(form.date)} Tipo : ${form.type} `}>
                                <DetalhesFormulario/>
                            </Collapse>
                        ))}
                </ul>
            ) : (
                <p>Nenhum formulário preenchido encontrado para este paciente.</p>
            )}
        </div>
    );
}

export default HistoricoFormularios;