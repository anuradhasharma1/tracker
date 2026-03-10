import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className=' bg-[#111] border-b border-[#1f1f1f] h-16 sm:h-20 md:h-24 flex items-center justify-center px-4'>
                <div className='text-white font-bold text-2xl sm:text-3xl md:text-4xl mx-4   '>
                    Tracker
                </div>
                <img className='invert mt-1 w-7 sm:w-8 md:w-10  ' src="/tracker.png" alt="" />

            </nav>
        </>
    )
}

export default Navbar
