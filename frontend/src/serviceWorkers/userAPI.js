import axios from './axios'

export const login = async (credentials, callback, fallback) => {
    try {
        const user = await axios.post('/api/users/login', credentials)
        callback(user.data)
    } catch (err) {
        fallback(err)
    }
}

export const getUser = async (callback, fallback) => {
    try {
        const user = await axios.get('/api/users')
        callback(user.data)
    } catch (err) {
        fallback(err)
    }
}