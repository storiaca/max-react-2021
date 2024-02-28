import { useState } from "react";

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // function handleChange(inputIdentifier, newValue) {
  //   setUserInput((prevUserInput) => {
  //     return {
  //       ...prevUserInput,
  //       [inputIdentifier]: newValue,
  //     };
  //   });
  // }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [name]: value,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            id="initial-investment"
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={(e) => handleChange(e)}
            required
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            id="annual-investment"
            name="annualInvestment"
            value={userInput.annualInvestment}
            onChange={(e) => handleChange(e)}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="return">Expected Return</label>
          <input
            type="number"
            id="return"
            name="expectedReturn"
            value={userInput.expectedReturn}
            onChange={(e) => handleChange(e)}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={userInput.duration}
            onChange={(e) => handleChange(e)}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
