import React from "react";
import { Link } from 'react-router-dom';
// import {useState, useEffect} from "react";


const HeroSection = () => {

  return (
    <>
      <div className="background--img hero--section">
        <div className="hero--text">
           <h1>Welcome!</h1>
           <Link to="/login"><button className="btn btn--white">Let's get started</button></Link>
        </div>
      </div>;
    </>
  )
}
export default HeroSection;