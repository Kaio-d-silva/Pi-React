import React, {useState} from 'react';
import styles from '../assets/css/HistoricoFormularios.module.css'; // Seu CSS existente

// Interface para os dados dos formulários preenchidos (exemplo)
interface FilledForm {
    id: string | number;
    date: string; // Formato YYYY-MM-DD para facilitar ordenação e Date()
    type: string; // Ex: "Glicemia", "Diálise"
    // Outros dados do formulário poderiam estar aqui
}
const HistoricoFormularios = () => {
    // Olhar depois
    // eslint-disable-next-line  
    const [filledForms, setFilledForms] = useState<FilledForm[]>([
        { id: 1, date: '2023-10-26', type: 'Controle de Glicemia' },
        // { id: 2, date: '2023-10-25', type: 'Controle de Diálise' },
        // { id: 3, date: '2023-10-24', type: 'Controle de Glicemia' },
        // { id: 4, date: '2023-10-20', type: 'Controle de Glicemia' },
    ]);

     // Função para formatar a data para exibição (dd/mm/aaaa)
    const formatDate = (dateString: string) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };
    
    return (
        <div /*className={styles.historicoContainer}*/>
            <h2>Histórico de Formulários Preenchidos</h2>
            {filledForms.length > 0 ? (
                <ul className={styles.historicoLista}>
                    {filledForms.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Ordena mais recentes primeiro
                        .map(form => (
                            <li key={form.id} className={styles.historicoItem}>
                                <span className={styles.historicoData}>Data: {formatDate(form.date)}</span>
                                <span className={styles.historicoTipo}>Tipo: {form.type}</span>
                                {/* Você pode adicionar um botão/link para ver detalhes do formulário aqui */}
                                <button className={styles.btnVerDetalhes}>Ver Detalhes</button>
                            </li>
                        ))}
                </ul>
            ) : (
                <p>Nenhum formulário preenchido encontrado para este paciente.</p>
            )}
        </div>

    );
}

export default HistoricoFormularios;