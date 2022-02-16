import React, { useState } from 'react';

const AppLayout = ({ Header, Sidebar, Footer, children }) => {

    const [open, setOpen] = useState(false)

    const toggler = () => {
        setOpen(!open)
    }

    return (
        <div className='h-screen w-screen flex flex-col relative overflow-hidden'>

            {/* Header */}
            <div className='w-full'>
                <Header toggler={toggler} />
            </div>

            <div className='flex flex-1 overflow-hidden '>

                {/* Sidebar */}
                <div className='w-auto'>
                    <Sidebar open={open} />
                </div>

                <div className='flex-1 relative overflow-x-hidden'>
                    {children}
                </div>
            </div>

        </div>
    )
};

export default AppLayout;


