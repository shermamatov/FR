import React from "react";
import "./block3.scss";
import banner from "../../../../images/block3Banner.webp";
const Block3 = () => {
    return (
        <div className="block3_main">
            <div className="block3">
                <div className="block3_left">
                    <img src={banner} alt="" />
                </div>
                <div className="block3_right">
                    <h1>
                        SEO TITLE HVAC <br /> CONTRACTOR <br /> IN LOS ANGELES
                    </h1>
                    <p>
                        A global print fulfillment company partnered with Mason{" "}
                        <br />
                        Interactive to grow omnichannel sales via Search Engine{" "}
                        <br />
                        Optimization (SEO). During the course of the engagement,{" "}
                        <br />
                        the client saw a 134% increase in organic traffic,{" "}
                        <br />
                        resulting in a measurable increase in leads, and sales.
                    </p>
                    <button className="btn_var3">Read more</button>
                </div>
            </div>
            <h1 className="block3_buhoi_text">Our engineers are trained </h1>
        </div>
    );
};

export default Block3;
