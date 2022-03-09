
export const SET_ORDER = 'SET_ORDER'

const inital = []

const carts = (state = inital, action) => {
    switch (action.type) {

        case SET_ORDER:
            return action.payload

        default: return state
    }
}

export default carts











