import React from 'react';

const SessionHistory = ({ history }) => {
    if (!history || history.length === 0) return null;

    const formatTime = (secs) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m}m ${s}s`;
    };

    return (
        <div className="w-full max-w-md mt-6">
            <h2 className="font-bold text-gray-700 text-base sm:text-lg mb-2 text-center">📋 Session History</h2>
            <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
                {[...history].reverse().map((session, i) => {
                    const total = session.study + session.lazy;
                    const studyPct = total > 0 ? Math.round((session.study / total) * 100) : 0;
                    return (
                        <div key={i} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs sm:text-sm">
                            <span className="text-gray-500 w-24 shrink-0">{session.date}</span>
                            <span className="text-green-600 font-semibold">📗 {formatTime(session.study)}</span>
                            <span className="text-red-500 font-semibold">🛋️ {formatTime(session.lazy)}</span>
                            <span className={`font-bold ${studyPct >= 50 ? 'text-green-600' : 'text-red-500'}`}>
                                {studyPct}% focus
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SessionHistory;