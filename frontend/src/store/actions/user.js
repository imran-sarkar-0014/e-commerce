import {
    SET_TOKEN,
    SET_USER, ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_ORDER, RESET_USER,
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

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export const addToOrder = (item) => {
    return {
        type: ADD_TO_ORDER,
        payload: item
    }
}