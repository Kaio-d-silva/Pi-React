import styles from '../assets/css/FormularioCadastro.module.css'

const CadastroProfissionals = () => {
    return (
        <>
            <main className={styles.Mainstyle}>
                <div className={styles.containerCadastro}>
                    <div className={styles.areaCadastroPaciente}>
                        <div className={styles.TituloLocalCadastroPaciente}>
                            <h1>Dados Profissional</h1>
                            {/* <div className="border-b">
                            <ul>
                                <li>Dados Cadastrais</li>
                            </ul>
                        </div> */}
                        </div>
                        <div className={styles.informacoesPaciente}>

                            <div>
                                <label className={styles.labelCadastroPaciente} htmlFor="nome"><b>Nome </b></label>
                                <input className={styles.inputCadastroPaciente} type="text" id="nome" />
                            </div>
                            <div>
                                <label className={styles.labelCadastroPaciente} htmlFor="data-nascimento"><b>Data de nascimento</b></label>
                                <input className={styles.inputCadastroPaciente} type="date" id="data-nascimento" />
                            </div>
                            <div>
                                <label className={styles.labelCadastroPaciente} htmlFor="cpf"><b>CPF</b></label>
                                <input className={styles.inputCadastroPaciente} type="number" id="cpf" />
                            </div>
                            <div>
                                <label className={styles.labelCadastroPaciente} htmlFor="telefone"><b>Telefone</b></label>
                                <input className={styles.inputCadastroPaciente} type="tel" id="telefone" />
                            </div>
                            <div>
                                <label className={styles.labelCadastroPaciente} htmlFor="whatssap"><b>Cargo</b></label>
                                <input className={styles.inputCadastroPaciente} type="number" id="whatssap" />
                            </div>
                            <div>
                                <label className={styles.labelCadastroPaciente} htmlFor="cep"><b>status</b></label>
                                <input className={styles.inputCadastroPaciente} type="text" id="cep" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.areaEndereco}>
                        <div><h1>Endereço</h1></div>
                        <div className={styles.endereco}>
                            {/* <div className='endPrimeiraLinha'> */}
                            <div><label className={styles.labelCadastroPaciente} htmlFor="rua"><b>Rua</b></label><input className={styles.inputCadastroPaciente} type="text" id="rua" /></div>
                            <div><label className={styles.labelCadastroPaciente} htmlFor="bairro"><b>Bairro</b></label><input className={styles.inputCadastroPaciente} type="text" id="bairro" /></div>
                            <div><label className={styles.labelCadastroPaciente} htmlFor="numero"><b>numero</b></label><input className={styles.inputCadastroPaciente} type="text" id="numero" /></div>
                            {/* </div> */}
                            {/* <div className='endSegundaLinha'> */}
                            <div><label className={styles.labelCadastroPaciente} htmlFor="cidade"><b>Cidade</b></label><input className={styles.inputCadastroPaciente} type="text" id="cidade" /></div>
                            <div><label className={styles.labelCadastroPaciente} htmlFor="complemento"><b>complemento</b></label><input className={styles.inputCadastroPaciente} type="text" id="complemento" /></div>
                            <div><label className={styles.labelCadastroPaciente} htmlFor="UF"><b>UF</b></label><input className={styles.inputCadastroPaciente} type="text" id="UF" /></div>
                            <div><label className={styles.labelCadastroPaciente} htmlFor="cep"><b>Cep</b></label><input className={styles.inputCadastroPaciente} type="text" id="cep" /></div>
                            {/* </div> */}
                            {/* <div className='endTerceiraLinha'>
                        </div> */}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CadastroProfissionals