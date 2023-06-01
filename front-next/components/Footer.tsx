import React from "react";
import facebook from "@/assets/path16.png";
import m from "@/assets/m.png";
import Yelp from "@/assets/Yelp1.png";
import call from "@/assets/call.png";
import email from "@/assets/email.png";
import banner from "@/assets/Rectangle.webp";
import "./Footer.scss";
import Image from "next/image";
const Footer = () => {
    return (
        <div>
            <footer style={{ backgroundImage: `url(${banner.src})` }}>
                <div className="footer__wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="about">
                                    <h1 className="text-4xl font-normal">
                                        About
                                    </h1>
                                    <div className="polosa"></div>
                                </div>
                                <p className="col-md-p">
                                    We are an award winning HVAC company with
                                    over 10+ years experience in the business.
                                    We prvide a wide range of services for both
                                    residential and commercial clients.
                                </p>

                                <div className="main_icons">
                                    <div className="okrug">
                                        <Image src={facebook} alt="" />
                                    </div>
                                    <div className="okrug">
                                        <Image src={m} alt="" />
                                    </div>
                                    <div style={{}} className="okrug">
                                        <Image
                                            style={{ width: "70%" }}
                                            src={Yelp}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contacts">
                                    <h1 className="text-4xl font-normal">
                                        Contacts
                                    </h1>
                                    <div className="polosa"></div>
                                </div>
                                {/* <div className="col-md-4-mini">
                                    <img src={geo} alt="" />
                                    <div className="con-min">
                                        <h4>Address</h4>
                                    </div>
                                </div>
                                <div className="contacts_polosa"></div> */}

                                <div className="col-md-4-mini">
                                    <Image src={call} alt="" />
                                    <div className="con-min">
                                        <h4>Phone number</h4>
                                        <p>
                                            <a href="tel: +1 818 858 15 33">
                                                +1 818 858 15 33
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="contacts_polosa"></div>

                                <div className="col-md-4-mini">
                                    <Image src={email} alt="" />
                                    <div className="con-min">
                                        <h4>E-mail</h4>
                                        <p>
                                            <a href="mailto:info@1furniturerestoration.com">
                                                info@1furniturerestoration.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about">
                                    <h1 className="text-4xl font-normal">
                                        Quick links
                                    </h1>
                                    <div className="polosa"></div>
                                </div>
                                <div>
                                    <div className="title">
                                        <p className="col-md-p-4"> About Us</p>
                                    </div>
                                    <div className="que_polasa"></div>

                                    <div className="title">
                                        <p className="col-md-p-4"> Services</p>
                                    </div>
                                    <div className="que_polasa"></div>
                                    <div className="title">
                                        <p className="col-md-p-4"> Blogs</p>
                                    </div>
                                    <div className="que_polasa"></div>
                                    <div className="title">
                                        <p className="col-md-p-4"> Locations</p>
                                    </div>
                                    <div className="que_polasa"></div>
                                    <div className="title">
                                        <p className="col-md-p-4"> Photos</p>
                                    </div>
                                    <div className="que_polasa"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
