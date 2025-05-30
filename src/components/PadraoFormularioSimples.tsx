import React from 'react';
// Importe o CSS SIMPLES (adjust path if your structure is different)
import '../assets/css/PadraoFormularioSimples.css';

// Interface for complex value types (like the one with the bar)
interface DataEntryValueObject {
  text: string | number;
  bar?: boolean; // Indicates if a bar should be shown
  unit?: string;
}

// Interface for each data item
interface DataEntry {
  label: string;
  value: string | number | DataEntryValueObject;
}

const FormResultSimple: React.FC = () => {
  // 1. Informação da Sessão
  const sessionInfo: DataEntry[] = [
    { label: 'Data da Sessão', value: '25/04/2024' }, // Kept from original
    { label: 'Horário de Início', value: '14:00' },    // Kept from original
    { label: 'Horário de Fim', value: '19:30' },       // Kept from original
  ];

  // 2. Detalhes da Diálise
  const dialysisDetails: DataEntry[] = [
    { label: 'Solução Utilizada', value: 'Ex: Glicose 1,5%' }, // Moved from old sessionInfo
    { label: 'Dreno Inicial (ml)', value: 1500 },             // New field, example value
    { label: 'UF Total (ml)', value: 200 },                   // Moved from old sessionInfo
    { label: 'T.P.M', value: 8 },                             // Moved from old sessionInfo
    { label: 'Aspecto do Líquido Drenado', value: 'Claro' },   // Moved from old sessionInfo
  ];

  // 3. Medições do Paciente
  const patientMeasurements: DataEntry[] = [
    { label: 'Peso Pré-Diálise (kg)', value: 70.5 },         // New field, example value
    { label: 'Peso Pós-Diálise (kg)', value: 68.8 },         // New field, example value
    { label: 'Pressão Arterial (mmHg)', value: '120/80' },   // New field, example value
    { label: 'Glicemia (mg/dL)', value: 95 },                // New field, example value
  ];

  // 4. Dados de Glicemía (Kept as is, as requested)
  const glycemiaInfo: DataEntry[] = [
    { label: 'DATA', value: '25/04/2024' },
    { label: 'Glicemia Jejum', value: 105 },
    { label: 'Glicemia Antes do Almoço', value: 140 },
    {
      label: 'Glicemia 2H Após o Almoço',
      value: {
        text: 180,
        bar: true,
        unit: 'mg/dL',
      },
    },
    { label: 'Glicemia Antes do Jantar', value: 135 },
    { label: 'Glicemia 2H Após o Jantar', value: 160 },
  ];

  const renderValue = (value: string | number | DataEntryValueObject) => {
    if (typeof value === 'object' && value !== null && 'text' in value) {
      const val = value as DataEntryValueObject;
      return (
        <div className="item-dado-valor-complexo">
          <span>{val.text}</span>
          {val.bar && <div className="barra-visual"></div>}
          {val.unit && <span className="item-dado-unidade">{val.unit}</span>}
        </div>
      );
    }
    return <span className="item-dado-valor-simples">{value}</span>;
  };

  // Helper function to render a section
  const renderSection = (title: string, data: DataEntry[]) => (
    <div className="secao-formulario">
      <h2 className="secao-titulo">{title}</h2>
      {data.map((item, index) => (
        <div className="item-dado" key={`${title.replace(/\s+/g, '-')}-${index}`}>
          <span className="item-dado-label">{item.label}</span>
          {renderValue(item.value)}
        </div>
      ))}
    </div>
  );

  return (
    <div className="organiza-geral">
      <div className="form-resultado-container">
        <div className="form-cabecalho">
          <h1>Resultado do formulário</h1>
          <button className="botao-compartilhar">Compartilhar</button>
        </div>

        {renderSection("Informações da Sessão", sessionInfo)}
        {renderSection("Detalhes da Diálise", dialysisDetails)}
        {renderSection("Medições do Paciente", patientMeasurements)}
        {renderSection("Dados de Glicemía", glycemiaInfo)}

      </div>
    </div>
  );
};

export default FormResultSimple;