import React from "react";
import "./blockUs1.css";
import imagesak from "../../../images/sak.png";
const FamilyOwners = () => {
  return (
    <div className="family-owners ">
      <div className="family-top-box">
        <div className="family-title-left">
          <p className="about-result">about us</p>
          <h1>Family owners business of engineers</h1>
          <p className="title-result">
            We offer a wide range of HVAC services catered to both residential
            and commercial clients. Even the all-powerful Pointing has no
            control about the blind texts.
          </p>
        </div>
        <div className="photes-result-right">
          <img src="" alt="" />
          <img src={imagesak} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FamilyOwners;
