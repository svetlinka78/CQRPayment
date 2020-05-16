import React from "react";
import "./InternalServerError.css";

const internalServerError = (props) => {
  return (
    <p className={"internalServer"}>
      {"500 SERVER ERROR, CONTACT ADMINISTRATOR!!!!"}{" "}
    </p>
  );
};

export default internalServerError;
