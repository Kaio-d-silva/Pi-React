import '../assets/css/cadastroProfissional.css'

const CadastroProfissionals = () => {
    return (
        <>
            <main className='Mainstyle'>
                <div className="containerCadastro">
                    <div className='areaCadastroPaciente'>
                        <div className='TituloLocalCadastroPaciente'>
                            <h1>Dados Profissional</h1>
                            {/* <div className="border-b">
                            <ul>
                                <li>Dados Cadastrais</li>
                            </ul>
                        </div> */}
                        </div>
                        <div className="informacoesPaciente">

                            <div>
                                <label className='LabelCadastroPaciente' htmlFor="nome"><b>Nome </b></label>
                                <input className='InputCadastroPaciente' type="text" id="nome" />
                            </div>
                            <div>
                                <label className='LabelCadastroPaciente' htmlFor="data-nascimento"><b>Data de nascimento</b></label>
                                <input className='InputCadastroPaciente' type="date" id="data-nascimento" />
                            </div>
                            <div>
                                <label className='LabelCadastroPaciente' htmlFor="cpf"><b>CPF</b></label>
                                <input className='InputCadastroPaciente' type="number" id="cpf" />
                            </div>
                            <div>
                                <label className='LabelCadastroPaciente' htmlFor="telefone"><b>Telefone</b></label>
                                <input className='InputCadastroPaciente' type="tel" id="telefone" />
                            </div>
                            <div>
                                <label className='LabelCadastroPaciente' htmlFor="whatssap"><b>Cargo</b></label>
                                <input className='InputCadastroPaciente' type="number" id="whatssap" />
                            </div>
                            <div>
                                <label className='LabelCadastroPaciente' htmlFor="cep"><b>status</b></label>
                                <input className='InputCadastroPaciente' type="text" id="cep" />
                            </div>
                        </div>
                    </div>

                    <div className='areaEndereco'>
                        <div><h1>Endereço</h1></div>
                        <div className='endereco'>
                            {/* <div className='endPrimeiraLinha'> */}
                            <div><label className='LabelCadastroPaciente' htmlFor="rua"><b>Rua</b></label><input className='InputCadastroPaciente' type="text" id="rua" /></div>
                            <div><label className='LabelCadastroPaciente' htmlFor="bairro"><b>Bairro</b></label><input className='InputCadastroPaciente' type="text" id="bairro" /></div>
                            <div><label className='LabelCadastroPaciente' htmlFor="numero"><b>numero</b></label><input className='InputCadastroPaciente' type="text" id="numero" /></div>
                            {/* </div> */}
                            {/* <div className='endSegundaLinha'> */}
                            <div><label className='LabelCadastroPaciente' htmlFor="cidade"><b>Cidade</b></label><input className='InputCadastroPaciente' type="text" id="cidade" /></div>
                            <div><label className='LabelCadastroPaciente' htmlFor="complemento"><b>complemento</b></label><input className='InputCadastroPaciente' type="text" id="complemento" /></div>
                            <div><label className='LabelCadastroPaciente' htmlFor="UF"><b>UF</b></label><input className='InputCadastroPaciente' type="text" id="UF" /></div>
                            <div><label className='LabelCadastroPaciente' htmlFor="cep"><b>Cep</b></label><input className='InputCadastroPaciente' type="text" id="cep" /></div>
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