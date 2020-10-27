import React from 'react';
import './Home.scss';
import CustomInput from '../components/CustomInput.jsx'
import Button from '../components/Button.jsx'
import Visual from '../components/Visual.jsx'
import './Form.scss'

function RecoverPassword() {
  return (
    <div className="container">
      {/* preview section */}
      <Visual/>
      {/* form section */}
      <form className="form_section">
        <div className="form_container">
          <img className="right_circles" src="images/circles2.svg" alt="circles"></img>
          <img className="chat_box" src="images/chat.svg" alt="chat"></img>
          <h1>Forgot <span>password.</span></h1>
          <h2>Recover your password</h2>
          <CustomInput name="Email" type="email" placeholder="you@example.com"/>
          {/* <a className="recovery_password">Recover password</a> */}
          <Button name="Reset"/>
        </div>
      </form>
      <p className="policy">By joining, you are agreeing to our <span>Terms</span> and <span>Privacy Policy</span></p>
    </div>
  );
}

export default RecoverPassword;
