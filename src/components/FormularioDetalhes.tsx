import React from 'react';
import style from '../assets/css/FormularioDetalhes.module.css';
// Estrutura para os dados da sessão
interface SessaoInfo {
  data: string;
  horarioInicio: string;
  horarioFim: string;
}

// Estrutura para as medições gerais do paciente
interface MedicoesPaciente {
  pesoPreDialiseKg: number;
  pesoPosDialiseKg: number;
  pressaoArterial: string; // ex: "120/80"
  glicemiaGeral: number;
}

// Estrutura para os dados detalhados de glicemia
interface DadosGlicemia {
  jejum: number;
  antesAlmoco: number;
  aposAlmoco2h: number;
  antesJantar: number;
  aposJantar2h: number;
}

// Estrutura para os detalhes técnicos da diálise
export interface DetalhesDialise {
  solucaoUtilizada: string;
  drenoInicialMl: number;
  ufTotalMl: number;
  tpm: number;
  aspectoLiquidoDrenado: string;
}

// Interface principal que o nosso componente receberá como prop
export interface FormularioData {
  sessao: SessaoInfo;
  medicoes: MedicoesPaciente;
  glicemia: DadosGlicemia;
  dialise: DetalhesDialise;
}

// Props para o componente principal
interface FormularioDetalhesProps {
  dados: FormularioData;
}
// Componente auxiliar para exibir um item de informação (Rótulo e Valor)
// Isso evita repetição e mantém o código limpo
const InfoItem: React.FC<{ label: string; value: string | number; unit?: string }> = ({ label, value, unit }) => (
  <div className={style.infoItem}>
    <span className={style.infoLabel}>{label}:</span>
    <span className={style.infoValue}>
      {value} {unit}
    </span>
  </div>
);

// Componente principal para exibir todos os detalhes do formulário
const FormularioDetalhes: React.FC<FormularioDetalhesProps> = ({ dados }) => {
  return (
    <div className={style.formDetailsContainer}>
      {/* Card: Informações da Sessão */}
      <div className={style.detailsCard}>
        <h3 className={style.cardTitle}>Informações da Sessão</h3>
        <InfoItem label="Data da Sessão" value={dados.sessao.data} />
        <InfoItem label="Horário de Início" value={dados.sessao.horarioInicio} />
        <InfoItem label="Horário de Fim" value={dados.sessao.horarioFim} />
      </div>

      {/* Card: Medições do Paciente */}
      <div className={style.detailsCard}>
        <h3 className={style.cardTitle}>Medições do Paciente</h3>
        <InfoItem label="Peso Pré-Diálise" value={dados.medicoes.pesoPreDialiseKg} unit="kg" />
        <InfoItem label="Peso Pós-Diálise" value={dados.medicoes.pesoPosDialiseKg} unit="kg" />
        <InfoItem label="Pressão Arterial" value={dados.medicoes.pressaoArterial} unit="mmHg" />
        <InfoItem label="Glicemia" value={dados.medicoes.glicemiaGeral} unit="mg/dL" />
      </div>

      {/* Card: Dados de Glicemia */}
      <div className={style.detailsCard}>
        <h3 className={style.cardTitle}>Dados de Glicemia</h3>
        <InfoItem label="Glicemia Jejum" value={dados.glicemia.jejum} unit="mg/dL" />
        <InfoItem label="Antes do Almoço" value={dados.glicemia.antesAlmoco} unit="mg/dL" />
        <InfoItem label="2H Após o Almoço" value={dados.glicemia.aposAlmoco2h} unit="mg/dL" />
        <InfoItem label="Antes do Jantar" value={dados.glicemia.antesJantar} unit="mg/dL" />
        <InfoItem label="2H Após o Jantar" value={dados.glicemia.aposJantar2h} unit="mg/dL" />
      </div>
      
      {/* Card: Detalhes da Diálise */}
      <div className={style.detailsCard}>
        <h3 className={style.cardTitle}>Detalhes da Diálise</h3>
        <InfoItem label="Solução Utilizada" value={dados.dialise.solucaoUtilizada} />
        <InfoItem label="Dreno Inicial" value={dados.dialise.drenoInicialMl} unit="ml" />
        <InfoItem label="UF Total" value={dados.dialise.ufTotalMl} unit="ml" />
        <InfoItem label="T.P.M" value={dados.dialise.tpm} />
        <InfoItem label="Aspecto do Líquido" value={dados.dialise.aspectoLiquidoDrenado} />
      </div>
    </div>
  );
};

export default FormularioDetalhes;