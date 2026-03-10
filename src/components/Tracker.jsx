import React from 'react'
import { useState } from 'react'
import ProgressBar from './ProgressBar'
import useTimer from '../hooks/useTimer'
import verdict from '../utils/verdict'

const Tracker = () => {
    const [Study, setStudy] = useState(0)
    const [Lazy, setLazy] = useState(0)
    const [mode, setMode] = useState(null)
    const [paused, setpaused] = useState(false)
    const verdictComment = verdict(Study, Lazy)

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
            alert("Go study Bro! Too Much Procrastination ");
        }
    }



    return (
        <>
            <div className=' flex justify-center items-center flex-col  px-4 sm:px-8 md:px-16 lg:px-32 py-6 sm:py-8 mx-2 sm:mx-4 gap-2  '>
                <h1 className=' md:font-stretch-50% font-bold text-black text-xl sm:text-2xl md:text-3xl text-center   '>Study Vs Distraction Tracker </h1>
                <div className=' border-[#1f1f1f]  border-[0.5px] w-1/2 sm:w-1/4 my-1'></div>
                <div className=' my-3 sm:my-4 w-full  max-w-md '>
                    <ul className=' flex flex-col gap-2'>

                        <li className=' font-bold text-lg sm:text-xl text-green-500'> Study time : {formatTime(Study)}  </li>
                        <li className=' font-bold text-lg sm:text-xl text-red-600 '>Procrastination : {formatTime(Lazy)} </li>
                    </ul>
                    <ProgressBar Study={Study} Lazy={Lazy} />
                </div>
                <div className=' flex flex-wrap gap-3 sm:gap-6 justify-center '>
                    <button onClick={() => { setMode("Study"); setpaused(false); }} className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4  sm:px-6 py-2 rounded-lg cursor-pointer flex items-center gap-2 text-sm sm:text-base">
                        Studying
                        <img width={20} src="/cool.png" alt="h" />
                    </button>
                    <button onClick={() => { setMode("Lazy"); setpaused(false); }} className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-4 py-2 rounded-lg cursor-pointer flex items-center gap-2 text-sm sm:text-base">
                        Procrastinating
                        <img width={20} src="/emoji.png" alt="s" />
                    </button>
                    <button className="flex items-center justify-center px-3 py-2" onClick={() => setpaused(!paused)}><img className=' w-5 sm:w-6 cursor-pointer' src={paused ? "/play.png" : "/stop.png"} /></button>
                </div>

                <div className=' flex flex-wrap gap-3 sm:gap-6 justify-center'>
                    <button onClick={showResult} className=' border border-gray-400 mt-6 sm:mt-8 mb-4 px-4 sm:px-6 py-2 rounded-md cursor-pointer font-semibold text-sm sm:text-base'>ShowResult</button>
                    <button onClick={() => { setStudy(0); setLazy(0); setMode(null); setpaused(false); }} className='border border-gray-400 mt-6 sm:mt-8 mb-4 px-4 sm:px-8 py-2 rounded-md cursor-pointer font-semibold text-sm sm:text-base'>Reset Day</button>

                </div>
                {verdictComment && (
                    <div className="text-center mt-2">
                        <span className="font-black text-base sm:text-lg tracking-wide">{verdictComment.tag}</span>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">{verdictComment.comment}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Tracker