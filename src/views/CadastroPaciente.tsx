import styles from '../assets/css/FormularioCadastro.module.css';

const CadastroPaciente: React.FC = () => {

    return (
        <>
            <main className={styles.mainstyle}>
                <div className={styles.containerCadastro}>
                    <section className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h2>Dados Paciente</h2>
                        </div>
                        <form className={styles.formGrid}>
                            <div className={styles.formGroup}><label htmlFor="nome">Nome </label><input type="text" id="nome" /></div>
                            <div className={styles.formGroup}><label htmlFor="data-nascimento">Data de nascimento</label><input type="date" id="data-nascimento" placeholder="dd/mm/aaaa" /></div>
                            <div className={styles.formGroup}><label htmlFor="cpf">CPF</label><input type="text" id="cpf" /></div>
                            <div className={styles.formGroup}><label htmlFor="telefone">Telefone</label><input type="tel" id="telefone" /></div>
                            <div className={styles.formGroup}><label htmlFor="whatsapp">WhatsApp</label><input type="tel" id="whatsapp" /></div>
                            <div className={styles.formGroup}><label className={styles.labelCadastroPaciente} htmlFor="status">Status</label><select className={styles.inputCadastroPaciente} id="status"><option value="ativo">Ativo</option><option value="inativo">Inativo</option></select></div>
                        </form>
                    </section>

                    <section className={styles.card}>
                        <div className={styles.cardHeader}><h2>Endereço</h2></div>
                        <form className={styles.formGrid}>
                            <div className={styles.formGroup}><label className={styles.labelCadastroPaciente} htmlFor="rua">Rua</label><input className={styles.inputCadastroPaciente} type="text" id="rua" placeholder="" /></div>
                            <div className={styles.formGroup}><label className={styles.labelCadastroPaciente} htmlFor="bairro">Bairro</label><input className={styles.inputCadastroPaciente} type="text" id="bairro" placeholder="" /></div>
                            <div className={styles.formGroup}><label className={styles.labelCadastroPaciente} htmlFor="numero">Número</label><input className={styles.inputCadastroPaciente} type="text" id="numero" placeholder="" /></div> {/* Corrigido 'numero' para 'Número' */}
                            <div className={styles.formGroup}><label className={styles.labelCadastroPaciente} htmlFor="cidade">Cidade</label><input className={styles.inputCadastroPaciente} type="text" id="cidade" placeholder="" /></div>
                            <div className={styles.formGroup}><label className={styles.labelCadastroPaciente} htmlFor="complemento">Complemento</label><input className={styles.inputCadastroPaciente} type="text" id="complemento" placeholder="" /></div>
                            <div className={styles.formGroup}><label className={styles.labelCadastroPaciente} htmlFor="UF">UF</label><input className={styles.inputCadastroPaciente} type="text" id="UF" maxLength={2} placeholder="" /></div>
                            <div className={styles.formGroup}><label className={styles.labelCadastroPaciente} htmlFor="cep">CEP</label><input className={styles.inputCadastroPaciente} type="text" id="cep-endereco" placeholder="" /></div> {/* ID 'cep' já usado, mudei para 'cep-endereco' */}
                        </form>
                    </section>
                    <div className={styles.formActionsCadastro}>
                        <button type="submit" className={styles.btnSubmitCadastro}>Salvar Dados do Paciente</button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default CadastroPaciente;