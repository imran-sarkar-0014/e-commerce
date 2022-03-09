import { useEffect } from 'react';
import Products from '../components/Products';
import Slider from '../components/Slider';

// store functions
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../store/actions/products'

// api services
import { getProducts } from '../serviceWorkers/productsAPI'




const Home = () => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products)

    useEffect(() => {
        getProducts((_products) => {
            dispatch(setProduct(_products))
        }, (err) => {
            console.error(err)
        })
    }, [])

    return (
        <div className='overflow-hidden'>
            <Slider />
            <Products products={products} />
        </div>
    )
};

export default Home;
