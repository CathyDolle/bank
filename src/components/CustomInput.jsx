import React from 'react';
import './CustomInput.scss';

function CustomInput(props) {
  return (
    <div className="input_container">
        <input type="test" placeholder={props.placeholder}/>
        <label for="input">{props.name}</label>
    </div>
  );
}

export default CustomInput;
