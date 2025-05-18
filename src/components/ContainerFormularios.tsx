import React from "react";
import FormularioDialise from "../views/ControleDialise"
import ControleGlicemiaForm from "../views/ControleGlicemia"

const ContainerFormularios: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState<'dialise' | 'glicemia'>('dialise');
    return (
        <>
        <div>
            <button onClick={() => setActiveTab('dialise')}>
                Dialise
            </button>
            <button onClick={() => setActiveTab('glicemia')}>
                Glicemia
            </button>
            <div>
                {activeTab === 'dialise' && (
                    <FormularioDialise/>
                )}
                {activeTab === 'glicemia' && (
                    <ControleGlicemiaForm/>
                )}
            </div>
        </div>
        </>
    );
}

export default ContainerFormularios;