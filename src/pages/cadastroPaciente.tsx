import '../css/cadastroPaciente.css'

const CadastroPaciente = () => {
    return (
        <>
            <main className='Mainstyle'>
                <div className="containerCadastro">
                    <div className='areaCadastroPaciente'>
                    <div className='TituloLocal'>
                        <h1>Dados Paciente</h1>
                        {/* <div className="border-b">
                            <ul>
                                <li>Dados Cadastrais</li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="informacoesPaciente">

                            <div>
                                <label className='LabelCadastroPaciente' htmlFor="nome">Nome </label>
                                <input className='InputCadastroPaciente' type="text" id="nome" />
                            </div>
                            <div>
                                <label className='LabelCadastroPaciente' htmlFor="data-nascimento">Data de nascimento</label>
                                <input className='InputCadastroPaciente' type="date" id="data-nascimento" />
                            </div>
                            <div>
                                <label className='LabelCadastroPaciente' htmlFor="cpf">CPF</label>
                                <input className='InputCadastroPaciente' type="number" id="cpf" />
                            </div>
                            <div>
                                <label className='LabelCadastroPaciente' htmlFor="telefone">Telefone</label>
                                <input className='InputCadastroPaciente' type="tel" id="telefone" />
                            </div>
                            <div>
                                <label className='LabelCadastroPaciente' htmlFor="whatssap">whatssap</label>
                                <input className='InputCadastroPaciente' type="number" id="whatssap" />
                            </div>
                            <div>
                                <label className='LabelCadastroPaciente' htmlFor="cep">CEP</label>
                                <input className='InputCadastroPaciente' type="text" id="cep" />
                            </div>
                    </div>
                    </div>
                    
                    <div className='areaEndereco'>
                    <div><h1>Endereço</h1></div>
                    <div className='endereco'>
                        {/* <div className='endPrimeiraLinha'> */}
                        <div><label className='LabelCadastroPaciente' htmlFor="rua">Rua</label><input className='InputCadastroPaciente' type="text" id="rua"/></div>
                        <div><label className='LabelCadastroPaciente' htmlFor="bairro">Bairro</label><input className='InputCadastroPaciente' type="text" id="bairro"/></div>
                        <div><label className='LabelCadastroPaciente' htmlFor="numero">numero</label><input className='InputCadastroPaciente' type="text" id="numero"/></div>
                        {/* </div> */}
                        {/* <div className='endSegundaLinha'> */}
                        <div><label className='LabelCadastroPaciente' htmlFor="cidade">Cidade</label><input className='InputCadastroPaciente' type="text" id="cidade"/></div>
                        <div><label className='LabelCadastroPaciente' htmlFor="complemento">complemento</label><input className='InputCadastroPaciente' type="text" id="complemento"/></div>
                        <div><label className='LabelCadastroPaciente' htmlFor="UF">UF</label><input className='InputCadastroPaciente' type="text" id="UF"/></div>
                        <div><label className='LabelCadastroPaciente' htmlFor="cep">Cep</label><input className='InputCadastroPaciente' type="text" id="cep"/></div>
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

export default CadastroPaciente