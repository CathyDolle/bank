import React from 'react';
import './Home.scss';
import CustomInput from './components/CustomInput.jsx'
import Button from './components/Button.jsx'

function Home() {
  return (
    <div className="container">
      {/* preview section */}
      <section className="preview_section">
        <img class="logo" src="images/logo.svg" alt="logo"></img>
        <img class="preview" src="images/preview.png" alt="preview"></img>
        <img class="left_circles" src="images/circles.svg" alt="circles"></img>
      </section>

      {/* form section */}
      <section className="form_section">
        <div className="form_container">
          <img className="right_circles" src="images/circles2.svg" alt="circles"></img>
          <h1>Payment made <span>easy.</span></h1>
          <h2>sign in</h2>
          <CustomInput name="Name" placeholder="John"/>
          <CustomInput name="Email" placeholder="you@example.com"/>
          <CustomInput name="Password" placeholder="•••••••••••••"/>
          <a className="recovery_password">Recovery password</a>
          <Button name="Submit"/>
          <div className="sign_container">
            <p>Dont have an account ?</p><a href="">Sign in</a>
          </div>
        </div>
      </section>
      <p className="policy">By joining, you are agreeing to our <span>Terms</span> and <span>Privacy Policy</span></p>
    </div>
  );
}

export default Home;
