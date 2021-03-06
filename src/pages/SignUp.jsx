import React from 'react';
import './Home.scss';
import CustomInput from '../components/CustomInput.jsx'
import Button from '../components/Button.jsx'
import Visual from '../components/Visual.jsx'
import './Form.scss'

function Home() {
  return (
    <div className="container">
      {/* preview section */}
      <Visual/>
      {/* form section */}
      <form className="form_section">
        <div className="form_container">
          <img className="right_circles" src="images/circles2.svg" alt="circles"></img>
          <img className="chat_box" src="images/chat.svg" alt="chat"></img>
          <h1>Create your account <span>easy.</span></h1>
          <h2>sign up</h2>
          <CustomInput name="Name" placeholder="John"/>
          <CustomInput name="Email" type="email" placeholder="you@example.com"/>
          <CustomInput name="Password" placeholder="•••••••••••••" type="password"/>
          <CustomInput name="Confirm your password" placeholder="•••••••••••••" type="password"/>
          {/* <a className="recovery_password">Recover password</a> */}
          <Button name="Submit"/>
        </div>
      </form>
      <p className="policy">By joining, you are agreeing to our <span>Terms</span> and <span>Privacy Policy</span></p>
    </div>
  );
}

export default Home;
