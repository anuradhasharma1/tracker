import React from 'react'
import { useState } from 'react'

const Tracker = () => {
    const [Study, setStudy] = useState(0)
    const [Lazy, setLazy] = useState(0)

    const handleStudy = () => {
        setStudy(Study + 10);
    };
    const handleLazy = () => {
        setLazy(Lazy + 10)
    };

    const showResult = () => {
        if (Study > Lazy) {
            alert("Good Job ! You focused More Today ! ");
        }
        else if (Study === Lazy) {
            alert("Balanced Day , Not Bad!");
        }
        else {
            alert("Go study Bro! Too Much Procastination ");
        }
    }



    return (
        <>
            <div className=' flex justify-center items-center flex-col p-50 mx-6 gap-2  '>
                <h1 className=' md:font-stretch-50% font-bold text-black text-3xl   '>Study Vs Distraction Tracker </h1>
                <div className=' border-[#1f1f1f]  border-[0.5px] w-1/5 my-1'></div>
                <div className=' my-4 '>
                    <ul className=' flex flex-col gap-2'>

                        <li className=' font-bold text-xl'> Study time : {Study} min </li>
                        <li className=' font-bold text-red-600 text-xl'>Prcocastination :{Lazy}min</li>
                    </ul>
                </div>
                <div className=' flex gap-6'>
                    <button onClick={handleStudy} className="bg-green-500 hover:bg-green-600 text-white font-semibold  px-4 py-2 rounded-lg cursor-pointer flex gap-2">
                        Studying
                        <img width={20} src="/cool.png" alt="" />
                    </button>
                    <button onClick={handleLazy} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer flex gap-2">
                        Procastinating
                        <img width={20} src="/emoji.png" alt="" />
                    </button>
                </div>

                <div>
                    <button onClick={showResult} className=' border border-gray-400 my-20 px-6 py-2 rounded-md cursor-pointer'>ShowResult</button>
                </div>
            </div>
        </>
    )
}

export default Tracker