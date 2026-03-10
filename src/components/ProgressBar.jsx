import React from "react"

const ProgressBar = ({ Study, Lazy }) => {
    const MAX = 1800; // 30 minutes in seconds

    const StudyPercent = Math.min((Study / MAX) * 100, 100);
    const LazyPercent = Math.min((Lazy / MAX) * 100, 100);

    return (
        <div className="w-full max-w-md mt-4 flex flex-col gap-3">
            <div>
                <div className="w-full bg-gray-200 h-6 rounded-md">
                    <div className="bg-green-500 h-6 rounded-md transition-all duration-500" style={{ width: `${StudyPercent}%` }}></div>
                </div>
                <p className="text-sm mt-1 text-center font-semibold text-green-600">
                    Study: {Math.round(StudyPercent)}% of 30 min goal
                </p>
            </div>

            <div>
                <div className="w-full bg-gray-200 h-6 rounded-md">
                    <div className="bg-red-500 h-6 rounded-md transition-all duration-500" style={{ width: `${LazyPercent}%` }}></div>
                </div>
                <p className="text-sm mt-1 text-center font-semibold text-red-600">
                    Procrastination: {Math.round(LazyPercent)}% 
                </p>
            </div>
        </div>
    );
};

export default ProgressBar;