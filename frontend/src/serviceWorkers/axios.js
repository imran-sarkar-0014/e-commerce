import axios from 'axios'

const _axios_instance = axios.create({
    // baseURL: 'http://localhost:8000'
})

export const setHeader = (token) => {
    _axios_instance.defaults.headers['Authorization'] = `bearer ${token}`
}

export default _axios_instance