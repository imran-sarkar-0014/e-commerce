import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'

import AppLayout from './layout/AppLayout';
import Header from './components/Header'
import Sidebar from './components/SideBar'
import Footer from './components/Footer';

const Home = React.lazy(() => import('./pages/Home'))
const Profile = React.lazy(() => import('./pages/Profile'));
const ProductView = React.lazy(() => import('./pages/ProductView'));
const Order = React.lazy(() => import('./pages/Order'));
const Carts = React.lazy(() => import('./pages/Carts'));
const Wishes = React.lazy(() => import('./pages/Wishes'));





const spin = (
    <div className='h-full w-full flex items-center justify-center'>
        <div class="flex justify-center items-center">
            <div class="border-l-4 border-l-blue-500 animate-spin inline-block w-10 h-10 border-4 rounded-full" role="status">

            </div>
        </div>
    </div>
)


const NotFound = () => {
    return (
        <div>
            404, Page not found.
        </div>
    )
}

function App() {

    return (

        <AppLayout
            Header={Header}
            Sidebar={Sidebar}
            Footer={Footer}
        >
            <div className='overflow-y-scroll w-full h-full '>

                <Suspense fallback={spin}>

                    <Routes>
                        <Route path="/products/:id" element={<ProductView />} />
                        <Route path="/wishes" element={<Wishes />} />
                        <Route path="/carts" element={<Carts />} />
                        <Route path="/orders" element={<Order />} />
                        <Route path="/orders/:id" element={<Order />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/" element={<Home />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>

                </Suspense>


                <Footer />
            </div>
        </AppLayout>

    )
}

export default App;
