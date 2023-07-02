"use client";
import Image from "next/image";
import "./homeblockservice.scss";
// import Image from "next/image";
// import banner from "./banner.jpg";
// import bannerAdap from "./banner_adap.jpg";
// import closeIcon from "./close_icon.svg";
import { useState } from "react";

export default function HomeBlockService({ service }: any) {
  const [modal, setModal] = useState(false);
  console.log(service);

  return (
    <div className="block3_main z-10">
      <div className="content">
        {modal && (
          <div className="block3_modal" onClick={() => setModal(false)}>
            <div className="relative" onClick={(e) => e.stopPropagation()}>
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
              {service.text_for_location?.h2 ? (
                <h2>{service.text_for_location?.h2}</h2>
              ) : (
                <h2>
                  Professionalism and Experience <br /> in Furniture Restoration
                </h2>
              )}
              {service.text_for_location?.second_text ? (
                <p>{service.text_for_location?.second_text}</p>
              ) : (
                <p>
                  Our family business, which has been restoring furniture for
                  over 20 years, takes pride in its history and rich experience.
                  We have a deep knowledge and practical skills that allow us to
                  restore furniture of any complexity, preserving its original
                  style and beauty.
                </p>
              )}
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
            {service.text_for_location?.h2 ? (
              <h2 className="bord">{service.text_for_location?.h2}</h2>
            ) : (
              <h2 className="bord">
                Professionalism and Experience <br /> in Furniture Restoration
              </h2>
            )}
            {service.text_for_location?.second_text ? (
              <p className="bord">
                {service.text_for_location?.second_text.slice(0, 300)}...
              </p>
            ) : (
              <p className="bord">
                Our family business, which has been restoring furniture for over
                20 years, takes pride in its history and rich experience. We
                have a deep knowledge and practical skills that allow us to
                restore furniture of any complexity, preserving its original
                style and beauty.
              </p>
            )}
            <p className="bord"></p>
            <button className="btn_variant z-30" onClick={() => setModal(true)}>
              Read more
            </button>
          </div>
        </div>
        <h1 className="block3_buhoi_text ">Our engineers are trained </h1>
      </div>
    </div>
  );
}
