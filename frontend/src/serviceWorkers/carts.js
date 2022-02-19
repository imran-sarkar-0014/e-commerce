import axios from "./axios"

export const getCarts = async (callback, fallback) => {
    try {
        const result = await axios.get('/api/carts')
        callback(result.data)
    } catch (err) {
        fallback(err)
    }
} 