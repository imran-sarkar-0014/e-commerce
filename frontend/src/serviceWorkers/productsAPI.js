import axios from 'axios'

export const getProducts = async (callback, fallback) => {
    try {

        const products = await axios.get('/api/products')
        callback(products.data)

    } catch (err) {
        console.log(err)
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
