import React from "react";
import "./ServBlock2.css";
import i1 from "../../../../images/i1.png";
import i2 from "../../../../images/i2.png";
import i3 from "../../../../images/i3.png";

const ServBlock2 = () => {
  return (
    <div className="servBlock2 container">
      <div className="servBlock2-box">
        <div className="for-image-block">
          <div className="image-box-2">
            <img src={i1} alt="" />
            <div className="asd">
              <p>
                The unseen of spending three years at Pixelgrade, spending three
                years at
              </p>
            </div>
          </div>
          <div className="image-box-2">
            <img src={i2} alt="" />
            <div className="asd">
              <p>
                How to optimize images in WordPress for faster loading (complete
                guide)
              </p>
            </div>
          </div>
          <div className="image-box-2">
            <img src={i3} alt="" />
            <div className="asd">
              <p>Start a blog to reach your creative peak</p>
            </div>
          </div>
        </div>
        {/* //////////////////////// */}
        <div className="textaboveserv">
          <ul>
            <li>How often should the system be cleaned and why?</li>
            <li>Can I clean the air conditioner myself?</li>
            <li>How often should the system be cleaned and why?</li>
            <li>How often should the system be cleaned and why?</li>
            <li>Can I clean the air conditioner myself?</li>
            <li>Can I clean the air conditioner myself?</li>
          </ul>
          <ul>
            <li>How often should the system be cleaned and why?</li>
            <li>Can I clean the air conditioner myself?</li>
            <li>How often should the system be cleaned and why?</li>
            <li>How often should the system be cleaned and why?</li>
            <li>Can I clean the air conditioner myself?</li>
            <li>Can I clean the air conditioner myself?</li>
          </ul>
          <ul>
            <li>How often should the system be cleaned and why?</li>
            <li>Can I clean the air conditioner myself?</li>
            <li>How often should the system be cleaned and why?</li>
            <li>How often should the system be cleaned and why?</li>
            <li>Can I clean the air conditioner myself?</li>
            <li>Can I clean the air conditioner myself?</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServBlock2;
