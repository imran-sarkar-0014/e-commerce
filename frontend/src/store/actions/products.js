import { SET_PRODUCT } from '../constants/products'

export const setProduct = (products) => {
    return {
        type: SET_PRODUCT,
        payload: products
    }
}