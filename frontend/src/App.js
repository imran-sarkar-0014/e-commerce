import './App.css';
import React, { Component, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import AppLayout from './layout/AppLayout';
import Header from './components/Header'
import Sidebar from './components/SideBar'
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';


// api functionality

import { setHeader } from './serviceWorkers/axios'
import { getUser } from './serviceWorkers/userAPI'

/// store functionality

import { resetUser, setUser } from './store/actions/user'


const Home = React.lazy(() => import('./pages/Home'))
const Profile = React.lazy(() => import('./pages/Profile'));
const ProductView = React.lazy(() => import('./pages/ProductView'));
const Order = React.lazy(() => import('./pages/Order'));
const Carts = React.lazy(() => import('./pages/Carts'));
const Wishes = React.lazy(() => import('./pages/Wishes'));

const Login = React.lazy(() => import('./pages/auth/Login'))
const Registration = React.lazy(() => import('./pages/auth/Registration'))




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


const PrivateUrl = ({ component: Component }) => {
    const user = useSelector(state => state.user)

    return (
        <>
            {
                user.logged ?
                    <Component /> :
                    <Navigate to='/auth/login' />
            }
        </>
    )

}



function App() {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const userToken = useSelector(state => state.userToken)

    useEffect(() => {


        dispatch(resetUser())
        setHeader(userToken)

        if (userToken === '')
            return

        getUser((_user) => {
            dispatch(setUser(_user))
        }, (err) => {
            console.log(err)
        })

    }, [userToken])

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

                        {/* private url */}
                        <Route path="/wishes" element={<PrivateUrl component={Wishes} />} />
                        <Route path="/carts" element={<PrivateUrl component={Carts} />} />
                        <Route path="/orders" element={<PrivateUrl component={Order} />} />


                        <Route path="/auth/login" element={
                            !user?.logged ?
                                <Login /> :
                                <Navigate to='/' />
                        } />
                        <Route path="/auth/registration" element={
                            !user?.logged ?
                                <Registration /> :
                                <Navigate to='/' />
                        } />

                        <Route path="/orders/:id" element={<PrivateUrl component={Order} />} />
                        <Route path="/profile" element={<PrivateUrl component={Profile} />} />
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
