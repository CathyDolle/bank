import React from 'react';
import CustomInput from './CustomInput.jsx'
import Button from './Button.jsx'

function Form() {
  return (
    <section className="form_section">
        <div className="form_container">
          <img className="right_circles" src="images/circles2.svg" alt="circles"></img>
          <img className="chat_box" src="images/chat.svg" alt="chat"></img>
          <h1>Payment made <span>easy.</span></h1>
          <h2>sign in</h2>
          <CustomInput name="Name" placeholder="John"/>
          <CustomInput name="Email" type="email" placeholder="you@example.com"/>
          <CustomInput name="Password" placeholder="•••••••••••••" type="password"/>
          <a className="recovery_password">Recover password</a>
          <Button name="Submit"/>
          <div className="sign_container">
            <p>Dont have an account ?</p><a href="">Sign in</a>
          </div>
        </div>
      </section>
  );
}

export default Form;
