import React from "react";
import "./AccessDeniedError.css";

const accessDeniedError = (props) => {
  return (
    <p className={"accessDenied"}>
      {
        "401,403 ACCESS DENIED! You do not have access to this resource. Please log in with another user or register"
      }
    </p>
  );
};

export default accessDeniedError;
