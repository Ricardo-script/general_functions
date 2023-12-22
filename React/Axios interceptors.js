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


