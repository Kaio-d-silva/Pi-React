import styles from '../assets/css/FormularioCadastro.module.css'

const CadastroProfissionals: React.FC = () => {

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
                            <div className={styles.formGroup}><label htmlFor="status">Status</label><select className={styles.inputCadastroPaciente} id="status"><option value="ativo">Ativo</option><option value="inativo">Inativo</option></select></div>
                            <div className={styles.formGroup}><label  htmlFor="cargo">Cargo</label><input type="text" id="cargo" /></div>
                        </form>
                    </section>

                    <section className={styles.card}>
                        <div className={styles.cardHeader}><h2>Endereço</h2></div>
                        <form className={styles.formGrid}>
                            <div className={styles.formGroup}><label  htmlFor="rua">Rua</label><input type="text" id="rua" placeholder="" /></div>
                            <div className={styles.formGroup}><label  htmlFor="bairro">Bairro</label><input type="text" id="bairro" placeholder="" /></div>
                            <div className={styles.formGroup}><label  htmlFor="numero">Número</label><input type="text" id="numero" placeholder="" /></div> {/* Corrigido 'numero' para 'Número' */}
                            <div className={styles.formGroup}><label  htmlFor="cidade">Cidade</label><input type="text" id="cidade" placeholder="" /></div>
                            <div className={styles.formGroup}><label  htmlFor="complemento">Complemento</label><input type="text" id="complemento" placeholder="" /></div>
                            <div className={styles.formGroup}><label  htmlFor="UF">UF</label><input type="text" id="UF" maxLength={2} placeholder="" /></div>
                            <div className={styles.formGroup}><label  htmlFor="cep">CEP</label><input type="text" id="cep-endereco" placeholder="" /></div> {/* ID 'cep' já usado, mudei para 'cep-endereco' */}
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

export default CadastroProfissionals;