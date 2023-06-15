import { Layout } from "@/components/Layout";
import "./aboutPage.css";
// import imagesak from "../../assets/sak.png";
// import krujok from "../../assets/img.png";
// import blockUs2Subtitle from "../../assets/blockUs2-subtitle.png";
// import blockUs2SubtitleMobile from "../../assets/blockUs2-subtitle-mobile.png";
// import galochkaIcon from "../../assets/galochka.png";
// import stars from "../../assets/block1Stars.png";
// import yelp from "../../assets/Yelp.png";
// import google from "../../assets/Google.png";
// import facebook from "../../assets/Facebook.png";
// import blockUs2Icon1 from "../../assets/blockUs2-icon1.svg";
// import blockUs2Icon2 from "../../assets/blockUs2-icon2.svg";
import bg from "../../assets/blockUs2-bg.png";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "About 1#furniturerestoration - Expert Furniture Repair and Restoration Services",
        description:
            "1#furniturerestoration is a trusted provider of expert furniture repair and restoration services. Our skilled artisans and craftsmen are dedicated to preserving the beauty and integrity of your furniture pieces, using traditional techniques and high-quality materials. With personalized attention and a commitment to customer satisfaction, we breathe new life into cherished heirlooms, antiques, and modern furniture, ensuring exceptional results every time.",
    };
}

export default async function AboutUs() {
    return (
        <Layout>
            <section className="about_page">
                <div className="content">
                    <div className="block1">
                        <div className="block1_left">
                            <p
                                className="font-black  mb-2"
                                style={{ color: "#A5A582" }}
                            >
                                ABOUT US
                            </p>
                            <h1 className="bord">
                                Family owners <br /> business of <br />{" "}
                                engineers
                            </h1>
                            <div className="left_bottom_block">
                                <div className="block1_desc about_us">
                                    <div>
                                        <p className="aboutUs_block1_text">
                                            We offer a wide range of HVAC
                                            services catered to both residential
                                            and commercial clients. Even the
                                            all-powerful Pointing has no control
                                            about the blind texts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block1_right bord">
                            <div className="banner_block">
                                <img src="/sak.webp" alt="" />
                                <div className="krujok">
                                    <img src="/circle-img.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blockUs2">
                    <div className="blockUs2_title">
                        <h1>
                            welcome to
                            <br />
                            #1furniture restoration
                        </h1>
                    </div>
                    <div className="container plants content">
                        <div className="row ">
                            <div className="col-6">
                                <div className="blockUs2_wrapper_left">
                                    <h2 className="blockUs2_subtitle1">
                                        Our engineers are trained{" "}
                                    </h2>
                                    <div className="blockUs2_subtitle2">
                                        <img
                                            src="blockUs2-subtitle.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="blockUs2_subtitle2-mobile">
                                        <img
                                            src="blockUs2-subtitle-mobile.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="left_bottom_block">
                                    <div className="block1_desc">
                                        <div className="bord">
                                            <img src="/galochka.png" alt="" />
                                            <h4>
                                                30+ years experience in
                                                engineering
                                            </h4>
                                        </div>
                                        <div className="bord">
                                            <img src="/galochka.png" alt="" />
                                            <h4>
                                                Available 24/7 for Emergencies
                                            </h4>
                                        </div>
                                        <div className="bord">
                                            <img src="/galochka.png" alt="" />
                                            <h4>
                                                Quick service Same-Day
                                                inspection and estimate
                                            </h4>
                                        </div>
                                        <div className="rating_block bord">
                                            <img
                                                src="/block1Stars.png"
                                                alt=""
                                            />
                                            <p>95% of clients recommend us</p>
                                        </div>
                                        <div className="mass_block bord">
                                            <img
                                                src="/Google.png"
                                                alt=""
                                                style={{ objectFit: "contain" }}
                                            />
                                            <img
                                                src="/Facebook.png"
                                                alt=""
                                                style={{ objectFit: "contain" }}
                                            />
                                            <img
                                                src="/Yelp.png"
                                                alt=""
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blockUs2_text">
                            <p>
                                Our attention to detail and commitment to our
                                values have helped us grow. It all started 15
                                years ago with our President, a young aspiring
                                HVAC technician, who wanted to make an impact in
                                the industry. Well, with his drive, and the help
                                of our NexGen family along the way, we ve grown
                                to 8 locations across Southern California,
                                servicing customers every day and continuing to
                                grow into the industry standard for all things
                                HVAC. Welcome to NexGen!
                            </p>
                        </div>
                    </div>
                    <div className="blockUs2_bottom">
                        <div
                            className="blockUs2_bottom_bg"
                            style={{
                                backgroundImage: `url(${bg.src})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <div className="blockUs2_bottom_item">
                                <img src="/blockUs2-icon1.svg" alt="" />
                                <div className="blockUs2_bottom_item_text">
                                    <h4>+1000</h4>
                                    <p>Completed project</p>
                                </div>
                            </div>
                            <div className="blockUs2_bottom_item">
                                <img src="/blockUs2-icon2.svg" alt="" />
                                <div className="blockUs2_bottom_item_text">
                                    <h4>+5000</h4>
                                    <p>clients reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
