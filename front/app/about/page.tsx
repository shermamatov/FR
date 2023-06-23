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
        title: "Learn More About Our Family-Owned Furniture Restoration Business with 20+ Years of Experience | #1FurnitureRestoration.com",
        description:
            "Get to know us, a family-owned furniture restoration business with 20+ years of experience. Discover our journey, values, and the craftsmanship that we provide.",
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
                                About Us: A Family-Owned <br /> Furniture
                                Restoration <br /> Business with 20+ <br />{" "}
                                Years of Experience
                            </h1>
                            <div className="left_bottom_block">
                                <div className="block1_desc about_us">
                                    <div>
                                        <p className="aboutUs_block1_text">
                                            We are a family-owned business with
                                            over two decades of experience in
                                            furniture restoration. We take pride
                                            in our work, which is grounded in a
                                            deep understanding of the art and
                                            science of restoration. Over the
                                            years, we have honed our skills to
                                            handle any type of furniture, from
                                            antique to modern, and have mastered
                                            a wide array of techniques to ensure
                                            that each piece we restore retains
                                            its original beauty and
                                            functionality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block1_right bord">
                            <div className="banner_block">
                                <Image
                                    quality={100}
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    src="/sak.webp"
                                    alt=""
                                />
                                <div className="krujok">
                                    <Image
                                        quality={100}
                                        layout="responsive"
                                        width={100}
                                        height={100}
                                        src="/circle-img.webp"
                                        alt=""
                                    />
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
                                        <Image
                                            quality={100}
                                            layout="responsive"
                                            width={100}
                                            height={100}
                                            src="/blockUs2-subtitle.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="blockUs2_subtitle2-mobile">
                                        <Image
                                            quality={100}
                                            layout="responsive"
                                            width={100}
                                            height={100}
                                            src="/blockUs2-subtitle-mobile.png"
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
                                            <a href="#">
                                                <img
                                                    src="/Google.png"
                                                    alt=""
                                                    style={{
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </a>
                                            <a href="https://www.facebook.com/profile.php?id=100091922500599">
                                                <img
                                                    src="/Facebook.png"
                                                    alt=""
                                                    style={{
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="/Yelp.png"
                                                    alt=""
                                                    style={{
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blockUs2_text">
                            <h2>Our Story, Mission, and Values</h2>
                            <p>
                                Our journey started over 20 years ago when we
                                realized the need for quality furniture
                                restoration services. We started small but with
                                a big vision - to offer the best furniture
                                restoration services, preserving the legacy and
                                beauty of every piece of furniture we work on.
                                Over the years, our skills, knowledge, and the
                                team have grown, but our core values of quality,
                                integrity, and respect for the craft remain the
                                same. <br /> <br />
                                <span>Expert Craftsmanship</span>
                                <br />
                                Our team of skilled craftsmen brings a wealth of
                                experience and passion to every project. We
                                treat each piece of furniture as a unique
                                artifact with its own history and personality.
                                Our comprehensive approach ensures that we fully
                                understand the original construction methods,
                                materials, and aesthetics before we start the
                                restoration process. <br />
                                <br />
                                <span>Our Services</span>
                                <br />
                                We offer a broad spectrum of services,
                                including, but not limited to, repairing
                                structural damage, veneer restoration, finishing
                                and refinishing, upholstery, and color matching.
                                Each service is tailored to the specific needs
                                of each piece of furniture and client. <br />
                                <br />
                                <span>Commitment to Excellence</span>
                                <br />
                                We are committed to delivering outstanding
                                results. Our extensive experience and deep
                                understanding of the art of restoration allow us
                                to achieve a high level of precision and
                                excellence in every project. We believe that
                                each piece of furniture deserves a second chance
                                to shine, and we make it happen. <br />
                                <br />
                                <span>Trust Us with Your Furniture</span>
                                <br />
                                We understand that your furniture is more than
                                just a functional item. It carries sentimental
                                value, family history, and a personal story.
                                Trust us to treat your furniture with the care,
                                respect, and attention it deserves. <br />{" "}
                                <br />
                                <span>Join Our Satisfied Clients</span> <br />
                                Over the years, we have restored countless
                                pieces of furniture, bringing joy and
                                satisfaction to our clients. We invite you to
                                become part of our story and experience the
                                excellence of our furniture restoration
                                services.
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
