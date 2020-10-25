import React from 'react';
import './Home.scss';
import Form from './components/Form.jsx'

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
      <Form></Form>
      <p className="policy">By joining, you are agreeing to our <span>Terms</span> and <span>Privacy Policy</span></p>
    </div>
  );
}

export default Home;
