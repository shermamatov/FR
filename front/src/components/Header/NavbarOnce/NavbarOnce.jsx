import React, { useState } from "react";
import "./NavbarOnce.scss";
import navLogo from "../../../images/navLogo.png";
import menuIcon from "../../../images/menu.png";
import { useNavigate } from "react-router-dom";
const NavbarOnce = () => {
  const navigate = useNavigate();
  const [burger, setBurger] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar_left_block">
          <img src={navLogo} alt="" />
        </div>
        <div className="navbar_right_block">
          <div className="adap_logo_block">
            <img onClick={() => navigate("/")} src={navLogo} alt="" />
          </div>
          <div className="navbar_navigate">
            <div onClick={() => navigate("/AboutUs")} className="has__border">
              ABOUT US
            </div>
            <div className="has__border" onClick={() => navigate("/services")}>
              SERVICES{" "}
            </div>
            <div className="has__border" onClick={() => navigate("/reviews")}>
              REVIEWS
            </div>
            <div className="has__border" onClick={()=> navigate('/blog')}>BLOG</div>
            <div onClick={() => navigate("/photos")}>PROJECT PHOTOS</div>
          </div>
          <div className={"right_block_buttons"}>
            <button className="number_btn">+1-818-888-10-10</button>
            <button
              className="book_btn"
              onClick={() => {
                navigate("/book_now");
              }}
            >
              Book online now
            </button>
          </div>
          <div
            onClick={() => {
              setBurger(true);
            }}
            className="menu_block"
          >
            <img src={menuIcon} width={"100%"} alt="" />
          </div>
        </div>
      </div>
      <div
        className={
          burger === false
            ? "burger__menu"
            : "burger__menu burger__menu--active"
        }
      >
        <div className="exit">
          <button
            onClick={() => {
              setBurger(false);
            }}
          >
            <span>X</span>
          </button>
        </div>
        <div className="navbar_burger">
          <div className="burger__link">ABOUT US</div>
          <div className="burger__link">SERVICES </div>
          <div className="burger__link">REVIEWS</div>
          <div className="burger__link">BLOG</div>
          <div className="burger__link">PROJECT PHOTOS</div>
        </div>
      </div>
      <div className={window.innerWidth >= 769 ? "d-none" : "navbar"}>
        <div className="d-flex">
          <a href="https://goo.gl/maps/DyXf6MnjBwvPMhaF6">
            73 Canal Street, California, LA
          </a>
          <a href="tel:+18188881010">+1-818-888-10-10</a>
        </div>
      </div>
    </>
  );
};

export default NavbarOnce;
