import "../css/formulario.css"
import logo from "../img/logo-clinica.jpg"

const htmlFormulario = () => {
    return (
        <>
            <div className="form-container">
                <div className="container">
                    <header>
                        <img src={logo} alt="Logo Clínica (Exemplo)" className="logo" />
                        <h1>Controle de Diálise Peritoneal Automatizada</h1>
                        <p>Registre os dados da sua sessão de diálise.</p>
                    </header>

                    <form id="dialysis-form">
                        <fieldset>
                            <legend>Informações da Sessão</legend>
                            <div className="form-group">
                                <label htmlFor="session-date">Data da Sessão:</label>
                                <input type="date" id="session-date" name="session_date" required />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="start-time">Horário de Início:</label>
                                    <input type="time" id="start-time" name="start_time" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="end-time">Horário de Fim:</label>
                                    <input type="time" id="end-time" name="end_time" required />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Detalhes da Diálise</legend>
                            <div className="form-group">
                                <label htmlFor="solution-type">Solução Utilizada:</label>
                                <input type="text" id="solution-type" name="solution_type" placeholder="Ex: Glicose 1.5%" required />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="initial-drain">Dreno Inicial (ml):</label>
                                    <input type="number" id="initial-drain" name="initial_drain" min="0" placeholder="Volume em ml" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="total-uf">UF Total (ml):</label>
                                    <input type="number" id="total-uf" name="total_uf" placeholder="Volume em ml" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="liquid-aspect">Aspecto do Líquido Drenado:</label>
                                <select id="liquid-aspect" name="liquid_aspect" required>
                                    <option value="">Selecione...</option>
                                    <option value="limpo">Limpo / Claro</option>
                                    <option value="turvo">Turvo</option>
                                    <option value="sanguinolento">Sanguinolento</option>
                                    <option value="fibrina">Com Fibrina</option>
                                    <option value="outro">Outro (descreva nas observações)</option>
                                </select>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Medições do Paciente</legend>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="weight-pre">Peso Pré-Diálise (kg):</label>
                                    <input type="number" id="weight-pre" name="weight_pre" step="0.1" min="0" placeholder="kg" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="weight-post">Peso Pós-Diálise (kg):</label>
                                    <input type="number" id="weight-post" name="weight_post" step="0.1" min="0" placeholder="kg" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Pressão Arterial (mmHg):</label>
                                <div className="form-row bp-group">
                                    <input type="number" id="bp-systolic" name="bp_systolic" min="0" placeholder="Sistólica" aria-label="Pressão Sistólica" required />
                                    <span>/</span>
                                    <input type="number" id="bp-diastolic" name="bp_diastolic" min="0" placeholder="Diastólica" aria-label="Pressão Diastólica" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="glucose">Glicemia (mg/dL):</label>
                                <input type="number" id="glucose" name="glucose" min="0" placeholder="Opcional" />
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Observações</legend>
                            <div className="form-group">
                                <label htmlFor="notes">Anotações Adicionais:</label>
                                <textarea id="notes" name="notes" rows={4} placeholder="Alguma intercorrência, sintoma ou detalhe importante?"></textarea>
                            </div>
                        </fieldset>

                        <div className="form-actions">
                            <button type="submit" className="btn-submit">Registrar Sessão</button>
                        </div>

                        <div id="form-message" className="message" aria-live="polite"></div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default htmlFormulario