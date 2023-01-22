import React from "react";
import HomeImg from "../Img/homeImg.jpg";
import "./LandingPage.css";
import {Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="Landing-container">
        <div className="landing-img-container">
          <img className="landing-img" src={HomeImg} alt="Home-logo" />
        </div>
        <div className="landing-desc">
          <div className="tenx">10X Team 04</div>
          <div className="landing-button">
            <Link to="/posts">
              <button>Enter</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
