import axios from 'axios';
import { config } from './Config';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default axios.create({
    baseURL: config.API_BASE_URL,
    headers: {
        Authorization : `Bearer ${cookies.get("jwt")}`
    }
});
