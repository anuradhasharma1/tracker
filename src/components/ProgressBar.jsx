import React from "react"

const ProgressBar = ({ Study, Lazy }) => {
    const total = Study + Lazy;
    const StudyPercent = total ? (Study / total) * 100 : 0;


    return (
        <div className=" w-full max-w-md  mt-4">
            <div className="w-full bg-red-500 h-6 rounded-md">
                <div className=" bg-green-500 h-6 rounded-md transition-all duration-500" style={{ width: `${StudyPercent}%` }}></div>
            </div>
            <p className=" text-sm mt-2 text-center font-semibold">
                Focus Progress:{Math.round(StudyPercent)}%
            </p>
        </div>
    );

};

export default ProgressBar;