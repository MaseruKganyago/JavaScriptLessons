import React, { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState({ hour: 0, min: 0, sec: 0 });
  const [prefix, setPrefix] = useState({
    prefixHour: "0",
    prefixMin: "0",
    prefixSec: "0",
  });
  const [state, setState] = useState(false);
  const [watch, setWatch] = useState<NodeJS.Timeout>(); // Try to use states instead of global variables,
  // because When you use a global variable the only thing that changes is the value of the variable.
  // But when you use a state it causes React to re-render so your variable change can be viewed on the DOM.
  let initial: number;

  function clock() {
    let minutes = 0;
    let millSeconds = Date.now() - initial;
    const seconds = Math.round(millSeconds / 1000);
    setTime({ hour: 0, min: 0, sec: seconds });
    if (seconds >= 10) {
      setPrefix({ prefixHour: "0", prefixMin: "0", prefixSec: "" });
    }

    if (seconds > 60) {
      minutes = Math.round(millSeconds / 60000);
      setTime({ hour: 0, min: minutes, sec: seconds % 60 });

      if (minutes >= 10) {
        setPrefix({ prefixHour: "0", prefixMin: "", prefixSec: "0" });
      }
    }

    if (minutes > 60) {
      const hours = Math.round(millSeconds / 3600000);
      setTime({ hour: hours, min: minutes % 60, sec: seconds });

      if (hours >= 10) {
        setPrefix({ prefixHour: "", prefixMin: "0", prefixSec: "0" });
      }
    }
  }

  const runWatch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    initial = Date.now();
    setWatch(setInterval(clock, 1000));
    setState(!state);
  };

  const stopWatch = () => {
    console.log("stop");
    if (watch) {
      clearInterval(watch); //To avoid typescript 'value undefined or value null' erro, try to us if-statements
    }
  };

  const resetWatch = () => {
    if (watch) {
      clearInterval(watch);
    }
    setTime({ hour: 0, min: 0, sec: 0 });
    setState(!state);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <strong>StopWatch</strong>
        </h1>
      </header>

      <div className="time">
        <p>
          {prefix.prefixHour}
          {time.hour}:{prefix.prefixMin}
          {time.min}:{prefix.prefixSec}
          {time.sec}
        </p>
        <button disabled={state} onClick={(e) => runWatch(e)}>
          Start
        </button>
        <button onClick={stopWatch}>Stop</button>
        <button onClick={resetWatch}>Reset</button>
      </div>
    </div>
  );
}

export default App;
