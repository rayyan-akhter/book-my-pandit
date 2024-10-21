import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className="header-signup">
        <p>{"Don’t have a account?"}</p>
      </div>
    </div>
  );
};

export default Header;
