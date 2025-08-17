import React, { useState } from 'react';
import styles from '../assets/css/PerfilPaciente.module.css'; // Seu CSS existente
import HistoricoFormularios from '../components/HistoricoFormularios'; // Importando o componente de histórico
import CadastroPaciente from './CadastroPaciente';


const PerfilPaciente: React.FC = () => {
    enum typeAbas {
        DADOS = 'dados',
        HISTORICO = 'historico'
    }

    const tabs = [
        { key: typeAbas.DADOS, label: 'Dados Cadastrais' },
        { key: typeAbas.HISTORICO, label: 'Histórico de Formulários' },
    ];


    const [activeTab, setActiveTab] = useState<typeAbas>(typeAbas.DADOS);

    const renderTabContent = () => {
        switch (activeTab) {
            case typeAbas.DADOS:
                return (
                        <CadastroPaciente/>
                );
            case typeAbas.HISTORICO:
                return (
                        <HistoricoFormularios />
                );
            default:
                return null;
        }
    };

    return (
        <>
            <main className={styles.mainstyle}>
                <div className={styles.containerCadastro}>
                    {/* Navegação das Abas */}
                    <div className={styles.tabNavigation}>
                        {tabs.map(tab => (
                            <button
                                key={tab.key}
                                className={`${styles.tabButton} ${activeTab === tab.key ? styles.active : ''}`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    {/* Conteúdo das Abas */}
                    <div className={styles.tabContent}>
                        {renderTabContent()}
                    </div>
                </div>
            </main>
        </>
    );

}

export default PerfilPaciente;