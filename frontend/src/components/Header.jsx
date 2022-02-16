import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggler }) => {
    const [search, setSearch] = useState('')


    const onInput = (e) => {
        setSearch(e.target.value)
    }

    return (
        <header class="bg-pink-500 text-gray-100 flex flex-col md:flex-row shadow-md">

            <div className='flex justify-between items-center flex-1'>
                <Link to="/" class="block p-4 text-white font-bold">
                    <span>E-Commerce</span>
                </Link>

                {/* input */}
                <div className='hidden md:flex px-4 py-2 text-md bg-white text-black rounded-xl overflow-hidden items-center'>
                    <input value={search} onChange={onInput} type="text" className='outline-none' />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                <div className='space-x-2 flex items-center pr-4 md:pr-0'>
                    <Link to="/wishes" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </Link >
                    <Link to="/carts" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </Link >
                    <Link to="/orders">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                    </Link >
                    <Link to="/profile">
                        <img className='h-6 w-6' src="/img/avatar.png" alt="profile avatar" />
                    </Link >
                </div>

                <button onClick={toggler} class="bg-inherit mobile-menu-button p-4 focus:outline-none focus:bg-pink-600 md:hidden">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>



            </div>

            {/* input */}
            <div className='md:hidden px-4 py-2 text-md bg-white text-black rounded overflow-hidden flex items-center mx-4 my-2'>
                <input value={search} onChange={onInput} type="text" className='outline-none flex-1' />
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>

        </header>
    )
};

export default Header;
