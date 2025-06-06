import React, { useState } from 'react';
import styles from '../assets/css/FormularioCadastro.module.css'; // Seu CSS existente
import HistoricoFormularios from '../components/HistoricoFormularios'; // Importando o componente de histórico



const CadastroPaciente: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'dados' | 'historico'>('dados');

    return (
        <>
            <main className={styles.mainstyle}>
                <div className={styles.containerCadastro}>
                    {/* Navegação das Abas */}
                    <div className={styles.tabNavigation}>
                        <button
                            className={`${styles.tabButton} ${activeTab === 'dados' ? `${styles.active}` : ''}`}
                            onClick={() => setActiveTab('dados')}
                        >
                            Dados Cadastrais
                        </button>
                        <button
                            className={`${styles.tabButton} ${activeTab === 'historico' ? `${styles.active}` : ''}`}
                            onClick={() => setActiveTab('historico')}
                        >
                            Histórico de Formulários
                        </button>
                    </div>

                    {/* Conteúdo das Abas */}
                    <div className={styles.tabContent}>
                        {activeTab === 'dados' && (
                            <>
                                <div className={styles.areaCadastroPaciente}>
                                    <div className={styles.TituloLocalCadastroPaciente}>
                                        <h1>Dados Paciente</h1>
                                    </div>
                                    <div className={styles.informacoesPaciente}>
                                        <div>
                                            <label className={styles.labelCadastroPaciente} htmlFor="nome"><b>Nome </b></label>
                                            <input className={styles.inputCadastroPaciente} type="text" id="nome"  defaultValue="Kaio Mendes"/>
                                        </div>
                                        <div>
                                            <label className={styles.labelCadastroPaciente} htmlFor="data-nascimento"><b>Data de nascimento</b></label>
                                            <input className={styles.inputCadastroPaciente} type="date" id="data-nascimento" placeholder="dd/mm/aaaa"/>
                                        </div>
                                        <div>
                                            <label className={styles.labelCadastroPaciente} htmlFor="cpf"><b>CPF</b></label>
                                            <input className={styles.inputCadastroPaciente} type="text" id="cpf" defaultValue="097.933.510-80"/> {/* CPF geralmente é texto para incluir . e - */}
                                        </div>
                                        <div>
                                            <label className={styles.labelCadastroPaciente} htmlFor="telefone"><b>Telefone</b></label>
                                            <input className={styles.inputCadastroPaciente} type="tel" id="telefone" defaultValue="(67) 9 9234 - 2565"/>
                                        </div>
                                        <div>
                                            <label className={styles.labelCadastroPaciente} htmlFor="whatsapp"><b>WhatsApp</b></label> {/* Corrigido 'whatssap' */}
                                            <input className={styles.inputCadastroPaciente} type="tel" id="whatsapp" defaultValue="(67) 9 9234 - 2565"/>
                                        </div>
                                        <div>
                                            <label className={styles.labelCadastroPaciente} htmlFor="status"><b>Status</b></label> {/* Campo CEP estava duplicado, assumi que era Status */}
                                            <select className={styles.inputCadastroPaciente} id="status">
                                                <option value="ativo">Ativo</option>
                                                <option value="inativo">Inativo</option>
                                                <option value="pendente">Pendente</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.areaEndereco}>
                                    <div><h1>Endereço</h1></div>
                                    <div className={styles.endereco}>
                                        <div><label className={styles.labelCadastroPaciente} htmlFor="rua"><b>Rua</b></label><input className={styles.inputCadastroPaciente} type="text" id="rua" defaultValue="Dr. Mário Machado de Lemos"/></div>
                                        <div><label className={styles.labelCadastroPaciente} htmlFor="bairro"><b>Bairro</b></label><input className={styles.inputCadastroPaciente} type="text" id="bairro" defaultValue="jardim Londrina"/></div>
                                        <div><label className={styles.labelCadastroPaciente} htmlFor="numero"><b>Número</b></label><input className={styles.inputCadastroPaciente} type="text" id="numero" defaultValue="240"/></div> {/* Corrigido 'numero' para 'Número' */}
                                        <div><label className={styles.labelCadastroPaciente} htmlFor="cidade"><b>Cidade</b></label><input className={styles.inputCadastroPaciente} type="text" id="cidade" defaultValue="Dourados"/></div>
                                        <div><label className={styles.labelCadastroPaciente} htmlFor="complemento"><b>Complemento</b></label><input className={styles.inputCadastroPaciente} type="text" id="complemento" defaultValue="Senac Cursos"/></div>
                                        <div><label className={styles.labelCadastroPaciente} htmlFor="UF"><b>UF</b></label><input className={styles.inputCadastroPaciente} type="text" id="UF" maxLength={2} defaultValue="MS"/></div>
                                        <div><label className={styles.labelCadastroPaciente} htmlFor="cep"><b>CEP</b></label><input className={styles.inputCadastroPaciente} type="text" id="cep-endereco" defaultValue="79814-150"/></div> {/* ID 'cep' já usado, mudei para 'cep-endereco' */}
                                    </div>
                                </div>
                                <div className={styles.formActionsCadastro}>
                                    <button type="submit" className={styles.btnSubmitCadastro}>Salvar Dados do Paciente</button>
                                </div>
                            </>
                        )}

                        {activeTab === 'historico' && (
                            <div className={styles.areaHistorico}>
                                <HistoricoFormularios/>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default CadastroPaciente;