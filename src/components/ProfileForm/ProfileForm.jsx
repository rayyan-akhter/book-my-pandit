import React from "react";
import "./style.css";
import profilePic from "../../assets/Group 114.png";

const DetailsForm = () => {
  return (
    <div className="detailsForm">
      <div className="detailsForm-header">
        <h1>Profile Details</h1>
        <img src={profilePic} alt="" className="profilePic" />
      </div>
      <div className="detailsForm-inputs-container">
        <div className="detailsForm-inputs">
          <p>First Name</p>
          <input type="text" />
        </div>
        <div className="detailsForm-inputs">
          <p>Last Name</p>
          <input type="text" />
        </div>
        <div className="detailsForm-inputs">
          <p>Contact Number</p>
          <input type="number" />
        </div>
      </div>
      <div className="detailsForm-button">
        save
      </div>
    </div>
  );
};

export default DetailsForm;
