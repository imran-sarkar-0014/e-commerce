import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getCarts } from '../serviceWorkers/carts'
import { setCart } from '../store/actions/cart'

const Carts = () => {

    const [total, setTotal] = useState(0)

    const dispatch = useDispatch()
    const carts = useSelector(state => state.carts)
    const user = useSelector(state => state.user.data)

    useEffect(() => {

        getCarts((data) => {
            const _carts = data.map((cart) => {
                const quantities = user.carts[cart._id]
                return { ...cart, quantities: quantities, checked: false }
            })

            dispatch(setCart(_carts))
        }, (err) => {
            console.log(err)
        })


    }, [user.carts, dispatch])

    useEffect(() => {

        let tracker = 0


        carts.forEach(cart => {

            if (!cart.checked)
                return

            let subtotal = Number(cart.priceInCent * cart.quantities)
            tracker += subtotal
            console.log(subtotal)
            console.log(tracker)
        });

        setTotal(tracker)

    }, [carts])

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

    return (
        <div className='block'>

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
                    <button className='bg-green-500 px-3 py-2 hover:scale-105'>Checkout</button>
                    <button className='bg-red-500 px-3 py-2 hover:scale-105'>Delete</button>
                </div>

            </div>


        </div>
    );
};


const CartItem = ({ item, updateCart }) => {

    const subHandler = () => {
        updateCart(item._id, {
            quantities: item.quantities > 1 ? item.quantities - 1 : item.quantities
        })
    }

    const addHandler = () => {
        updateCart(item._id, {
            quantities: item.quantities + 1
        })
    }

    const handleChecked = () => {
        updateCart(item._id, {
            checked: !item.checked
        })
    }

    return (
        <div className='border mx-2 flex my-3 relative py-4'>


            <label class="inline-flex absolute top-1 right-1 items-center">
                <input onChange={handleChecked} checked={item.checked} type="checkbox" class="form-checkbox h-5 w-5 outline-none focus:outline-none text-pink-600" />
            </label>

            <div className='h-32 w-32 aspcet-w-16 aspcet-h-9'>
                <img className='h-full w-full p-2 object-cover object-center' src={item.imageURL} alt="product" />
            </div>

            <div className='p-3 flex-1 pt-4'>
                <h2 className='font-semibold text-sm'>{item.productName}</h2>
                <h5 className='my-2'>Price ${Number(item.priceInCent / 100).toFixed(2)}</h5>
                <h5 className='my-2'>Sub total ${Number(item.priceInCent / 100 * item.quantities).toFixed(2)}</h5>

                <div className='flex'>

                    <h4>Quantity</h4>
                    <div className='flex border mx-2 rounded-md overflow-hidden text-white text-md font-bold'>
                        <button onClick={subHandler} className='px-2 bg-red-500'>-</button>
                        <h4 className='border px-2 text-black'>{item.quantities}</h4>
                        <button onClick={addHandler} className='px-2 bg-green-500'>+</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Carts;
