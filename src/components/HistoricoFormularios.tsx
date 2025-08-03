import React, {useState} from 'react';
import styles from '../assets/css/HistoricoFormularios.module.css'; // Seu CSS existente
import Collapse from "./Collapse";
import FormularioDetalhes, { FormularioData } from './FormularioDetalhes';


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
    

const dadosDoFormulario: FormularioData = {
  sessao: {
    data: "25/04/2024",
    horarioInicio: "14:00",
    horarioFim: "19:30",
  },
  medicoes: {
    pesoPreDialiseKg: 70.5,
    pesoPosDialiseKg: 68.8,
    pressaoArterial: "120/80",
    glicemiaGeral: 95,
  },
  glicemia: {
    jejum: 105,
    antesAlmoco: 140,
    aposAlmoco2h: 180,
    antesJantar: 135,
    aposJantar2h: 160,
  },
  dialise: {
    solucaoUtilizada: "Ex: Glicose 1,5%",
    drenoInicialMl: 1500,
    ufTotalMl: 200,
    tpm: 8,
    aspectoLiquidoDrenado: "Claro",
  },
};
    
    return (
        <div className={styles.historicoContainer}>
            <h2>Histórico de Formulários Preenchidos</h2>
            {filledForms.length > 0 ? (
                <ul className={styles.historicoLista}>
                    {filledForms.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Ordena mais recentes primeiro
                        .map(form => (
                            <Collapse title={`📅 Data : ${formatDate(form.date)} Tipo : ${form.type} `} typeForm={form.type}>
                                {/* <DetalhesFormulario/> */}
                                <FormularioDetalhes dados={dadosDoFormulario}/>
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