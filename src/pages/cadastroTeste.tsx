import '../css/cadastroTeste.css'

const CadastroTeste = () => {
    return (
        <>
            <body>
                <div className="container">
                    <h1>Cadastro Paciente</h1>
                    <div className="border-b">
                        <ul>
                            <li>Dados Cadastrais</li>
                        </ul>
                    </div>
                    <div className="teste">

                        <div>
                            <label htmlFor="razao-social">Nome </label>
                            <input type="text" id="razao-social" value="ARCE LOURENCO LTDA" />
                        </div>
                        <div>
                            <label htmlFor="data-nascimento">Data de nascimento</label>
                            <input type="date" id="data-nascimento" />
                        </div>
                        <div>
                            <label htmlFor="cpf">CPF</label>
                            <input type="number" id="cpf" />
                        </div>
                        <div>
                            <label htmlFor="credencial-detran">Credencial Detran</label>
                            <input type="text" id="credencial-detran" value="1136" />
                        </div>
                        <div>
                            <label htmlFor="telefone">Telefone</label>
                            <input type="number" id="telefone" value="1" />
                        </div>
                        <div>
                            <label htmlFor="whatssap">whatssap</label>
                            <input type="number" id="numero" />
                        </div>
                        <div>
                            <label htmlFor="cep">CEP</label>
                            <input type="text" id="cep" value="79081-190" />
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default CadastroTeste