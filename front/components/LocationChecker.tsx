import React, { useEffect, useState } from "react";
import { use } from "react";
import { fetchServiceByIdandLoc } from "@/api";
import { PageNavProps } from "@/app/types";
import google from "@/assets/google.svg";
import facebook from "@/assets/facebook.svg";
import yelp from "@/assets/yelp.svg";
import Image from "next/image";
import "../app/services/services.scss";

function LocationChecker({ params }: PageNavProps) {
  const service = use(fetchServiceByIdandLoc(params.id, params.locId));

  return service.text_for_location?.text || service.description != "" ? (
    service.text_for_location?.text ? (
      <>
        <h1 className="bord w-[90%] mb-4">
          {service.text_for_location.h1
            ? service.text_for_location.h1
            : service.name}
        </h1>
        <p className=" w-[90%] text-justify ">
          {service.text_for_location.text}
        </p>
      </>
    ) : (
      <>
        <h1 className="bord w-[90%] mb-4">
          {service.text_for_location.h1
            ? service.text_for_location.h1
            : service.name}
        </h1>

        <p className="w-[90%] text-justify ">{service.description}</p>
      </>
    )
  ) : (
    <div className="left_bottom_block">
      <div className="block1_desc">
        <div className="bord">
          <img src="/galochkaIcon.svg" alt="" />
          <h4>30+ years experience in engineering</h4>
        </div>
        <div className="bord">
          <img src="/galochkaIcon.svg" alt="" />
          <h4>Available 24/7 for Emergencies</h4>
        </div>
        <div className="bord">
          <img src="/galochkaIcon.svg" alt="" />
          <h4>Quick service Same-Day inspection and estimate</h4>
        </div>
        <div className="rating_block bord">
          <img src="/stars.svg" alt="" />
          <p>95% of clients recommend us</p>
        </div>
        <div className="mass_block bord">
          <Image src={google} alt="" />
          <Image src={facebook} alt="" />
          <Image src={yelp} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LocationChecker;
