import { useState, useRef } from "react";

export default function StopLight() {
  // const [lightIndex, setLightIndex] = useState("0");
  const [lightIndex, setLightIndex] = useState(0);
  // const timeouts = useRef<number[]>([]);
  const intervalRef = useRef<number | null>(null);
  // const delays: { [key: number]: number } = {
  //   1: 1000,
  //   2: 2000,
  //   3: 3000,
  // };
  const delays = [1000, 2000, 3000];

  function cycleLights() {
    // clearTimeouts();
    // for (let i = 1; i <= 3; i++) {
    //   const timeoutId = setTimeout(() => {
    //     setLightIndex(i.toString());
    //   }, i * 1000);
    //   timeouts.current.push(timeoutId);
    // }
    clearInterval(intervalRef.current!);
    let currentIndex = 0;
    intervalRef.current = window.setInterval(() => {
      setLightIndex(currentIndex);
      currentIndex = (currentIndex + 1) % delays.length;
    }, 1000);
  }

  function cycleLightsDelays() {
    // clearTimeouts();
    // for (let i = 1; i <= 3; i++) {
    //   const timeoutId = setTimeout(() => {
    //     setLightIndex(i.toString());
    //   }, i * delays[i]);
    //   timeouts.current.push(timeoutId);
    // }
    clearInterval(intervalRef.current!);
    let currentIndex = 0;
    intervalRef.current = window.setInterval(() => {
      setLightIndex(currentIndex);
      currentIndex = (currentIndex + 1) % delays.length;
    }, delays[currentIndex]);
  }

  function clearTimeouts() {
    // timeouts.current.forEach(clearTimeout);
    // timeouts.current = [];
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
  }

  function stopCycle() {
    clearTimeouts();
  }

  return (
    <div className="page-container">
      <div className="stop-light-container">
        {/* <div
          className={`light ${lightIndex === "1" ? "red" : ""}`}
          onClick={() => {
            setLightIndex("1");
            clearTimeouts();
          }}
        />
        <div
          className={`light ${lightIndex === "2" ? "yellow" : ""}`}
          onClick={() => {
            setLightIndex("2");
            clearTimeouts();
          }}
        />
        <div
          className={`light ${lightIndex === "3" ? "green" : ""}`}
          onClick={() => {
            setLightIndex("3");
            clearTimeouts();
          }}
        /> */}
        <div
          className={`light ${lightIndex === 1 ? "red" : ""}`}
          onClick={() => {
            setLightIndex(1);
            clearTimeouts();
          }}
        />
        <div
          className={`light ${lightIndex === 2 ? "yellow" : ""}`}
          onClick={() => {
            setLightIndex(2);
            clearTimeouts();
          }}
        />
        <div
          className={`light ${lightIndex === 3 ? "green" : ""}`}
          onClick={() => {
            setLightIndex(3);
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
