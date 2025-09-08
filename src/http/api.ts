import axios, {
    AxiosInstance,
    AxiosResponse,
    InternalAxiosRequestConfig
} from "axios"


const api: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        'Content-Type' : 'application/json'
    }
})

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token =  localStorage.getItem('token')
        if(token){
            config.headers.set('Authorization', `Bearer ${token}`)
        }
        return config
    }
)


api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    async (error) =>{
        const {status} = error.response
        if(status > 404){
            console.error(error)
            return Promise.reject( 
                new Error(
                    JSON.stringify({
                        status,
                        message: error.response.data?.message || 'Erro desconhecido'
                    })
            ))
        }
    }
)

export default api