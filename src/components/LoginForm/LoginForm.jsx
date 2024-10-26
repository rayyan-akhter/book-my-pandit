import React from "react";
import "./style.css";

const LoginForm = ({ label, onSubmit, value, isOTP, onInput }) => {

  const handleSubmit = () => {
    if (!value) return;
    if (isOTP) {
      const storedNumber = localStorage.getItem("mobileNumber");
      if(storedNumber){
        const lastFourDigit = storedNumber.slice(-4)
        const isOtpValid = value === lastFourDigit;
        if(isOtpValid){
          onSubmit();
        } else{
          alert("otp is incorrect")
        }
      } else{
        console.log("mobile number not found")
      }

      return;
    }
    localStorage.setItem("mobileNumber", value);
    const lastFourDigits = value.slice(-4); 
    localStorage.setItem("lastFourDigits", lastFourDigits);
    onSubmit();
  };

  
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
