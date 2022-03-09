//  user        -> Object
//  products    -> List
//  carts       -> List
//  orders      -> List
//

import userReducer from './userReducer'
import products from './products'
import carts from './carts'
import orders from './orders'
import userToken from './userToken'
import toastReducer from './toastReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    user: userReducer,
    userToken,
    products,
    carts,
    orders,
    toast: toastReducer
})

export default rootReducer