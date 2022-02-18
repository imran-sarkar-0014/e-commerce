import {
    SET_USER, ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_ORDER, RESET_USER,
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

        default: return state
    }
}

export default userReducer










