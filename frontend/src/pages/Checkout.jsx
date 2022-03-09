import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import StripeCheckOut from 'react-stripe-checkout'
import { useSelector, useDispatch } from 'react-redux'


import { setOrders } from '../store/actions/user'
import { acceptOrder } from '../serviceWorkers/order'

const Checkout = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const orders = useSelector(state => state.user.data.orders)
    const dispatch = useDispatch()
    const items = location.state?.items
    const divRef = useRef()
    let accumulate = 0


    useEffect(() => {
        if (divRef.current) {
            divRef.current.scrollIntoView({
                behavior: "smooth"
            })
        }
    }, [])

    if (!items)
        return (
            <div className='text-3xl text-center py-10 font-semibold'>
                No Item to checkout.
            </div>
        )


    const handleToken = (token, addresses) => {
        acceptOrder({
            token,
            products: items,
            total: accumulate
        }, (data) => {

            dispatch(setOrders([...data.new_orders, ...orders]))
            navigate('/payment/success', { replace: true });
        }, err => {
            console.error(err)
        })
    }


    return (
        <div ref={divRef}>

            {
                items.map(item => {

                    const total = item.unit_amount * item.quantity
                    accumulate += total
                    return (
                        <div className='border-2 m-2 p-2 rounded-lg' >

                            <table>
                                <tr className='border-b border-gray-300'>
                                    <td  >Product Name</td>
                                    <td>{item.name}</td>
                                </tr>

                                <tr className='border-b border-gray-300'>
                                    <td>Unit Price</td>
                                    <td>${item.unit_amount / 100}</td>
                                </tr>

                                <tr className='border-b border-gray-300'>
                                    <td>Quantity</td>
                                    <td>{item.quantity}</td>
                                </tr>

                                <tr>
                                    <td>Total</td>
                                    <td>${total / 100}</td>
                                </tr>
                            </table>
                        </div>
                    )
                })
            }

            <div className='text-xl text-center'>
                <h1>Your Accumulate Total Amount is <strong> ${accumulate / 100} </strong></h1>
            </div>

            <div className='text-center'>
                <StripeCheckOut
                    stripeKey='pk_test_51KVxidF8An05WXrDfuzqt7RSseS3mRUg3qy0csi5Nrf8F5i7JE55gQjO0Pb53nS8qOOtqSnrECmkSpyeCDpCw6Hl00HqPNnGcX'
                    token={handleToken}
                    billingAddress
                    shippingAddress
                    amount={accumulate}
                />
            </div>
        </div>
    )
}

export default Checkout