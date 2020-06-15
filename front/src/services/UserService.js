import axios from 'axios';
import { baseUrl } from '../utils/Constants';

export const create = (user) => {
    return axios.post(baseUrl + 'users', user)
}