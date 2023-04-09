import React from "react";
import "./block6.css";
import "./latestAdaptive.css";
import mask1 from "./imageLatestPost/Mask1.png";
import mask2 from "./imageLatestPost/Mask2.png";
import mask3 from "./imageLatestPost/Mask3.png";
import mask4 from "./imageLatestPost/Mask4.png";
// import mask5 from "./imageLatestPost/Mask5.png";

const LatestPost = () => {
  return (
    <div className="latest-Post">
      <h1 className="latest">LATEST POST</h1>
      <div className="Latest-Post-main">
        <div className="the-first-left-post">
          <div className="post">
            <img className="post1" src={mask1} alt="" />
            <div className="about1">
              <p className="date">13 Sep 2022</p>
              <a href="#" className="title1">Eight rules for choosing the right color</a>
            </div>
          </div>
          <div className="post">
            <img src={mask2} alt="" />
            <div className="about1">
              <p className="date">13 Sep 2022</p>
              <a href="#" className="title1">
                Celebrating Thanksgiving At Home
              </a>
            </div>
          </div>
          <div className="post">
            <img src={mask3} alt="" />
            <div className="about1">
              <p className="date">13 Sep 2022</p>
              <a href="#"  className="title1">
                Setting Intentions Instead of Resolutions for 2021
              </a>
            </div>
          </div>
        </div>
        <div className="the-first-right-post">
          <div className="postnot">
            <img src={mask3} alt="" />
            <div className="about11">
              <p className="datenot">13 Sep 2022</p>
              <a href="#" className="titlenot">
                Mindfulness Activities for Kids & Toddlers
              </a>
            </div>
          </div>
          <div className="postnot1">
            <img src={mask4} alt="" />
            <div className="about11">
              <p className="datenot">13 Sep 2022</p>
              <a href="#" className="titlenot1">
                The Revolutionary Functionality of the Doona Car Seat & Stroller
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="btn_block">
        <button className="latest__btn">View all posts</button>
      </div>
    </div>
  );
};

export default LatestPost;