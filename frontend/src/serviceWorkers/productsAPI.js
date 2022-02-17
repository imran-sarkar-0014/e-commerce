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

