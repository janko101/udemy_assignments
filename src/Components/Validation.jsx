import React from 'react';

const Validation = (props) => {
  let validationMessage 

  if (props.length <= 5 ) {
    validationMessage = <p>Text too short</p>
  } else {
    validationMessage =   <p>Text long enough</p>
  }
    return (
        <div>
          {validationMessage}
        </div>
    );
}

export default Validation;
