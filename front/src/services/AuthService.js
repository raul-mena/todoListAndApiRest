import axios from 'axios';
import { baseUrl } from '../utils/Constants';

export const login = (username, password) => {
    return axios.post(baseUrl + 'users/auth', { username, password })
}