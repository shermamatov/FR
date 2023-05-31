"use client";
import "./block3.scss";
import Image from "next/image";
import banner from "./banner.jpg";
import bannerAdap from "./banner_adap.jpg";
import closeIcon from "./close_icon.svg";
import { useState } from "react";

export default function HomeBlock3() {
    const [modal, setModal] = useState(false);
    return (
        <div className="block3_main">
            <div className="content">
                {modal && (
                    <div
                        className="block3_modal"
                        onClick={() => setModal(false)}
                    >
                        <div
                            className="relative"
                            style={{ padding: "30px 5%" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    position: "absolute",
                                    right: "4%",
                                    top: "2%",
                                    cursor: "pointer",
                                }}
                                onClick={() => setModal(false)}
                                src={closeIcon}
                                alt=""
                            />
                            <Image
                                className="modal_banner"
                                src={bannerAdap}
                                alt="modal"
                            />
                            <h3>Beverly Hills</h3>
                            <h2>Antique Restoration</h2>
                            <p>
                                A global print fulfillment company partnered
                                with Mason Interactive to grow omnichannel sales
                                via Search Engine Optimization (SEO). During the
                                course of the engagement, the client saw a 134%
                                increase in organic traffic, resulting in a
                                measurable increase in leads, and sales.During
                                the course of the engagement, the client saw a
                                134% increase in organic traffic, resulting in a
                                measurable increase in leads, and sa
                            </p>
                        </div>
                    </div>
                )}
                <div className="block3">
                    <div className="block3_left">
                        <Image src={banner} alt="" />
                    </div>
                    <div className="block3_right">
                        <h1 className="bord">
                            SEO TITLE HVAC <br /> CONTRACTOR <br /> IN LOS
                            ANGELES
                        </h1>
                        <p className="bord">
                            A global print fulfillment company partnered with
                            Mason <br />
                            Interactive to grow omnichannel sales via Search
                            Engine <br />
                            Optimization (SEO). During the course of the
                            engagement, <br />
                            the client saw a 134% increase in organic traffic,{" "}
                            <br />
                            resulting in a measurable increase in leads, and
                            sales.
                        </p>
                        <button
                            className="btn_variant"
                            onClick={() => setModal(true)}
                        >
                            Read more
                        </button>
                    </div>
                </div>
                <h1 className="block3_buhoi_text ">
                    Our engineers are trained{" "}
                </h1>
            </div>
        </div>
    );
}
