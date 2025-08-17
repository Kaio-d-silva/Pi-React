import React, { useState } from 'react';
import styles from '../assets/css/FormularioCadastro.module.css';

const CadastroPaciente: React.FC = () => {

    return (
        <>
            <main className={styles.mainstyle}>
                <div className={styles.containerCadastro}>
                    <div className={styles.tabContent}>
                            <>
                                <div className={styles.areaCadastroPaciente}>
                                    <div className={styles.TituloLocalCadastroPaciente}>
                                        <h1>Dados Paciente</h1>
                                    </div>
                                    <div className={styles.informacoesPaciente}>
                                        <div>
                                            <label className={styles.labelCadastroPaciente} htmlFor="nome"><b>Nome </b></label>
                                            <input className={styles.inputCadastroPaciente} type="text" id="nome" />
                                        </div>
                                        <div>
                                            <label className={styles.labelCadastroPaciente} htmlFor="data-nascimento"><b>Data de nascimento</b></label>
                                            <input className={styles.inputCadastroPaciente} type="date" id="data-nascimento" placeholder="dd/mm/aaaa" />
                                        </div>
                                        <div>
                                            <label className={styles.labelCadastroPaciente} htmlFor="cpf"><b>CPF</b></label>
                                            <input className={styles.inputCadastroPaciente} type="text" id="cpf" />
                                        </div>
                                        <div>
                                            <label className={styles.labelCadastroPaciente} htmlFor="telefone"><b>Telefone</b></label>
                                            <input className={styles.inputCadastroPaciente} type="tel" id="telefone" />
                                        </div>
                                        <div>
                                            <label className={styles.labelCadastroPaciente} htmlFor="whatsapp"><b>WhatsApp</b></label>
                                            <input className={styles.inputCadastroPaciente} type="tel" id="whatsapp" />
                                        </div>
                                        <div>
                                            <label className={styles.labelCadastroPaciente} htmlFor="status"><b>Status</b></label>
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
                                        <div><label className={styles.labelCadastroPaciente} htmlFor="rua"><b>Rua</b></label><input className={styles.inputCadastroPaciente} type="text" id="rua" placeholder="" /></div>
                                        <div><label className={styles.labelCadastroPaciente} htmlFor="bairro"><b>Bairro</b></label><input className={styles.inputCadastroPaciente} type="text" id="bairro" placeholder="" /></div>
                                        <div><label className={styles.labelCadastroPaciente} htmlFor="numero"><b>Número</b></label><input className={styles.inputCadastroPaciente} type="text" id="numero" placeholder="" /></div> {/* Corrigido 'numero' para 'Número' */}
                                        <div><label className={styles.labelCadastroPaciente} htmlFor="cidade"><b>Cidade</b></label><input className={styles.inputCadastroPaciente} type="text" id="cidade" placeholder="" /></div>
                                        <div><label className={styles.labelCadastroPaciente} htmlFor="complemento"><b>Complemento</b></label><input className={styles.inputCadastroPaciente} type="text" id="complemento" placeholder="" /></div>
                                        <div><label className={styles.labelCadastroPaciente} htmlFor="UF"><b>UF</b></label><input className={styles.inputCadastroPaciente} type="text" id="UF" maxLength={2} placeholder="" /></div>
                                        <div><label className={styles.labelCadastroPaciente} htmlFor="cep"><b>CEP</b></label><input className={styles.inputCadastroPaciente} type="text" id="cep-endereco" placeholder="" /></div> {/* ID 'cep' já usado, mudei para 'cep-endereco' */}
                                    </div>
                                </div>
                                <div className={styles.formActionsCadastro}>
                                    <button type="submit" className={styles.btnSubmitCadastro}>Salvar Dados do Paciente</button>
                                </div>
                            </>
                    </div>
                </div>
            </main>
        </>
    );
};

export default CadastroPaciente;