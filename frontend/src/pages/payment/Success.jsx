import React from 'react'
import { useNavigate } from 'react-router-dom'


const Success = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/orders', {
            replace: true
        })
    }

    return (
        <div className='flex flex-col items-center justify-center my-12'>

            <div className='bg-green-500 h-48 w-48 flex items-center justify-center rounded-full'>
                <span className='text-white text-[8rem] font-bold'>&#10003;</span>
            </div>
            <h4 className='text-4xl mt-6 font-semibold'>Payment Success</h4>
            <button onClick={handleClick} className='text-blue-500 underline mt-5'>See your orders</button>
        </div>
    )
}

export default Success