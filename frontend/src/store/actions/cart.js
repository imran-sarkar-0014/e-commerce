import { SET_CART } from '../constants/cart'

export const setCart = (carts) => {
    return {
        type: SET_CART,
        payload: carts
    }
}