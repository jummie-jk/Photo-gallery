import React from "react";
import { Link } from 'react-router-dom';
// import {useState, useEffect} from "react";


const HeroSection = () => {

  return (
    <>
      <div className="background--img hero--section">
        <div className="hero--text">
           <h1>Photo Fusion</h1>
           <p id="italic">Fusing Art and Photography for You.</p>
           <p>Welcome!</p>
           <Link to="/login"><button className="btn btn--white">Let's get started</button></Link>
        </div>
      </div>;
    </>
  )
}
export default HeroSection;