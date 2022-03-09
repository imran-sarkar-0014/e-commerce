import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setToast } from '../store/actions/toast'

const Toast = () => {

    const toast = useSelector(state => state.toast)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setToast({
            show: false,
            mag: '',
            success: true
        }))
    }

    useEffect(() => {

        var timeOut = null;
        if (toast.show) {
            timeOut = setTimeout(() => {
                dispatch(setToast({
                    show: false,
                    mag: '',
                    success: true
                }))
            }, 2000)
        }

        return () => {
            clearTimeout(timeOut)
        }

    }, [toast, dispatch])

    return (
        <div className={` ${toast.show ? 'absolute' : 'hidden'} border bg-white top-2 right-8 shadow-md`}>
            <div className='relative'>
                <button onClick={handleClick} className='absolute top-0 right-0 font-lg border px-2 rounded-sm'>&times;</button>
                <div className={`py-4 px-10 ${toast.success ? 'text-green-600' : 'text-red-600'} font-semibold`} >{toast.msg}</div>
            </div>
        </div>
    )
}

export default Toast