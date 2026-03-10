import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className=' bg-[#111] border-b border-[#1f1f1f] h-25 flex items-center justify-center'>
                <div className='text-white font-stretch-75% font-bold text-4xl mx-6  '>
                    Tracker
                </div>
                <img className='invert mt-2  ' src="/tracker.png" alt="" />

            </nav>
        </>
    )
}

export default Navbar
