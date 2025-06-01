import React from "react";
import FormularioDialise from "../views/ControleDialise"
import ControleGlicemiaForm from "../views/ControleGlicemia"

import styles from "../assets/css/ContainerFormularios.module.css"

const ContainerFormularios: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState<'dialise' | 'glicemia'>('dialise');
    return (
        <>
        <div className={styles.formContainerControler}>
        <div className={styles.containerControler}>
            <div className={styles.tabsNavigation}>
            <button 
            className={`${styles.formType} ${activeTab === 'dialise' ? `${styles.active}`: ''}`} 
            onClick={() => setActiveTab('dialise')}>
                Dialise
            </button>
            <button 
            className={`${styles.formType} ${activeTab === 'glicemia' ? `${styles.active}` : ''}`} 
            onClick={() => setActiveTab('glicemia')}>
                Glicemia
            </button>
            </div>
            <div className={styles.formContentCard}>
                {activeTab === 'dialise' && (
                    <FormularioDialise/>
                )}
                {activeTab === 'glicemia' && (
                    <ControleGlicemiaForm/>
                )}
            </div>
        </div>
        </div>
        </>
    );
}

export default ContainerFormularios;