import React from 'react'
import { useState } from 'react'
import ProgressBar from './ProgressBar'
import useTimer from '../hooks/useTimer'

const Tracker = () => {
    const [Study, setStudy] = useState(0)
    const [Lazy, setLazy] = useState(0)
    const [mode, setMode] = useState(null)
    const [paused, setpaused] = useState(false)

    useTimer(mode, paused, setStudy, setLazy);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
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
            <div className=' flex justify-center items-center flex-col p-30 mx-6 gap-2  '>
                <h1 className=' md:font-stretch-50% font-bold text-black text-3xl   '>Study Vs Distraction Tracker </h1>
                <div className=' border-[#1f1f1f]  border-[0.5px] w-1/5 my-1'></div>
                <div className=' my-4 '>
                    <ul className=' flex flex-col gap-2'>

                        <li className=' font-bold text-xl text-green-500'> Study time : {formatTime(Study)}  </li>
                        <li className=' font-bold text-red-600 text-xl'>Prcocastination : {formatTime(Lazy)} </li>
                    </ul>
                    <ProgressBar Study={Study} Lazy={Lazy} />
                </div>
                <div className=' flex gap-6 justify-around '>
                    <button onClick={() => { setMode("Study"); setpaused(false); }} className="bg-green-500 hover:bg-green-600 text-white font-semibold  px-6 py-2 rounded-lg cursor-pointer flex gap-2">
                        Studying
                        <img width={20} src="/cool.png" alt="h" />
                    </button>
                    <button onClick={() => { setMode("Lazy"); setpaused(false); }} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer flex gap-2">
                        Procastinating
                        <img width={20} src="/emoji.png" alt="s" />
                    </button>
                    <button onClick={() => setpaused(!paused)}><img className='w-6 cursor-pointer' src={paused ? "/play.png" : "/stop.png"} /></button>
                </div>

                <div className=' flex gap-6'>
                    <button onClick={showResult} className=' border border-gray-400 my-10 px-6 py-2 rounded-md cursor-pointer font-semibold'>ShowResult</button>
                    <button className='border border-gray-400 my-10 px-8 py-2 rounded-md cursor-pointer font-semibold'>Reset Day</button>

                </div>
            </div>
        </>
    )
}

export default Tracker