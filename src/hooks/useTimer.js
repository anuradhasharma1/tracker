
import { useEffect } from 'react'

const useTimer = (mode, paused, setStudy, setLazy) => {
    
    useEffect(() => {
        if (!mode || paused) return;
        const interval = setInterval(() => {

            if (mode === "Study") {
                setStudy(prev => prev + 1);
            }
            else if (mode === "Lazy") {
                setLazy(prev => prev + 1);
            }

        }, 1000);
        return () => clearInterval(interval);
    }, [mode, paused, setLazy, setStudy]);

}
export default useTimer