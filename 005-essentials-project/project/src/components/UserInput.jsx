const UserInput = ({ userInput, onUserInput }) => {
  // function handleChange(inputIdentifier, newValue) {
  //   setUserInput((prevUserInput) => {
  //     return {
  //       ...prevUserInput,
  //       [inputIdentifier]: newValue,
  //     };
  //   });
  // }

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
            onChange={(e) => onUserInput(e)}
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
            onChange={(e) => onUserInput(e)}
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
            onChange={(e) => onUserInput(e)}
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
            onChange={(e) => onUserInput(e)}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
