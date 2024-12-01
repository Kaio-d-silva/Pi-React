import '../css/cadastroProfissional.css'

const CadastroProfissionals = () => {
    return (
        <>
            <main className='MainStyleCadastroProfissional'>
                <div className="containerCadastroProfissional">
                    <div className='areaCadastroProfissional'>
                        <div className='TituloLocal'>
                            <h1>Dados Profissional</h1>
                            {/* <div className="border-b">
                            <ul>
                                <li>Dados Cadastrais</li>
                            </ul>
                        </div> */}
                        </div>
                        <div className="informacoesProfissional">

                            <div>
                                <label className='LabelCadastroProfissional' htmlFor="nome">Nome </label>
                                <input className='InputCadastroProfissional' type="text" id="nome" />
                            </div>
                            <div>
                                <label className='LabelCadastroProfissional' htmlFor="telefone">Telefone</label>
                                <input className='InputCadastroProfissional' type="number" id="telefone" />
                            </div>
                            <div>
                                <label className='LabelCadastroProfissional' htmlFor="tipoRegistro">Tipo Registro</label>
                                <input className='InputCadastroProfissional' type="text" id="tipoRegistro" />
                            </div>
                            <div>
                                <label className='LabelCadastroProfissional' htmlFor="telefone">Registro</label>
                                <input className='InputCadastroProfissional' type="tel" id="telefone" />
                            </div>
                            {/* <div>
                                <label className='LabelCadastroProfissional' htmlFor="whatssap">whatssap</label>
                                <input className='InputCadastroProfissional' type="number" id="whatssap" />
                            </div> */}
                            {/* <div>
                                <label className='LabelCadastroProfissional' htmlFor="cep">CEP</label>
                                <input className='InputCadastroProfissional' type="text" id="cep" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CadastroProfissionals