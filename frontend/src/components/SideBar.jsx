import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ open }) => {
    return (
        <div class={`z-[100] h-full bg-pink-500 text-white w-64 space-y-6 px-2 absolute inset-y-0 left-0 transform ${open ? '' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>

            <Link to="/" class="text-white flex items-center space-x-2 px-4">
                <span class="text-2xl font-extrabold">Better Dev</span>
            </Link>

            <nav>
                <Link to='/' class="block py-2.5 px-4 rounded transition duration-200">
                    Home
                </Link>

            </nav>
        </div>
    )
};

export default Sidebar;
