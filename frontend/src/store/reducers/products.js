import { SET_PRODUCT } from '../constants/products'

const inital = []

const products = (state = inital, action) => {
    switch (action.type) {

        case SET_PRODUCT:
            return action.payload

        default: return state
    }
}

export default products











