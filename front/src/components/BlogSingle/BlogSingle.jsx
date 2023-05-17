import React from "react";
import "./BlogSingle.scss";
import banner1 from "../../images/blogSingle_banner1.webp";
import banner2 from "../../images/blogSingle_banner2.webp";
import blogServImg1 from "../../images/i1.png";
import blogServImg2 from "../../images/i2.png";
import blogServImg3 from "../../images/i3.png";
import twit from "../../images/twit.png";
import link from "../../images/link.png";
import share from "../../images/share.png";
import face from "../../images/face.png";
const BlogSingle = () => {
    return (
        <div className="container blogSingle_main">
            <section className="all-title ">
                <ul className="all-title-block">
                    <li className="title-li">All</li>
                    <li style={{ color: "#9B51E0" }} className="title-li">
                        Cooling
                    </li>
                    <li style={{ color: "#107EBD" }} className="title-li">
                        Business Strategy{" "}
                    </li>
                    <li style={{ color: "#EC2A48" }} className="title-li">
                        Heating{" "}
                    </li>
                    <li style={{ color: "#F2994A" }} className="title-li">
                        Repairing
                    </li>
                    <li style={{ color: "#219653" }} className="title-li">
                        Commercial
                    </li>
                </ul>
            </section>
            <div className="blogSingle_banner1">
                <img src={banner1} alt="" />
            </div>
            <p className="blogSingle_blogName">Business Strategy </p>
            <h1 className="blogSingle_blogTitle">
                A-Series Ultra Low NOx Gas Furnace 80% Single Stage 40,000 BTU
                Non-Variable Upflow/Horizontal 14.5" wide
            </h1>
            <p className="blogSingle_blogData">POSTED ON DECEMBER 2,2021</p>
            <p className="blogSingle_blogDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
                amet venenatis urna cursus eget nunc scelerisque viverra mauris.
                Leo vel orci porta non pulvinar neque. Magna ac placerat
                vestibulum lectus. Aenean pharetra magna ac placerat. Felis
                bibendum ut tristique et egestas quis ipsum suspendisse
                ultrices. Scelerisque varius morbi enim nunc faucibus a. Nunc
                congue nisi vitae suscipit. Eget nunc scelerisque viverra mauris
                in aliquam sem fringilla. Facilisis sed odio morbi quis.
                Senectus et netus et malesuada. Dignissim enim sit amet
                venenatis. Imperdiet dui accumsan sit amet nulla. Cras sed felis
                eget velit aliquet sagittis id consectetur purus. Vitae aliquet
                nec ullamcorper sit amet risus nullam eget. Mi bibendum neque
                egestas congue quisque egestas diam in. Magna eget est lorem
                ipsum dolor sit amet consectetur. Ultrices eros in cursus
                turpis. Aliquam vestibulum morbi blandit cursus risus at
                ultrices mi. Dictum varius duis at consectetur.
            </p>
            <div className="blogSingle_banner1">
                <img src={banner2} alt="" />
            </div>
            <div className="blogSingle_services_block">
                <div>
                    <img src={blogServImg1} alt="" />
                    <p>
                        The unseen of spending three years at Pixelgrade,
                        spending three years at
                    </p>
                </div>
                <div>
                    <img src={blogServImg2} alt="" />
                    <p>
                        How to optimize images in WordPress for faster loading
                        (complete guide)
                    </p>
                </div>
                <div>
                    <img src={blogServImg3} alt="" />
                    <p>Start a blog to reach your creative peak</p>
                </div>
            </div>
            <div className="qestion">
                <h4>1. What is the point of this meeting?</h4>
                <p>
                    Yet, as many higher education professionals can surely
                    attest to, I have also witnessed the other challenge in
                    group decision making. In academia, engaging in critical
                    dissent is encouraged (reviewed by Jetten & Hornsey, 2014),
                    and while this is a fine attribute, practically, this can
                    mean that we sometimes spend so much time expressing our
                    thoughts, opinions, and concerns trying to reach consensus
                    and we somehow never arrive at decisions in a timely manner.
                </p>
            </div>
            <div className="qestion">
                <h4>2. What is the problem?</h4>
                <p>
                    To make decisions as a group, the problems must first be
                    clarified. In a meeting focused on problem-solving, be sure
                    to agree on a definition of the problem before talking about
                    potential solutions (Rogelberg, Scott, & Kello, 2007).
                </p>
            </div>
            <div className="qestion">
                <h4>3. Have a leader who leads.</h4>
                <p>
                    While everyone should feel comfortable talking, someone must
                    lead. Too often I have watched meetings end with “okay,
                    well…we are out of time, so let’s continue this next time.”
                    Or “let’s chew on this” or “let’s table this” or “well,
                    there’s a lot here, so…..” (the sentence doesn’t even get
                    completed as they look to the others for a direction).
                </p>
            </div>

            <div className="yasmin_block">
                <p>
                    Yasmine is currently an Associate Professor of Psychology at
                    Mount Saint Mary College where she teaches a wide array of
                    courses in the Psychology department. She is a Fulbright
                    Scholar spent a year working at the Medical Decision Making
                    Center at Ono Academic College in Israel.
                </p>
            </div>

            <div className="line"></div>
            <div className="mess">
                <img style={{ width: "40px" }} src={share} alt="" />
                <img src={face} alt="" />
                <img src={twit} alt="" />
                <img src={link} alt="" />
            </div>
        </div>
    );
};

export default BlogSingle;
