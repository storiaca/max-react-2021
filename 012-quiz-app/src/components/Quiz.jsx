import { useState } from "react";

const Quiz = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  return (
    <div>
      <h1>Currently active Question</h1>
    </div>
  );
};

export default Quiz;
