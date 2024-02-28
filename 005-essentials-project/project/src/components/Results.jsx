import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

const Results = ({ userInput }) => {
  const resultsData = calculateInvestmentResults(userInput);
  console.log(resultsData);
  return <div>Results..{userInput.initialInvestment}</div>;
};

export default Results;
