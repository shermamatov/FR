"use client";
import Image from "next/image";
import "./block3.scss";
// import Image from "next/image";
// import banner from "./banner.jpg";
// import bannerAdap from "./banner_adap.jpg";
// import closeIcon from "./close_icon.svg";
import { useState } from "react";

export default function HomeBlock3() {
    const [modal, setModal] = useState(false);
    return (
        <div className="block3_main z-10">
            <div className="content">
                {modal && (
                    <div
                        className="block3_modal"
                        onClick={() => setModal(false)}
                    >
                        <div
                            className="relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                className="block3_modal_close"
                                onClick={() => setModal(false)}
                                src="/close_icon.svg"
                                alt=""
                            />
                            <Image
                                quality={100}
                                width={100}
                                height={100}
                                layout="responsive"
                                className="modal_banner"
                                src="/banner_adap.jpg"
                                alt="modal"
                            />
                            {/* <h3>Beverly Hills</h3> */}
                            <h2>
                                Professionalism and Experience <br /> in
                                Furniture Restoration
                            </h2>
                            <p>
                                Our family business, which has been restoring
                                furniture for over 20 years, takes pride in its
                                history and rich experience. We have a deep
                                knowledge and practical skills that allow us to
                                restore furniture of any complexity, preserving
                                its original style and beauty. <br />
                                <br />
                                <span>Variety of Services</span> <br />
                                We offer a wide range of furniture restoration
                                services, including repair, restoration,
                                refurbishing, and even reconstruction of
                                furniture of various eras and styles. <br />{" "}
                                <br />
                                <span>Twenty Years of Experience</span> <br />
                                Over the 20 years of work, we have accumulated
                                vast experience, which allows us to cope with
                                any challenges that furniture restoration poses
                                for us. This, in turn, guarantees impeccable
                                quality of services to our customers. <br />{" "}
                                <br />
                                <span>Family Values</span> <br />
                                Being a family business, we value relationships
                                with our clients and strive to provide the best
                                service. Our main goal is to meet the needs of
                                each client. <br /> <br />
                                <span>Trust Our Experience</span> <br />
                                If you want to restore the original beauty and
                                functionality of your furniture, entrust this
                                work to our specialists. With us, your furniture
                                will look like new!
                            </p>
                        </div>
                    </div>
                )}
                <div className="block3">
                    <div className="block3_left">
                        <Image
                            quality={100}
                            layout="responsive"
                            width={100}
                            height={100}
                            src="/bannerHome3.jpg"
                            alt=""
                        />
                    </div>
                    <div className="block3_right">
                        <h2 className="bord">
                            {/* SEO TITLE HVAC <br /> CONTRACTOR <br /> IN LOS
                            ANGELES */}
                            Professionalism and Experience in <br />
                            Furniture Restoration
                        </h2>
                        <p className="bord">
                            Our family business, which has been restoring
                            furniture for over 20 years, takes pride in its
                            history and rich experience. We have a deep
                            knowledge and practical skills that allow us to
                            restore furniture of any complexity, preserving its
                            original style and beauty.
                        </p>
                        <button
                            className="btn_variant z-30"
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
