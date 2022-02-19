import React from 'react';

import Product from './Product';

const Products = ({ products }) => {
    return (
        <section class="text-gray-600 body-font" >
            <div class="container mx-auto relative md:-top-[50px] z-30">
                <div class="grid md:grid-cols-3 lg:grid-cols-5 w-full auto-rows-auto ">

                    {
                        products?.map(prod => (
                            <Product key={prod._id} product={prod} />
                        ))
                    }


                </div>
            </div>
        </section >
    )
};





export default Products;
