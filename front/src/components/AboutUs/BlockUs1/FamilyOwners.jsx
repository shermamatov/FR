import React from "react";
import "./blockUs1.css";
import imagesak from "../../../images/sak.png";
import galochkaIcon from "../../../images/galochka.png";
import stars from "../../../images/block1Stars.png";
import google from "../../../images/Google.png";
import facebook from "../../../images/Facebook.png";
import yelp from "../../../images/Yelp.png";
import banner from "../../../images/block1Banner.webp";
import krujok from "../../../images/block1Krug.png";

const FamilyOwners = () => {
  return (
    <div className="block1">
      <div className="block1_left">
        <p className="about-result">about us</p>
        <h1 className="bord">
          Family owners <br/> business of <br/> engineers
        </h1>
        <div className="left_bottom_block">
          <div className="block1_desc about_us">
            <div>
              <h3 className="aboutUs_block1_text">
                We offer a wide range of HVAC services catered
                to both residential and commercial clients. Even
                the all-powerful Pointing has no control about
                the blind texts.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="block1_right bord">
        <div className="banner_block">
          <img src={imagesak} alt=""/>
          <div className="krujok">
            <img src={krujok} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyOwners;
