import React from 'react';

const Carts = () => {

    const prod = {
        id: "hdofd",
        name: "Digital Watch",
        img: "https://m.media-amazon.com/images/I/51PL9oQ62BL._AC_SL1002_.jpg",
        price: 5899,
        quantity: 1
    }

    const total = 5899 * 3

    return (
        <div className='block'>

            <CartItem item={prod} />
            <CartItem item={prod} />
            <CartItem item={prod} />

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


const CartItem = ({ item }) => {


    return (
        <div className='border mx-2 flex my-3'>

            <div className='h-32 w-32 aspcet-w-16 aspcet-h-9'>
                <img className='h-full w-full p-2 object-cover object-center' src={item.img} alt="product" />
            </div>

            <div className='p-3'>
                <h2 className='font-semibold text-xl'>{item.name}</h2>
                <h5 className='my-2'>Price ${item.price / 100}</h5>

                <div className='flex'>

                    <h4>Quantity</h4>
                    <div className='flex border mx-2 rounded-md overflow-hidden text-white text-md font-bold'>

                        <button className='px-2 bg-red-500'>-</button>
                        <h4 className='border px-2 text-black'>{item.quantity}</h4>
                        <button className='px-2 bg-green-500'>+</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Carts;
