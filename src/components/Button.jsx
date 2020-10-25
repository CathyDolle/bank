import React from 'react';
import './Button.scss';

function Button(props) {
  return (
    <div className="button_container">
        <button>{props.name}</button>
    </div>
  );
}

export default Button;
