import { useState, useRef } from "react";

export default function StopLight() {
  const [lightIndex, setLightIndex] = useState("0");
  const timeouts = useRef<number[]>([]);
  const delays: { [key: number]: number } = {
    1: 1000,
    2: 2000,
    3: 3000,
  };

  function cycleLights() {
    clearTimeouts();
    for (let i = 1; i <= 3; i++) {
      const timeoutId = setTimeout(() => {
        setLightIndex(i.toString());
      }, i * 1000);
      timeouts.current.push(timeoutId);
    }
  }

  function cycleLightsDelays() {
    clearTimeouts();
    for (let i = 1; i <= 3; i++) {
      const timeoutId = setTimeout(() => {
        setLightIndex(i.toString());
      }, i * delays[i]);
      timeouts.current.push(timeoutId);
    }
  }

  function clearTimeouts() {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  }

  function stopCycle() {
    clearTimeouts();
  }

  return (
    <div className="page-container">
      <div className="stop-light-container">
        <div
          className={`light red-${lightIndex}`}
          onClick={() => {
            setLightIndex("1");
            clearTimeouts();
          }}
        />
        <div
          className={`light yellow-${lightIndex}`}
          onClick={() => {
            setLightIndex("2");
            clearTimeouts();
          }}
        />
        <div
          className={`light green-${lightIndex}`}
          onClick={() => {
            setLightIndex("3");
            clearTimeouts();
          }}
        />
        <button onClick={cycleLights}>Cycle lights</button>
        <button onClick={cycleLightsDelays}>Cycle lights delays</button>
        <button onClick={stopCycle}>Stop lights</button>
      </div>
    </div>
  );
}
