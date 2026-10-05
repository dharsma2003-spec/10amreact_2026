import { useEffect, useRef, useState } from "react";

function StopWatch(){

    

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(59*60*1000 + 55 *1000);

    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    
    useEffect(()=>{

        if(isRunning)
        {
            intervalIdRef.current =  setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return()=>{
            clearInterval(intervalIdRef.current);
        }
        
    },[isRunning]);


    const start = ()=>{
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
   }

    const stop = ()=>{
        setIsRunning(false);
    }

    const reset = ()=>{
        setIsRunning(false);
        setElapsedTime(0);
    }

    const formatTime = ()=>{
        let hours = Math.floor (elapsedTime / (1000* 60 * 60));
        let minutes = Math.floor ((elapsedTime / (1000 * 60) % 60));
        let seconds = Math.floor ((elapsedTime / 1000) % 60); 
        let millis = Math.floor ((elapsedTime % 1000 ) / 10); 

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        millis = String(millis).padStart(2,"0");

       
        return  hours+":"+minutes+":"+seconds+":"+millis; 

    }


    return (
            <div className="stopwatch">
                <div className="display">
                    {formatTime()}
                </div>
                <div className="controls">
                    <button onClick={start}>Start</button>
                    <button onClick={stop}>Stop</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
    )
}
export default StopWatch;