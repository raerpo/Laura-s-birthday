import React, { useState } from "react";
import Girl from "../../character/girl";
import { useInterval } from "../../utils";
import { default as countdownHelper } from "countdown";
import "./styles.css";

const Intro = ({ loading, birthDayTime }) => {
  const [countdown, setCountdown] = useState(0);
  const [day, month, year] = birthDayTime ? birthDayTime.split("-") : "0-0-0";

  useInterval(() => {
    setCountdown(countdown + 1);
  }, 1000);

  const birthDayCountdown = countdownHelper(new Date(year, Number(month) - 1, day)).toString();

  return (
    <section className="intro">
      <div className={`intro-content ${loading ? "loading" : ""}`}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p className="title">Laura's Birthday</p>
            <div className="character">
              <Girl />
            </div>
            <p className="countdown">{birthDayCountdown}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Intro;
