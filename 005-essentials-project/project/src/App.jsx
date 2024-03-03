import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(e) {
    const { name, valueAsNumber, value } = e.target;
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [name]: +value,
        //[name]: valueAsNumber,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onUserInput={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
