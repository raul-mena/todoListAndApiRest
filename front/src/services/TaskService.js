import axios from 'axios';
import { baseUrl } from '../utils/Constants';
import { getUser } from '../utils/Auth';


export const getByUSerId = () => {
    const userInfo = getUser();
    return axios.get(baseUrl + 'tasks/' + userInfo._id)
}

export const getTask = (id) => {
    return axios.get(baseUrl + 'task/' + id)
}

export const updateTask = (id, data) => {
    return axios.put(baseUrl + 'task/' + id, data)
}

export const saveTask = (data) => {
    const userInfo = getUser();
    const task = {...data, userId: userInfo._id}
    return axios.post(baseUrl + 'tasks', task)
}