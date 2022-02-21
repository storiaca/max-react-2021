import React from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";
const QuoteDetails = () => {
  const params = useParams();
  return (
    <div>
      <h2>QuoteDetails</h2>
      <p>{params.qouteId}</p>
      <Route path={`/quotes/${params.qouteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetails;
