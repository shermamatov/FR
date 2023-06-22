import Image from "next/image";
import "./block1.scss";
import Link from "next/link";
// import Image from "next/image";
// import galochkaIcon from "@/assets/galochkaIcon.svg";
// import stars from "@/assets/stars.svg";
// import google from "@/assets/google.svg";
// import facebook from "@/assets/facebook.svg";
// import yelp from "@/assets/yelp.svg";
// import banner from "@/assets/banner.jpg";
// import krujok from "@/assets/block1Krug.png";

export default function HomeBlock1() {
    return (
        <section className="content -mt-8 lg:mt-0">
            <div className="block1">
                <div className="block1_left">
                    <h1 className="bord">
                        {/* Family owners <br /> business of <br /> engineers Family */}
                        Family Owned <br /> Business of <br /> Furniture <br />
                        Restoration
                    </h1>
                    <div className="left_bottom_block">
                        <div className="block1_desc">
                            <div className="bord">
                                {/* <img src="/galochkaIcon.svg" alt="" /> */}
                                <h4>
                                    High-quality furniture restoration services
                                    from our family company with rich 20+ years
                                    of experience. Preserve the beauty and value
                                    of your furniture with us!
                                </h4>
                            </div>
                            {/* <div className="bord">
                                <img src="/galochkaIcon.svg" alt="" />
                                <h4>Available 24/7 for Emergencies</h4>
                            </div>
                            <div className="bord">
                                <img src="/galochkaIcon.svg" alt="" />
                                <h4>
                                    Quick service Same-Day inspection and
                                    estimate
                                </h4>
                            </div> */}
                            <div className="rating_block bord">
                                <img src="/stars.svg" alt="" />
                                <p>95% of clients recommend us</p>
                            </div>
                            <div className="mass_block bord">
                                <img src="/google.svg" alt="" />
                                <a href="https://www.facebook.com/profile.php?id=100091922500599">
                                    <img src="/facebook.svg" alt="" />
                                </a>
                                <img src="/yelp.svg" alt="" />
                            </div>
                            <div className="btn_block1">
                                <Link href="/book" className="btn-book">
                                    Book online now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block1_right bord">
                    <div className="banner_block">
                        <Image
                            width={50}
                            height={100}
                            quality={100}
                            layout="responsive"
                            src="/banner.jpg"
                            alt="image"
                        />
                        <div className="krujok">
                            <Image
                                width={50}
                                height={100}
                                quality={100}
                                layout="responsive"
                                src="/block1Krug.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
