import React from "react";
import coverImg from "../../assets/Ellipse 14.png";
import "./style.css";
import img3 from "../../assets/design.png";
import Header from "../header/header";
import DetailsForm from "../ProfileForm/ProfileForm";

const Profile = ({onSubmit}) => {
  return (
    <div className="detailsLayout">
      <Header />
      <div className="detailsLayout-container">
        <DetailsForm  onSubmit={onSubmit}/>
        <img src={coverImg} alt="" className="coverImage" />
        <img src={img3} alt="" className="image3" />
      </div>
    </div>
  );
};

export default Profile;
