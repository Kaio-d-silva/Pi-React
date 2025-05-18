import React, { useState } from 'react';
import '../assets/css/cadastroPaciente.css'; // Seu CSS existente

// Interface para os dados dos formulários preenchidos (exemplo)
interface FilledForm {
    id: string | number;
    date: string; // Formato YYYY-MM-DD para facilitar ordenação e Date()
    type: string; // Ex: "Glicemia", "Diálise"
    // Outros dados do formulário poderiam estar aqui
}

const CadastroPaciente: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'dados' | 'historico'>('dados');

    // Dados mocados para o histórico de formulários.
    // Em uma aplicação real, isso viria de uma API ou estado global.
    const [filledForms, setFilledForms] = useState<FilledForm[]>([
        { id: 1, date: '2023-10-26', type: 'Controle de Glicemia' },
        // { id: 2, date: '2023-10-25', type: 'Controle de Diálise' },
        // { id: 3, date: '2023-10-24', type: 'Controle de Glicemia' },
        // { id: 4, date: '2023-10-20', type: 'Controle de Glicemia' },
    ]);

    // Função para formatar a data para exibição (dd/mm/aaaa)
    const formatDate = (dateString: string) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };

    return (
        <>
            <main className='Mainstyle'>
                <div className="containerCadastro">
                    {/* Navegação das Abas */}
                    <div className="tab-navigation">
                        <button
                            className={`tab-button ${activeTab === 'dados' ? 'active' : ''}`}
                            onClick={() => setActiveTab('dados')}
                        >
                            Dados Cadastrais
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'historico' ? 'active' : ''}`}
                            onClick={() => setActiveTab('historico')}
                        >
                            Histórico de Formulários
                        </button>
                    </div>

                    {/* Conteúdo das Abas */}
                    <div className="tab-content">
                        {activeTab === 'dados' && (
                            <>
                                <div className='areaCadastroPaciente'>
                                    <div className='TituloLocalCadastroPaciente'>
                                        <h1>Dados Paciente</h1>
                                    </div>
                                    <div className="informacoesPaciente">
                                        <div>
                                            <label className='LabelCadastroPaciente' htmlFor="nome"><b>Nome </b></label>
                                            <input className='InputCadastroPaciente' type="text" id="nome" />
                                        </div>
                                        <div>
                                            <label className='LabelCadastroPaciente' htmlFor="data-nascimento"><b>Data de nascimento</b></label>
                                            <input className='InputCadastroPaciente' type="date" id="data-nascimento" placeholder="dd/mm/aaaa" />
                                        </div>
                                        <div>
                                            <label className='LabelCadastroPaciente' htmlFor="cpf"><b>CPF</b></label>
                                            <input className='InputCadastroPaciente' type="text" id="cpf" /> {/* CPF geralmente é texto para incluir . e - */}
                                        </div>
                                        <div>
                                            <label className='LabelCadastroPaciente' htmlFor="telefone"><b>Telefone</b></label>
                                            <input className='InputCadastroPaciente' type="tel" id="telefone" />
                                        </div>
                                        <div>
                                            <label className='LabelCadastroPaciente' htmlFor="whatsapp"><b>WhatsApp</b></label> {/* Corrigido 'whatssap' */}
                                            <input className='InputCadastroPaciente' type="tel" id="whatsapp" />
                                        </div>
                                        <div>
                                            <label className='LabelCadastroPaciente' htmlFor="status"><b>Status</b></label> {/* Campo CEP estava duplicado, assumi que era Status */}
                                            <select className='InputCadastroPaciente' id="status">
                                                <option value="ativo">Ativo</option>
                                                <option value="inativo">Inativo</option>
                                                <option value="pendente">Pendente</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='areaEndereco'>
                                    <div><h1>Endereço</h1></div>
                                    <div className='endereco'>
                                        <div><label className='LabelCadastroPaciente' htmlFor="rua"><b>Rua</b></label><input className='InputCadastroPaciente' type="text" id="rua" /></div>
                                        <div><label className='LabelCadastroPaciente' htmlFor="bairro"><b>Bairro</b></label><input className='InputCadastroPaciente' type="text" id="bairro" /></div>
                                        <div><label className='LabelCadastroPaciente' htmlFor="numero"><b>Número</b></label><input className='InputCadastroPaciente' type="text" id="numero" /></div> {/* Corrigido 'numero' para 'Número' */}
                                        <div><label className='LabelCadastroPaciente' htmlFor="cidade"><b>Cidade</b></label><input className='InputCadastroPaciente' type="text" id="cidade" /></div>
                                        <div><label className='LabelCadastroPaciente' htmlFor="complemento"><b>Complemento</b></label><input className='InputCadastroPaciente' type="text" id="complemento" /></div>
                                        <div><label className='LabelCadastroPaciente' htmlFor="UF"><b>UF</b></label><input className='InputCadastroPaciente' type="text" id="UF" maxLength={2} /></div>
                                        <div><label className='LabelCadastroPaciente' htmlFor="cep"><b>CEP</b></label><input className='InputCadastroPaciente' type="text" id="cep-endereco" /></div> {/* ID 'cep' já usado, mudei para 'cep-endereco' */}
                                    </div>
                                </div>
                                <div className="form-actions-cadastro">
                                    <button type="submit" className="btn-submit-cadastro">Salvar Dados do Paciente</button>
                                </div>
                            </>
                        )}

                        {activeTab === 'historico' && (
                            <div className="historico-container">
                                <h2>Histórico de Formulários Preenchidos</h2>
                                {filledForms.length > 0 ? (
                                    <ul className="historico-lista">
                                        {filledForms.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Ordena mais recentes primeiro
                                        .map(form => (
                                            <li key={form.id} className="historico-item">
                                                <span className="historico-data">Data: {formatDate(form.date)}</span>
                                                <span className="historico-tipo">Tipo: {form.type}</span>
                                                {/* Você pode adicionar um botão/link para ver detalhes do formulário aqui */}
                                                <button className="btn-ver-detalhes">Ver Detalhes</button>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>Nenhum formulário preenchido encontrado para este paciente.</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default CadastroPaciente;