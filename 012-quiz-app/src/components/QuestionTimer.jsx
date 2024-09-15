import { useState, useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [reamainigTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting Timeout");

    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("Setting Interval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={reamainigTime}
      className={mode}
    />
  );
};

export default QuestionTimer;
