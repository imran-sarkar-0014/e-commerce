import axios from './axios'

export const getProducts = async (callback, fallback) => {
    try {

        const products = await axios.get('/api/products')
        callback(products.data)

    } catch (err) {
        fallback(err)
    }
}

export const getOneProductDetails = async (id, callback, fallback) => {
    try {
        const product = await axios.get('/api/products/' + id)
        callback(product.data)
    } catch (err) {
        fallback(err)
    }
}

export const getFavs = async (callback, fallback) => {
    try {
        const response = await axios.get('/api/favorite')
        callback(response.data)
    } catch (err) {
        fallback(err)
    }
}

export const addToFav = async (id, callback, fallback) => {
    try {

        const response = await axios.post(`/api/favorite/${id}`)
        callback(response.data)

    } catch (err) {
        fallback(err)
    }
}
