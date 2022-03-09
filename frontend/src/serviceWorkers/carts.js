import axios from "./axios"

export const getCarts = async (callback, fallback) => {
    try {
        const result = await axios.get('/api/carts')
        callback(result.data)
    } catch (err) {
        fallback(err)
    }
}

export const deleteCarts = async (carts, callback, fallback) => {
    try {

        const result = await axios.put('/api/carts/', carts)
        callback(result.data)
    } catch (err) {
        fallback(err)
    }
}

export const addToCart = async (cart, callback, fallback) => {
    try {
        const result = await axios.post('/api/carts', cart)
        callback(result.data)
    } catch (err) {
        fallback(err)
    }
}

