import React from "react";
import galochkaIcon from "@/assets/galochkaIcon.svg";
import stars from "@/assets/stars.svg";
import google from "@/assets/google.svg";
import facebook from "@/assets/facebook.svg";
import yelp from "@/assets/yelp.svg";
import banner from "@/assets/banner.jpg";
import krujok from "@/assets/block1Krug.png";
import Image from "next/image";
import "../app/services/services.scss";

export default function ServBlock1() {
  return (
    <div>
      <section className="content -mt-12 md:-mt-24 ">
        <div className="block1">
          <div className="block1_left">
            <p className="font-black" style={{ color: "#A5A582" }}>
              SERVICES
            </p>
            <h1 className="bord">
              Family owners <br /> business of <br /> engineers
            </h1>
            <div className="left_bottom_block">
              <div className="block1_desc">
                <div className="bord">
                  <Image src={galochkaIcon} alt="" />
                  <h4>30+ years experience in engineering</h4>
                </div>
                <div className="bord">
                  <Image src={galochkaIcon} alt="" />
                  <h4>Available 24/7 for Emergencies</h4>
                </div>
                <div className="bord">
                  <Image src={galochkaIcon} alt="" />
                  <h4>Quick service Same-Day inspection and estimate</h4>
                </div>
                <div className="rating_block bord">
                  <Image src={stars} alt="" />
                  <p>95% of clients recommend us</p>
                </div>
                <div className="mass_block bord">
                  <Image src={google} alt="" />
                  <Image src={facebook} alt="" />
                  <Image src={yelp} alt="" />
                </div>
                {/* <div className="btn_block1">
                                    <Link
                                        href="/book"
                                        className="btn-book px-12 text-lg"
                                    >
                                        book online now
                                    </Link>
                                </div> */}
              </div>
            </div>
          </div>
          <div className="block1_right bord">
            <div className="banner_block">
              <Image src={banner} alt="" />
              <div className="krujok">
                <Image src={krujok} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
