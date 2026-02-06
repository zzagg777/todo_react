import { useState, useRef } from "react";
import "../styles/timer.css";

export default function Timer(){
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if(intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  }
  
  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  
  return(
    <div className="timer">
      <h2 className="timer__title">⏱ Timer</h2>

      <div className="timer__display">
        {count}
        <span className="timer__unit">sec</span>
      </div>

      <div className="timer__buttons">
        <button className="btn btn--start" onClick={start}>
          Start
        </button>
        <button className="btn btn--stop" onClick={stop}>
          Stop
        </button>
      </div>
    </div>
  )

}