import React, { useEffect, useState } from "react";
import "./style.css";

const LoginForm = ({ label, onSubmit, value, isOTP, onInput }) => {
  const [OTP] = useState("1234");

  const handleSubmit = () => {
    if (!value) return;
    if (isOTP) {
      const isOTPValid = value === OTP;
      if (isOTPValid) onSubmit();
      return;
    }
    onSubmit();
  };

  useEffect(() => {
    if (!isOTP) return;
    //call api to fetch otp
  }, [isOTP]);
  
  return (
    <div className="loginForm-container">
      <div className="login-header">Log In</div>
      <div className="login-input">
        <p>{label}</p>
        <input type="text" onInput={(e) => onInput(e.target.value)} />
      </div>
      <div className="login-button" onClick={handleSubmit}>
        Submit
      </div>
    </div>
  );
};

export default LoginForm;
