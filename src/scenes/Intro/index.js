import React, { useState, useEffect, useRef } from "react";
import {default as countdownHelper} from 'countdown';
import "./styles.css";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Intro = ({ loading, birthDayTime }) => {
  const [countdown, setCountdown] = useState(0);
  const [day, month, year] = birthDayTime ? birthDayTime.split("-") : '0-0-0';

  useInterval(() => {
    setCountdown(countdown + 1);
  }, 1000);

  const birthDayCountdown = countdownHelper(new Date(year, Number(month) - 1, day)).toString();

  return (
    <section className="intro">
      <div className={`intro-content ${loading ? "loading" : ""}`}>
        {loading ? <p>Loading...</p> : <p className="countdown">{birthDayCountdown}</p>}
      </div>
    </section>
  );
};

export default Intro;
