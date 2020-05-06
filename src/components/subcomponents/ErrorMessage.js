import React from "react";

function ErrorMessage({ err }) {
  if (err) return <h3>{err}</h3>;
  else return <h3>Sorry, there's been some sort of error</h3>;
}

export default ErrorMessage;
