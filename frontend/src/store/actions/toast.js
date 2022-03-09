import { SET_TOAST } from '../reducers/toastReducer'

export const setToast = (toast) => {

    return {
        type: SET_TOAST,
        payload: toast
    }
}