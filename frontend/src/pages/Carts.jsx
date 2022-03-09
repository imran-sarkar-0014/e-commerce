import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getCarts, deleteCarts } from '../serviceWorkers/carts'
import { createOrder } from '../serviceWorkers/order'
import { setCart } from '../store/actions/cart'

import { setCarts as userCarts } from '../store/actions/user'

import CartItem from '../components/CartItem'
import { useNavigate } from 'react-router-dom';

const Carts = () => {

    const [total, setTotal] = useState(0)

    const dispatch = useDispatch()
    const carts = useSelector(state => state.carts)
    const navigate = useNavigate()
    const divRef = useRef()

    const gettingData = useCallback(() => {
        getCarts((data) => {
            const _carts = data.map((cart) => {
                return { ...cart, quantities: 1, checked: false }
            })

            dispatch(setCart(_carts))
        }, (err) => {
            console.error(err)
        })
    }, [dispatch])

    useEffect(() => {

        if (divRef.current) {
            divRef.current.scrollIntoView({
                behavior: "smooth"
            })
        }

        gettingData()
    }, [dispatch, gettingData])

    useEffect(() => {

        let tracker = 0

        carts.forEach(cart => {
            if (!cart.checked)
                return

            let subtotal = Number(cart.priceInCent * cart.quantities)
            tracker += subtotal
        });

        setTotal(tracker)

    }, [carts])


    const deleteHandler = () => {

        const selectedId = carts.filter(c => c.checked === true).map(c => c._id)
        // seleted cart will be deleted

        deleteCarts({
            list: selectedId
        }, (data) => {
            dispatch(userCarts(data))
            gettingData()
        }, (err) => {
            console.error(err)
        })
    }

    const checkoutHandler = () => {
        const selectedId = carts.filter(c => c.checked === true).map(c => ({
            _id: c._id,
            quantities: c.quantities
        }))

        createOrder({ orders: selectedId }, (data) => {

            navigate('/checkout', {
                state: {
                    items: data.items
                }
            })

        }, (err) => {
            console.error(err)
        })


    }

    const updateCart = (id, update) => {
        dispatch(setCart(
            carts.map(cart => {
                if (cart._id === id) {
                    return { ...cart, ...update }
                } else {
                    return cart
                }
            })
        ))
    }


    /// display carts
    return (
        <div ref={divRef} className='block'>

            {
                carts?.map(prod => (

                    <CartItem key={prod._id} item={prod} updateCart={updateCart} />
                ))
            }
            <div className='my-4 border py-4 flex justify-around items-center'>

                <div>
                    <h1>Total Price : ${total / 100}</h1>
                </div>

                <div className='border rounded-lg overflow-hidden w-max text-white transition-all duration-800'>

                    <button onClick={checkoutHandler} className='bg-green-500 px-3 py-2 hover:scale-105'>Checkout</button>

                    <button onClick={deleteHandler} className='bg-red-500 px-3 py-2 hover:scale-105'>Delete</button>
                </div>

            </div>

        </div >
    );
};





// checkout


export default Carts;
