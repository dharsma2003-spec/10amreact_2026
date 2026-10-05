import React,{useState,useEffect,useRef} from "react";


function Pomodoro(){

    const [isRunning,setIsRunning] = useState(false);
    const[mode,setMode] = useState("work");
    const intervalRef = useRef(null);
    const[startTime,setStartTime] = useState(25 * 60);
    const[isCustom,setIsCustom] = useState(false);
    const[value,setValue] = useState(0);

    useEffect(()=>{
         if (isRunning) {
                intervalRef.current = setInterval(() => {
                    setStartTime((prev) => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        return 0;
                    }
                    else 
                        return prev - 1;
                    });
                }, 1000);
                }

        return () => {
            clearInterval(intervalRef.current);
            };
    },[isRunning]);

    function start(){
        setIsRunning(true);
    }
    function pause(){
       setIsRunning(false);
    }
    function reset(){
        setIsRunning(false);
            if (mode === "Work") {
                setStartTime(25 * 60);
            } 
            else {
                setStartTime(5 * 60);
            }
    }
    function format(){   
        let hours = Math.floor(startTime / 3600);    
        let minutes = Math.floor((startTime % 3600)/60);
        let seconds = Math.floor(startTime % 60);

            hours = String(hours).padStart(2,"0");
            minutes = String(minutes).padStart(2,"0");
            seconds = String(seconds).padStart(2,"0");

        if(hours > 0){
            return `${hours}:${minutes}:${seconds}`;
        }
        else {
            return`${minutes}:${seconds}`;
        }
    }
    function modeChange(){
        if(mode === "break"){
            return "Take a break ";
        }
        else 
            return "Focus on work"; 
    }

    function increment(){
        setStartTime(prev=> prev + (5 * 60))}       
    
    function decrement(){
        setStartTime((prev) =>{
            if(prev <= 5 * 60){
                return 0;
            }
            else{
                return( prev - (5 * 60));               
            }
        })
    }

    function custom(){
        setStartTime(value * 60);
    }
     
    return(
        <div>
            <h1> Pomodoro Technique :</h1>
            <p> Work for 25 minutes & take a Break for 5 minutes.</p>

            <div className="timer">
                <div className="display"> 
                    {format()} 
                    <button onClick={increment} className="span" disabled={isRunning}> + </button> 
                    <button className="span" onClick={decrement} disabled={isRunning}> - </button> 
                    <button onClick={()=>{setIsCustom(!isCustom)}} disabled={isRunning}> Custom </button>
                    {isCustom ? 
                        <div> 
                            <input type="number" value={value} min="1" onChange={e => setValue(e.target.value)}/> 
                            <button onClick={custom}> Add </button>
                        </div> 
                        : null
                    }
                </div>  
                         
                <div className="btn">
                    <button onClick={start} className="start-btn"> Start </button>
                    <button onClick={pause} className="stop-btn"> Pause </button>
                    <button onClick={reset} className="reset-btn"> Reset </button>
                </div>
            </div>

            <h3> {modeChange()} </h3>

            <div className="work-break-btn">
                <button onClick={()=>{
                    setMode("Work");
                    setStartTime(25 * 60);
                }} disabled={isRunning}> Work 
                </button>

                <button onClick={()=>{
                    setMode("break");
                    setStartTime(5 * 60);
                }} disabled={isRunning}> Break 
                </button>
            </div>

        </div>
    )
}

export default Pomodoro;