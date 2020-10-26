import React from 'react';
import './Visual.scss';
import { Link } from "react-router-dom"

function Visual() {
  return (
    <div>
      {/* preview section */}
      <section className="visual_section">
        <Link to="/"><img className="logo" src="images/logo.svg" alt="logo"></img></Link>
        <img className="visual" src="images/preview.png" alt="visual"></img>
        <img className="left_circles" src="images/circles.svg" alt="circles"></img>
      </section>
    </div>
  );
}

export default Visual;
