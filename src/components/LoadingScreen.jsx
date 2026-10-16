import { useEffect, useRef, useState } from "react";

const FULL_TEXT = "<rajatava.06>";
const TYPE_SPEED = 110;
const HOLD_AFTER_TYPE = 1300;
const EXIT_DURATION = 600;

export const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const timers = [];
    let index = 0;

    const interval = setInterval(() => {
      index++;
      setCount(index);

      if (index >= FULL_TEXT.length) {
        clearInterval(interval);
        timers.push(
          setTimeout(() => setExiting(true), HOLD_AFTER_TYPE),
          setTimeout(() => onCompleteRef.current(), HOLD_AFTER_TYPE + EXIT_DURATION)
        );
      }
    }, TYPE_SPEED);

    return () => {
      clearInterval(interval);
      timers.forEach(clearTimeout);
    };
  }, []);

  const progress = Math.round((count / FULL_TEXT.length) * 100);

  return (
    <div
      className={`loader fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center overflow-hidden ${
        exiting ? "loader--exit" : ""
      }`}
    >
      <div className="loader__grid" aria-hidden="true" />
      <div className="loader__glow" aria-hidden="true" />

      <div className="loader__content relative flex flex-col items-center">
        <div className="loader__rings" aria-hidden="true">
          <span className="loader__ring loader__ring--1" />
          <span className="loader__ring loader__ring--2" />
          <span className="loader__ring loader__ring--3" />
        </div>

        <div className="relative mb-6 text-3xl sm:text-4xl font-mono font-bold whitespace-pre">
          {FULL_TEXT.split("").map((ch, i) => (
            <span
              key={i}
              className={`loader__char ${i < count ? "loader__char--in" : ""}`}
            >
              {ch}
            </span>
          ))}
          <span className="animate-blink ml-1 text-blue-400">|</span>
        </div>

        <div className="w-[260px] sm:w-[300px]">
          <div className="h-[2px] bg-gray-800 rounded relative overflow-hidden">
            <div
              className="loader__bar h-full bg-blue-500"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
            <div className="loader__shine" />
          </div>
          <div className="mt-3 flex justify-between font-mono text-[11px] tracking-widest text-blue-300/60">
            <span>LOADING</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
