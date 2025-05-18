import logo from "../assets/img/logo.jpg";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../assets/css/PadraoFormulario.css'; // Importa o CSS


interface GlicemiaFormData {
  data: string;
  glicemiaJejum: string;
  glicemiaAntesAlmoco: string;
  glicemia2hAposAlmoco: string;
  glicemiaAntesJantar: string;
  glicemia2hAposJantar: string;
  observacoes: string;
}

const ControleGlicemiaForm: React.FC = () => {
  const [formData, setFormData] = useState<GlicemiaFormData>({
    data: '',
    glicemiaJejum: '',
    glicemiaAntesAlmoco: '',
    glicemia2hAposAlmoco: '',
    glicemiaAntesJantar: '',
    glicemia2hAposJantar: '',
    observacoes: '',
  });

  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de submissão dos dados (ex: enviar para API, salvar localmente)
    console.log('Dados do Formulário de Glicemia:', formData);

    // Exemplo de mensagem de sucesso
    setFormMessage({ type: 'success', text: 'Dados de glicemia registrados com sucesso!' });

    // Limpar formulário após o envio (opcional)
    setFormData({
      data: '',
      glicemiaJejum: '',
      glicemiaAntesAlmoco: '',
      glicemia2hAposAlmoco: '',
      glicemiaAntesJantar: '',
      glicemia2hAposJantar: '',
      observacoes: '',
    });

    // Limpar mensagem após alguns segundos
    setTimeout(() => setFormMessage(null), 5000);
  };

  return (
    <div className="form-container">
      <div className="container">
        <header className="form-header">
          <img src={logo} alt="Logo Clínica" className="logo" /> 
          <h1 className="title-form">CONTROLE DIÁRIO DE GLICEMIA</h1>
          <p>Registre seus níveis de glicemia diariamente.</p>
        </header>

        <form className="form" id="glicemia-form" onSubmit={handleSubmit}>
          <fieldset className="form-fieldset">
            <legend className="form-fieldset-legend">Informações da Data</legend>
            <div className="form-group">
              <label htmlFor="data">DATA:</label>
              <input
                className= "input-form"
                type="date"
                id="data"
                name="data"
                value={formData.data}
                onChange={handleChange}
                required
              />
            </div>
          </fieldset>

          <fieldset className="form-fieldset">
            <legend className="form-fieldset-legend">Medições de Glicemia (mg/dL)</legend>
            <div className="form-group">
              <label htmlFor="glicemiaJejum">GLICEMIA JEJUM:</label>
              <input
                className= "input-form"
                type="number"
                id="glicemiaJejum"
                name="glicemiaJejum"
                value={formData.glicemiaJejum}
                onChange={handleChange}
                placeholder="mg/dL"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="glicemiaAntesAlmoco">GLICEMIA ANTES DO ALMOÇO:</label>
              <input
                className= "input-form"
                type="number"
                id="glicemiaAntesAlmoco"
                name="glicemiaAntesAlmoco"
                value={formData.glicemiaAntesAlmoco}
                onChange={handleChange}
                placeholder="mg/dL"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="glicemia2hAposAlmoco">GLICEMIA 2H APÓS O ALMOÇO:</label>
              <input
                className= "input-form"
                type="number"
                id="glicemia2hAposAlmoco"
                name="glicemia2hAposAlmoco"
                value={formData.glicemia2hAposAlmoco}
                onChange={handleChange}
                placeholder="mg/dL"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="glicemiaAntesJantar">GLICEMIA ANTES DO JANTAR:</label>
              <input
                className= "input-form"
                type="number"
                id="glicemiaAntesJantar"
                name="glicemiaAntesJantar"
                value={formData.glicemiaAntesJantar}
                onChange={handleChange}
                placeholder="mg/dL"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="glicemia2hAposJantar">GLICEMIA 2H APÓS O JANTAR:</label>
              <input
                className= "input-form"
                type="number"
                id="glicemia2hAposJantar"
                name="glicemia2hAposJantar"
                value={formData.glicemia2hAposJantar}
                onChange={handleChange}
                placeholder="mg/dL"
                min="0"
              />
            </div>
          </fieldset>

          <fieldset className="form-fieldset">
            <legend className="form-fieldset-legend">Observações</legend>
            <div className="form-group">
              <label htmlFor="observacoes">Anotações Adicionais:</label>
              <textarea
                id="observacoes"
                name="observacoes"
                rows={4}
                value={formData.observacoes}
                onChange={handleChange}
                placeholder="Algum sintoma, alteração na rotina ou detalhe importante?"
              ></textarea>
            </div>
          </fieldset>

          <div className="form-actions">
            <button type="submit" className="btn-submit">Salvar Dados de Glicemia</button>
          </div>

          {formMessage && (
            <div
              id="form-message"
              className={`message ${formMessage.type}`}
              aria-live="polite"
            >
              {formMessage.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ControleGlicemiaForm;