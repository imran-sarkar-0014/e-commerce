import { SET_ORDER } from '../reducers/orders'

export const setOrders = (orders) => {
    return {
        type: SET_ORDER,
        payload: orders
    }
}