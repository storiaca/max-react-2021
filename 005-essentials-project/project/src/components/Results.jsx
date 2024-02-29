import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

const Results = ({ userInput }) => {
  const resultsData = calculateInvestmentResults(userInput);
  console.log(resultsData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Results;
