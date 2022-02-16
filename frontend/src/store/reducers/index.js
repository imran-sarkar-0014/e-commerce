//  user        -> Object
//  products    -> List
//  carts       -> List
//  orders      -> List
//

import userReducer from './userReducer'
import products from './products'
import carts from './carts'
import orders from './orders'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    user: userReducer,
    products,
    carts,
    orders
})

export default rootReducer