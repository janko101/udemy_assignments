import React from "react";

const Validation = (props) => {
  let validationMessage = <p>Text long enough</p>;

  if (props.length <= 5) {
    validationMessage = <p>Text too short</p>;
  }

  return <div>{validationMessage}</div>;
};

export default Validation;
