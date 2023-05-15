import React from "react";
import "./ServBlock1.scss";
import galochkaIcon from "../../../../images/galochka.png";
import stars from "../../../../images/block1Stars.png";
import google from "../../../../images/Google.png";
import facebook from "../../../../images/Facebook.png";
import yelp from "../../../../images/Yelp.png";
import banner from "../../../../images/servicesBanner.webp";
import krujok from "../../../../images/block1Krug.png";
import banner2 from "../../../../images/service_banner2.webp";
import banner2Adap from "../../../../images/block2Banner.png";
import { useSelector } from "react-redux";
const ServBlock1 = () => {
  const servicesSingle = useSelector((s) => s.app.servicesSingle);

  return (
    <div>
      <div className="block1">
        <div className="block1_left services_block1_left">
          <p className="services_text_p">SERVICES</p>
          <h1 className="bord">
            {JSON.stringify(servicesSingle) === "{}" ? (
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              servicesSingle.h1
            )}
          </h1>
          <div className="left_bottom_block">
            <div className="block1_desc">
              <div className="bord">
                <p>{servicesSingle.description}</p>
              </div>
              <div className="bord">
                <img src={galochkaIcon} alt="" />
                <h4>30+ years experience in engineering</h4>
              </div>
              <div className="bord">
                <img src={galochkaIcon} alt="" />
                <h4>Available 24/7 for Emergencies</h4>
              </div>
              <div className="bord">
                <img src={galochkaIcon} alt="" />
                <h4>Quick service Same-Day inspection and estimate</h4>
              </div>
              <div className="rating_block bord">
                <img src={stars} alt="" />
                <p>95% of clients recommend us</p>
              </div>
              <div className="mass_block bord">
                <img src={google} alt="" />
                <img src={facebook} alt="" />
                <img src={yelp} alt="" />
              </div>
              {/* <div className="btn_block1">
                            <button className="btn_var3">
                                book online now
                            </button>
                        </div> */}
            </div>
          </div>
        </div>
        <div className="block1_right serv_banner_block">
          <div className="banner_block">
            <img
              src={
                servicesSingle.main_image ? servicesSingle.main_image : banner
              }
              alt=""
            />
            <div className="krujok">
              <img src={krujok} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="service_banner2_block">
        {
        servicesSingle.offer_image_before && servicesSingle.offer_image_after
        ? <div className="service_banner2_block_img">
          <img src={servicesSingle.offer_image_before} alt="" />
          <img src={servicesSingle.offer_image_after} alt="" />
        </div>
         : <>
            <img className="serv_banner2" src={banner2} alt="" />
            <img className="serv_banner2_adap" src={banner2Adap} alt="" />
          </>
        }
      </div>
    </div>
  );
};

export default ServBlock1;
