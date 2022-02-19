import { SET_CART } from '../constants/cart'




const inital = []

const carts = (state = inital, action) => {
    switch (action.type) {

        case SET_CART:
            return action.payload

        default: return state
    }
}

export default carts















