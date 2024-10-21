import React from "react";
import "./style.css";
import Header from "../header/header";
import img1 from "../../assets/login-image.png";
import img2 from "../../assets/login-image2.png";
import img3 from "../../assets/design.png";
import LoginForm from "../LoginForm/LoginForm";

const Login = ({ label, onSubmit, value, isOTP, onInput }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-container">
        <div className="left-container">
          <LoginForm
            value={value}
            isOTP={isOTP}
            onSubmit={onSubmit}
            label={label}
            onInput={onInput}
          />
          <img src={img1} alt="" className="img1" />
        </div>
        <div className="right-container">
          <img src={img3} alt="" className="img3" />
          <img src={img2} alt="" className="img2" />
          <div className="hindi-title">
            पूजा पाठ हो या अनुष्ठान,
            <br />
            <span>पंडित</span> मिलना हुआ आसान।
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
