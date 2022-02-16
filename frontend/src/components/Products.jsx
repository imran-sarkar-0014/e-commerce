import React from 'react';

import Product from './Product';

const Products = () => {
    return (
        <section class="text-gray-600 body-font" >
            <div class="container mx-auto relative md:-top-[150px] md:mb-[-220px] z-30">
                <div class="flex flex-wrap m-4">

                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />

                </div>
            </div>
        </section >
    )
};





export default Products;
