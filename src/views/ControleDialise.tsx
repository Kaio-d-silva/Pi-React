import styles from "../assets/css/PadraoFormulario.module.css"

import logo from '../assets/img/logo.jpg';




const FormularioDialise = () => {
    return (
        <>
            <div className={styles.formContainer}>
                <div className={styles.container}>
                    <header className={styles.formHeader}>
                        <img src={logo} alt="Logo Clínica" className={styles.logo} />
                        <h1 className={styles.titleForm}>Controle de Diálise Peritoneal Automatizada</h1>
                        <p>Registre os dados da sua sessão de diálise.</p>
                    </header>

                    <form className={styles.form}>
                        <fieldset className={styles.formFieldset}>
                            <legend className= {styles.formFieldsetLegend}>Informações da Sessão</legend>
                            <div className={styles.formGroup}>
                                <label htmlFor="session-date">Data da Sessão:</label>
                                <input className={styles.inputForm} type="date" id="session-date" name="session_date" required />
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="start-time">Horário de Início:</label>
                                    <input className={styles.inputForm} type="time" id="start-time" name="start_time" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="end-time">Horário de Fim:</label>
                                    <input className={styles.inputForm} type="time" id="end-time" name="end_time" required />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className={styles.formFieldset}>
                            <legend className={styles.formFieldsetLegend}>Detalhes da Diálise</legend>
                            <div className="form-group">
                                <label htmlFor="solution-type">Solução Utilizada:</label>
                                <input className={styles.inputForm} type="text" id="solution-type" name="solution_type" placeholder="Ex: Glicose 1.5%" required />
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="initial-drain">Dreno Inicial (ml):</label>
                                    <input className= {styles.inputForm} type="number" id="initial-drain" name="initial_drain" min="0" placeholder="Volume em ml" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="total-uf">UF Total (ml):</label>
                                    <input className={styles.inputForm} type="number" id="total-uf" name="total_uf" placeholder="Volume em ml" required />
                                </div>
                            </div>
                            <div className={`${styles.formGroup} ${styles.teste}`}>
                                <label htmlFor="TPM">T.P.M</label>
                                <input className={styles.inputForm} type="time" id="TPM" name="TPM" required />


                            </div>
                            <div className={styles.formGroup}>
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

                        <fieldset className={styles.formFieldset}>
                            <legend className={styles.formFieldsetLegend}>Medições do Paciente</legend>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="weight-pre">Peso Pré-Diálise (kg):</label>
                                    <input className={styles.inputForm} type="number" id="weight-pre" name="weight_pre" step="0.1" min="0" placeholder="kg" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="weight-post">Peso Pós-Diálise (kg):</label>
                                    <input className={styles.inputForm} type="number" id="weight-post" name="weight_post" step="0.1" min="0" placeholder="kg" required />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Pressão Arterial (mmHg):</label>
                                <div className={`${styles.formRow} ${styles.bpGroup}`}>
                                    <input className={styles.inputForm} type="number" id="bp-systolic" name="bp_systolic" min="0" placeholder="Sistólica (Ex: 120)" aria-label="Pressão Sistólica" required />
                                    <span>/</span>
                                    <input className={styles.inputForm} type="number" id="bp-diastolic" name="bp_diastolic" min="0" placeholder="Diastólica (Ex: 80)" aria-label="Pressão Diastólica" required />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="glucose">Glicemia (mg/dL):</label>
                                <input className={styles.inputForm} type="number" id="glucose" name="glucose" min="0" placeholder="Opcional" />
                            </div>
                        </fieldset>

                        <fieldset className={styles.formFieldset}>
                            <legend className={styles.formFieldsetLegend}>Observações</legend>
                            <div className={styles.formGroup}>
                                <label htmlFor="notes">Anotações Adicionais:</label>
                                <textarea id="notes" name="notes" rows={4} placeholder="Alguma intercorrência, sintoma ou detalhe importante?"></textarea>
                            </div>
                        </fieldset>

                        <div className={styles.formActions}>
                            <button type="submit" className={styles.btnSubmit}>Registrar Sessão</button>
                        </div>

                        <div id="form-message" className={styles.message} aria-live="polite"></div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default FormularioDialise