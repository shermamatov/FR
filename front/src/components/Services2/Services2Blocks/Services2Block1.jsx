import React from "react";
import galochkaIcon from "../../../images/galochka.png";
import stars from "../../../images/block1Stars.png";
import google from "../../../images/Google.png";
import facebook from "../../../images/Facebook.png";
import yelp from "../../../images/Yelp.png";
import banner from "../../../images/servicesBanner.webp";
import krujok from "../../../images/block1Krug.png";

const Services2Block1 = () => {
    return (
        <div>
            <div className="block1">
                <div className="block1_left services_block1_left">
                    <p className="services_text_p">SERVICES</p>
                    <h1 className="bord">
                        Family owners <br /> business of <br /> engineers
                    </h1>
                    <div className="left_bottom_block">
                        <div className="block1_desc">
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
                                <h4>
                                    Quick service Same-Day inspection and
                                    estimate
                                </h4>
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
                        <img src={banner} alt="" />
                        <div className="krujok">
                            <img src={krujok} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services2Block1;
