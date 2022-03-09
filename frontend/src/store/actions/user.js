import {
    SET_TOKEN,
    SET_USER, SET_CARTS, SET_ORDERS, RESET_USER
} from '../constants/user'


export const setToken = (tok) => {
    return {
        type: SET_TOKEN,
        payload: tok
    }
}

export const resetUser = () => {
    return {
        type: RESET_USER
    }
}

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: {
            logged: true,
            data: user
        }
    }
}

export const setCarts = (carts) => {
    return {
        type: SET_CARTS,
        payload: carts
    }
}

export const setOrders = (orders) => {
    return {
        type: SET_ORDERS,
        payload: orders
    }
}