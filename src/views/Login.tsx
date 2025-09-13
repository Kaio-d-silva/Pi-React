import styles from "../assets/css/Login.module.css";
import { useNavigate } from "react-router-dom";
import api from "../http/api";
import { useState } from "react";
import Snackbar, { SnackbarState } from "../components/SnackBar";



const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [snackbar, setSnackbar] = useState<SnackbarState>({
        message: "",
        type: "success",
        duration: 0
    })


    const navigate = useNavigate();

    const validateData = () => {
        let message = "Preencha todos os campos"
        const duration = 1500
        
        if (email === '' || senha === '') {
            setSnackbar({
            message: message,
            type: "error",
            duration,
        });
            return false
        }

        login()
    }

    const login = async () => {
        const duration = 1000

        const response = await api.post('/login', {
            senha: senha,
            email: email
        })

        let statusRequicao : SnackbarState["type"]= "error"
        let messageSnackBar = "Não foi possivel realizar login"

        if (response.status === 200) {

            const { accessToken, refreshToken, message } = response.data

            statusRequicao = "success"
            messageSnackBar = message

            localStorage.setItem('token', accessToken)
            localStorage.setItem('refreshToken', refreshToken)
        }

        setSnackbar({
            message: messageSnackBar,
            type: statusRequicao,
            duration,
        });

        if (response.status === 200) {
            setTimeout(() => {
                navigate("/");
            }, duration)

        }



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
                            <input onChange={(e) => (setEmail(e.target.value))} type="text" id="username" name="username" placeholder="Nome de usuário" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <input onChange={(e) => (setSenha(e.target.value))} type="password" id="password" name="password" placeholder="Senha" required />
                        </div>
                        <button
                            type="button"
                            onClick={validateData}>ENTRAR</button>
                        <a href="/" className={styles.forgotLink}>Esqueceu usuário ou senha?</a>
                        <a href="/" className={styles.signupLink}>CADASTRAR-SE</a>
                    </form>
                </div>
            </div>
            <Snackbar
                    message={snackbar.message}
                    type={snackbar.type}
                    duration={snackbar.duration}
                    onClose={() =>
                        setSnackbar({ message: '', type: 'success', duration: 0 })
                    }
                />
        </main>
    );
}
export default Login;