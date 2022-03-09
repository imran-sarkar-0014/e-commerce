import React, { useEffect, useState } from 'react';
import Product from '../components/Product';

import { getFavs } from '../serviceWorkers/productsAPI'

const Wishes = () => {

    const [faviroteItems, setFaviroteItems] = useState([])

    useEffect(() => {

        getFavs((data) => {

            console.table(data)
            setFaviroteItems(data)

        }, (err) => {
            console.error(err)
        })

    }, [])

    return (
        <section class="text-gray-600 body-font" >
            <div class="container mx-auto relative z-30">
                <div class="grid md:grid-cols-5 flex-wrap m-4">

                    {
                        faviroteItems.map(item => (
                            <Product key={item._id} product={item} />
                        ))
                    }


                </div>
            </div>
        </section >
    )
};

export default Wishes;
