import { useState, useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [reamainigTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting Timeout");

    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("Setting Interval");
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={reamainigTime} />;
};

export default QuestionTimer;
