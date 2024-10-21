import React from "react";
import img1 from "../../assets/login-image.png";
import img2 from "../../assets/login-image2.png";
import "./style.css"

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left-container">
        <div className="login-left-input-conatiner">
          <div className="login-left-header">
            <h1>Log In</h1>
          </div>
          <div className="login-left-input">
            <p>Enter Mobile no.</p>
            <input type="text" />
          </div>
          <div className="login-left-button">Submit</div>
        </div>
        <img src={img1} alt="" className="img1" /> 
      </div>
      <div className="login-right-container">
        <img src={img2} alt="" className="img2" />
      </div>
    </div>
  );
};

export default Login;
