export const SET_TOAST = 'SET_TOAST'

const inital = {
    show: true,
    msg: 'Product Added',
    success: true
}

const toastReducer = (state = inital, action) => {
    switch (action.type) {

        case SET_TOAST:
            return action.payload

        default: return state
    }
}

export default toastReducer