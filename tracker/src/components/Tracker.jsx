import React from 'react'

const Tracker = () => {
    return (
        <>
            <div className=' flex justify-center items-center flex-col p-30 mx-6 gap-2  '>
                <h1 className=' font-stretch-50% font-bold text-black text-3xl  '>Study Vs Distraction Tracker </h1>
                <div className=' border-[#1f1f1f]  border-[0.5px] w-1/5 my-1'></div>
                <div className=' my-4 '>
                    <ul className=' flex flex-col gap-2'>

                        <li className=' font-bold text-xl'> Study time : 0 min </li>
                        <li className=' font-bold text-red-600 text-xl'>Prcocastination : 0min</li>
                    </ul>
                </div>
                <div className=' flex gap-6'>
                    <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer">
                        Studying
                    </button>
                    <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer">
                        Procastinating
                    </button>
                </div>
            </div>
        </>
    )
}

export default Tracker