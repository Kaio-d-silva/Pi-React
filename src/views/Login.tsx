import styles from "../assets/css/Login.module.css";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();
    const login = () =>{
        navigate("/");
    }
    return (
        <main className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <div className={styles.loginImage}>
                </div>
                <div className={styles.loginForm}>
                    <h1>LOGIN</h1>
                    <form id="form-login" action="#">
                        <div className={styles.inputGroup}>
                            <input type="text" id="username" name="username" placeholder="Nome de usuário" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="password" id="password" name="password" placeholder="Senha" required />
                        </div>
                        <button 
                        type="button"
                        onClick={login}>ENTRAR</button>
                        <a href="/" className={styles.forgotLink}>Esqueceu usuário ou senha?</a>
                        <a href="/" className={styles.signupLink}>CADASTRAR-SE</a>
                    </form>
                </div>
            </div>
        </main>
    );
}
export default Login;