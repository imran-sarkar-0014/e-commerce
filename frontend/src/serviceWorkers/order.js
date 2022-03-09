import axios from './axios'


export const createOrder = async (orders, callback, fallback) => {
    try {
        const res = await axios.post('/api/order/create', orders)
        callback(res.data)
    } catch (err) {
        fallback(err)
    }
}

export const acceptOrder = async (order, callback, fallback) => {
    try {
        const response = await axios.post('/api/order/accept', order)
        callback(response.data)
    } catch (err) {
        fallback(err)
    }
}

export const getOrders = async (callback, fallback) => {
    try {
        const response = await axios.get('/api/order')
        callback(response.data)
    } catch (err) {
        fallback(err)
    }
}
export const getOrder = async (id, callback, fallback) => {
    try {
        const response = await axios.get(`/api/order/${id}`)
        callback(response.data)
    } catch (err) {
        fallback(err)
    }
}