import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Welcome/Hero";
import Login from "./Login/Login"
import Gallery from './Gallery/Gallery';
import "./Welcome/Hero.css"
import "./Login/Login.css"
import "./Gallery/Gallery.css"

function App() {
    return (
          <>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/login" element={<Login />} />
                <Route path="/gallery" element={<Gallery />} />
                {/* <Route path="/crypto" element={<CryptoPrice />} />
                <Route path="/signin" element={<Signin />} />  */}
                </Routes>
            </BrowserRouter>
          </>
    );
  }
export default App;