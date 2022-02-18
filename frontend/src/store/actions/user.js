import { SET_TOKEN } from '../constants/user'


export const setToken = (tok) => {
    return {
        type: SET_TOKEN,
        payload: tok
    }
}