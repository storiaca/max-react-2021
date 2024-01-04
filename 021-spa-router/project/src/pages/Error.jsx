import React from "react";
import MainNavgation from "../components/MainNavgation";

const Error = () => {
  return (
    <div>
      <MainNavgation />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </div>
  );
};

export default Error;
