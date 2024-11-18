import { BorderColor } from "@mui/icons-material";
import '../css/cadastro.css'

const Cadastro = () => {
  return (
    <>
      <div>
        <p>Cadastro Paciente</p>
      <div className="formulario">

        <div style={{margin : "20px 40px", color: "black"}}> Dados</div>

        <div className="dadosPaciente">
          <div className="linhaPaciente">
          <div><p><strong>Nome Paciente</strong></p><input type="text" /></div>
          <div><p><strong>Data de nascimento</strong></p><input type="date" /></div>
          </div>

          <div className="linhaCPF">
            <div><p><strong>CPF</strong></p><input type="text" /></div>
          
          </div>

          <div className="linhaTelefone">
          <div><p><strong>Telefone</strong></p><input type="text" /></div>
          <div><p><strong>Whatsap</strong></p><input type="text" /></div>
          </div>

        </div>

      </div>
      </div>
    </>
  );
};
export default Cadastro