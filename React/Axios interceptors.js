import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dummyjson.com'
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('@token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;

//-----------------------------------------------------------------------------------
// Verifica se o token é válido
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Verifica se o erro é de autenticação (código de status 401)
        if (error.response.data.message === 'Token inválido ou não autorizado') {
            // Limpa os tokens do localStorage ou sessionStorage
            localStorage.removeItem('@tokenDecoder');
            localStorage.removeItem('@token');

            // Redireciona para a tela de login
            window.location.href = '/';
        }
        return Promise.reject(error);
    }
);


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

// com dois tokens:

import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_HOST + '/',
});

api.interceptors.request.use((config) => {
    const tokenDecoder = localStorage.getItem('@tokenDecoder');
    const token = localStorage.getItem('@token');

    if (tokenDecoder) {
        config.headers.Authorization = tokenDecoder;
    }

    if (token) {
        config.headers.AuthorizationSaleOfServices = token;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;


