import React from 'react';
import './Home.scss';
import CustomInput from '../components/CustomInput.jsx'
import Button from '../components/Button.jsx'
import Visual from '../components/Visual.jsx'
import './Form.scss'
import {
  Link
} from "react-router-dom";

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
          <h1>Payment made <span>easy.</span></h1>
          <h2>sign in</h2>
            <CustomInput name="Name" placeholder="John"/>
            <CustomInput name="Email" type="email" placeholder="you@example.com"/>
            <CustomInput name="Password" placeholder="•••••••••••••" type="password"/>
          <p className="recover_password">Recover password</p>
          <Button name="Submit"/>
          <div className="sign_container">
            <p>Dont have an account ?</p><Link to="/signup">Sign up</Link>
          </div>
        </div>
      </form>
      <p className="policy">By joining, you are agreeing to our <span>Terms</span> and <span>Privacy Policy</span></p>
    </div>
  );
}

export default Home;
