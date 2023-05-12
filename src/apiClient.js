import axios from 'axios';
import { config } from './Config';

const API = axios.create({
    baseURL: config.API_BASE_URL
});

API.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${localStorage.getItem("jwt")}`
    return req;
})
export default API;
