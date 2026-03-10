import React, { useEffect } from 'react';

const Toast = ({ message, type = 'info', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const colors = {
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
        error: 'bg-red-500',
        info: 'bg-gray-700',
    };

    return (
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 ${colors[type]} text-white px-6 py-3 rounded-xl shadow-lg text-sm sm:text-base font-semibold animate-bounce-in transition-all`}>
            {message}
        </div>
    );
};

export default Toast;