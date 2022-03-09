import {
    SET_USER, SET_CARTS, SET_ORDERS, RESET_USER,
} from '../constants/user'


const inital = {
    logged: false,
    data: {}
}

const userReducer = (state = inital, action) => {

    switch (action.type) {

        case RESET_USER:
            return inital

        case SET_USER:
            return action.payload

        case SET_CARTS:
            state.data.carts = action.payload
            return state
        case SET_ORDERS:
            state.data.orders = action.payload
            return state

        default: return state
    }
}

export default userReducer










