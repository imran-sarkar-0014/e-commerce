import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setOrders } from '../store/actions/order'
import { getOrders } from '../serviceWorkers/order'

const Order = () => {

    const orders = useSelector(state => state.orders)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const divRef = useRef()


    const clickHandler = (id) => {
        navigate(`/orders/${id}`)
    }

    useEffect(() => {


        if (divRef.current) {
            divRef.current.scrollIntoView({
                behavior: "smooth"
            })
        }

        getOrders((data) => {
            dispatch(setOrders(data))
        }, (err) => {
            console.error(err)
        })
    }, [dispatch])

    return (

        <div ref={divRef} class="flex flex-col">

            <div className='mx-4 my-6'>
                <h2 className='text-xl font-semibold'>Your Orders</h2>
            </div>


            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th scope="col" class="relative px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">

                                {
                                    orders.map(order => (
                                        <tr key={order.key} className="cursor-pointer" onClick={() => clickHandler(order._id)}>
                                            <td className="px-6 py-4 whitespace-nowrap max-w-sm overflow-auto">{order.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">${order.price / 100}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.quantity}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">${(order.price * order.quantity) / 100}</td>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${order.payment ? 'text-green-500' : 'text-red-500'}`}>{order.payment ? 'Payed' : 'not Payed'}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.status}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )


};

export default Order;
