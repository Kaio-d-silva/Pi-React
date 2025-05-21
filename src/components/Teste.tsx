import React, { useState } from 'react';
import './Pacientes.css'; // Nosso arquivo CSS

// Placeholders para ícones e logo
const CalendarIcon = () => <span role="img" aria-label="calendar">📅</span>;
const ClockIcon = () => <span role="img" aria-label="clock">🕒</span>;
// Importe seu logo real:
// import logoClinica from './path-to-your-logo.png';
const LogoPlaceholder = () => (
  <div style={{
    width: '120px', height: '70px', border: '1px dashed #ccc',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto', color: '#aaa', fontSize: '12px'
  }}>
    LOGO AQUI
    {/* <img src={logoClinica} alt="Clínica do Rim CENED" className="logo-image" /> */}
  </div>
);


const TabsForm = () => {
  const [activeTab, setActiveTab] = useState('dialise'); // 'dialise' ou 'glicemia'

  return (
    <div className="app-background"> {/* Container geral da página */}
      <div className="form-widget-container"> {/* Container para o conjunto abas + formulário */}
        <div className="tabs-navigation">
          <button
            className={`tab-button ${activeTab === 'dialise' ? 'active' : ''}`}
            onClick={() => setActiveTab('dialise')}
          >
            Dialise
          </button>
          <button
            className={`tab-button ${activeTab === 'glicemia' ? 'active' : ''}`}
            onClick={() => setActiveTab('glicemia')}
          >
            Glicemia
          </button>
          {/* Adicione mais botões/abas aqui se necessário */}
        </div>

        <div className="form-content-card">
          <div className="logo-area">
            <LogoPlaceholder />
          </div>

          {activeTab === 'dialise' && (
            <div className="form-section">
              <h2 className="form-title">Controle de Diálise Peritoneal Automatizada</h2>
              <p className="form-subtitle">Registre os dados da sua sessão de diálise.</p>
              <hr className="form-divider" />
              <h3 className="section-title">Informações da Sessão</h3>
              <div className="form-group">
                <label htmlFor="dataSessao">Data da Sessão:</label>
                <div className="input-wrapper">
                  <input type="text" id="dataSessao" placeholder="dd/mm/aaaa" />
                  <CalendarIcon />
                </div>
              </div>
              <div className="time-inputs-container">
                <div className="form-group">
                  <label htmlFor="horarioInicio">Horário de Início:</label>
                  <div className="input-wrapper">
                    <input type="text" id="horarioInicio" placeholder="--:--" />
                    <ClockIcon />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="horarioFim">Horário de Fim:</label>
                  <div className="input-wrapper">
                    <input type="text" id="horarioFim" placeholder="--:--" />
                    <ClockIcon />
                  </div>
                </div>
              </div>
              {/* Mais campos do formulário de Diálise */}
            </div>
          )}

          {activeTab === 'glicemia' && (
            <div className="form-section">
              <h2 className="form-title">Controle de Glicemia</h2>
              <p className="form-subtitle">Registre os dados da sua medição de glicemia.</p>
              <hr className="form-divider" />
              {/* Campos do formulário de Glicemia */}
              <p>Formulário de Glicemia aqui...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabsForm;