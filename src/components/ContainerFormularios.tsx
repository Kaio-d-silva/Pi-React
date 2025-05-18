import React from "react";
import FormularioDialise from "../views/ControleDialise"
import ControleGlicemiaForm from "../views/ControleGlicemia"

import "../assets/css/ContainerFormularios.css"

const ContainerFormularios: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState<'dialise' | 'glicemia'>('dialise');
    return (
        <>
        <div className="form-container-controler">
        <div className="container-controler">
            <button className="form-type" onClick={() => setActiveTab('dialise')}>
                Dialise
            </button>
            <button className="form-type" onClick={() => setActiveTab('glicemia')}>
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
        </div>
        </>
    );
}

export default ContainerFormularios;