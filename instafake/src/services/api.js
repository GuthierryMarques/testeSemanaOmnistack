import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.43.209:3333'
})

export default api;