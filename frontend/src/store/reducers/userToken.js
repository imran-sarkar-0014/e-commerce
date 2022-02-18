import { SET_TOKEN } from '../constants/user'
const inital = ''

const userToken = (state = inital, action) => {
    switch (action.type) {

        case SET_TOKEN:
            return action.payload

        default: return state
    }
}

export default userToken








