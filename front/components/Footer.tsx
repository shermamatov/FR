import React from "react";
// import facebook from "@/assets/path16.png";
// import m from "@/assets/m.png";
// import Yelp from "@/assets/Yelp1.png";
// import call from "@/assets/call.png";
// import email from "@/assets/email.png";
// import banner from "@/assets/Rectangle.webp";
import "./Footer.scss";
import Link from "next/link";
const Footer = () => {
    return (
        <div>
            <footer style={{ backgroundImage: `url(/Rectangle.webp)` }}>
                <div className="footer__wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="about">
                                    <h1 className="text-3xl font-normal">
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
                                    <a href="https://www.facebook.com/profile.php?id=100091922500599">
                                        <div className="okrug">
                                            <img src="/path16.png" alt="" />
                                        </div>
                                    </a>
                                    <div className="okrug">
                                        <img src="/m.png" alt="" />
                                    </div>
                                    <div className="okrug">
                                        <img
                                            style={{ width: "70%" }}
                                            src="/Yelp1.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contacts">
                                    <h1 className="text-3xl font-normal">
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
                                    <img src="/call.png" alt="" />
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
                                    <img src="/email.png" alt="" />
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
                                    <h1 className="text-3xl font-normal">
                                        Quick links
                                    </h1>
                                    <div className="polosa"></div>
                                </div>
                                <div>
                                    <div className="title">
                                        <Link href="/about">
                                            <p className="col-md-p-4">
                                                About Us
                                            </p>
                                        </Link>
                                    </div>
                                    <div className="que_polasa"></div>

                                    <div className="title">
                                        <Link href="/services">
                                            <p className="col-md-p-4">
                                                Services
                                            </p>
                                        </Link>
                                    </div>
                                    <div className="que_polasa"></div>
                                    <div className="title">
                                        <Link href="/blog">
                                            <p className="col-md-p-4"> Blogs</p>
                                        </Link>
                                    </div>
                                    <div className="que_polasa"></div>
                                    <div className="title">
                                        <Link href="/location">
                                            <p className="col-md-p-4">
                                                Locations
                                            </p>
                                        </Link>
                                    </div>
                                    <div className="que_polasa"></div>
                                    <div className="title">
                                        <Link href="/photos">
                                            <p className="col-md-p-4">Photos</p>
                                        </Link>
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
