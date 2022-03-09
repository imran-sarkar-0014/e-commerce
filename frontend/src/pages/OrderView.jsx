import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getOrder } from '../serviceWorkers/order'


const OrderView = () => {

    const params = useParams()
    const orders = useSelector(state => state.orders)

    const [order, setOrder] = useState({})
    const [notFound, setNotFound] = useState(false)


    useEffect(() => {
        const o = orders.filter(o => o._id === params.id)

        if (o.length === 0) {
            getOrder(params.id, (data) => {
                setOrder(data)
            }, (err) => {
                setNotFound(true)
                console.error(err)
            })
        }
        setOrder(o[0])

    }, [])

    console.log('order is')
    console.log(order)


    return (
        <div className='flex flex-col pt-12' >
            <div className='w-[40%] mx-auto'>
                <img className='h-full w-full object-cover' src={order?.imageUrl} alt="" />
            </div>

            <div>
                <table class="min-w-full divide-y divide-gray-300 overflow-auto">
                    <thead class="">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">


                        <tr className="cursor-pointer items-center">
                            <td className="px-6 py-4 whitespace-nowrap">Name</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <p className='text-md w-full max-w-md overflow-auto ppp' >{order?.name}</p>
                            </td>
                        </tr>

                        <tr className="cursor-pointer items-center">
                            <td className="px-6 py-4 whitespace-nowrap">Single Price</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <p className='text-md w-full max-w-sm overflow-auto ppp' >${(order?.price) / 100}</p>
                            </td>
                        </tr>
                        <tr className="cursor-pointer items-center">
                            <td className="px-6 py-4 whitespace-nowrap">Total Price</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <p className='text-md w-full max-w-sm overflow-auto ppp' >${(order?.price * order?.quantity) / 100}</p>
                            </td>
                        </tr>

                        <tr className="cursor-pointer items-center">
                            <td className="px-6 py-4 whitespace-nowrap">Total Quantity</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <p className='text-md w-full max-w-sm overflow-auto ppp' >{order?.quantity}</p>
                            </td>
                        </tr>

                        <tr className="cursor-pointer items-center">
                            <td className="px-6 py-4 whitespace-nowrap">Address</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <p className='text-md w-full max-w-sm overflow-auto ppp' >{order?.address?.line1}, {order?.address?.city} {order?.address?.country} </p>
                            </td>
                        </tr>

                        <tr className="cursor-pointer items-center">
                            <td className="px-6 py-4 whitespace-nowrap">Payment</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <p className={`text-md w-full max-w-sm overflow-auto ppp font-semibold ${order?.payment ? 'text-green-500' : 'text-red-500'}`} >{order?.payment ? 'Online Payed' : 'Not Payed'}</p>
                            </td>
                        </tr>

                        <tr className="cursor-pointer items-center">
                            <td className="px-6 py-4 whitespace-nowrap">Status</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <p className='text-md w-full max-w-sm overflow-auto ppp' >{order?.status}</p>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default OrderView