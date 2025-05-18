import "../assets/css/login.css";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();
    const login = () =>{
        navigate("/");
    }
    return (
        <main className="login-page">
            <div className="login-container">
                <div className="login-image">
                </div>
                <div className="login-form">
                    <h1>LOGIN</h1>
                    <form id="form-login" action="#">
                        <div className="input-group">
                            <input type="text" id="username" name="username" placeholder="Nome de usuário" required />
                        </div>
                        <div className="input-group">
                            <input type="password" id="password" name="password" placeholder="Senha" required />
                        </div>
                        <button 
                        type="button"
                        onClick={login}>ENTRAR</button>
                        <a href="/" className="forgot-link">Esqueceu usuário ou senha?</a>
                        <a href="/" className="signup-link">CADASTRAR-SE</a>
                    </form>
                </div>
            </div>
        </main>
    );
}
export default Login;