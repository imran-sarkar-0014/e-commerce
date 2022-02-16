import React from 'react';
import { useNavigate } from 'react-router-dom';



const Order = () => {

    const orders = temp
    const navigate = useNavigate()

    const clickHandler = (id) => {
        navigate(`/orders/${id}`)
    }

    return (

        <div class="flex flex-col">

            <div className='mx-4 my-6'>
                <h2 className='text-xl font-semibold'>Your Orders</h2>
            </div>


            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
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
                                        <tr key={order.key} className="cursor-pointer" onClick={() => clickHandler(order.id)}>
                                            <td class="px-6 py-4 whitespace-nowrap">{order.id}</td>
                                            <td class="px-6 py-4 whitespace-nowrap">{order.name}</td>
                                            <td class="px-6 py-4 whitespace-nowrap">${order.price / 100}</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.quantity}</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">${(order.price * order.quantity) / 100}</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">{order.payment}</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">{order.status}</td>
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



const temp = [

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },
    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },
    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },
    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },
    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },
    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },
    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },
    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },
    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },
    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },
    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },
    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },
    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },
    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },
    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },
    {
        id: "u934343",
        name: "mobile phone and other",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },

    {
        id: "u934343",
        name: "watch",
        price: 1283,
        quantity: 3,
        status: "on pleace",
        delivary: Date.now(),
        payment: "paid"
    },


]
