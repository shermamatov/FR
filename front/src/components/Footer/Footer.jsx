import React from "react";
import "./Footer.css";
import "./FooterAdaptive.css";
import facebook from "../../images/path16.png";
import m from "../../images/m.png";
import Yelp from "../../images/Yelp1.png";
import call from "../../images/call.png";
import email from "../../images/email.png";
import geo from "../../images/geo.png";

// строго использовать css.module

const Footer = () => {
  return (
    <footer >
    <div className="container__footer">
      <div className="container ">
        <div className="row">
          <div className="col-md-4">
            <div className="about">
              <h1>About</h1>
              <div className="polosa"></div>
            </div>
            <p className="col-md-p">
              We are an award winning HVAC company with over 10+ years
              experience in the business. We provide a wide range of services
              for both residential and commercial clients.
            </p>

            <div className="main_icons">
              <div className="okrug">
                <img src={facebook} alt="" />
              </div>
              <div className="okrug">
                <img src={m} alt="" />
              </div>
              <div style={{}} className="okrug">
                <img style={{ width: "70%" }} src={Yelp} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contacts">
              <h1>Contacts</h1>
              <div className="polosa"></div>
            </div>
            <div className="col-md-4-mini">
              <img src={geo} alt="" />
              <div className="con-min">
                <h4>Address</h4>
                <p>73 Canal Street, New York, Los</p>
              </div>
            </div>
            <div className="contacts_polosa"></div>

            <div className="col-md-4-mini">
              <img src={call} alt="" />
              <div className="con-min">
                <h4>Address</h4>
                <p>73 Canal Street, New York, Los</p>
              </div>
            </div>
            <div className="contacts_polosa"></div>

            <div className="col-md-4-mini">
              <img src={email} alt="" />
              <div className="con-min">
                <h4>Address</h4>
                <p>73 Canal Street, New York, Los</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about">
              <h1>Quick links</h1>
              <div className="polosa"></div>
            </div>
            <div>
              <div className="title">
                <p className="col-md-p-4"> about Us</p>
              </div>
              <div className="que_polasa"></div>

              <div className="title">
                <p className="col-md-p-4"> Services</p>
              </div>
              <div className="que_polasa"></div>
              <div className="title">
                <p className="col-md-p-4"> News</p>
              </div>
              <div className="que_polasa"></div>
              <div className="title">
                <p className="col-md-p-4"> Locations</p>
              </div>
              <div className="que_polasa"></div>
              <div className="title">
                <p className="col-md-p-4"> Contacts</p>
              </div>
              <div className="que_polasa"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
