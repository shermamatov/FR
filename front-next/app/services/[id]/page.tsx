"use client";

import { fetchServiceById, fetchReviews, fetchServices } from "@/api";
import { PageNavProps } from "@/app/types";
import { Layout } from "@/components/Layout";
import { use } from "react";
import ServBlock1 from "../servBlock1";
import altBefore from "@/assets/services_before.jpg";
import altAfter from "@/assets/services_after.jpg";
import Image from "next/image";
import bath2 from "@/assets/bath.png";
import icon1 from "@/assets/serv_icon1.svg";
import icon2 from "@/assets/serv_icon2.svg";
import HomeBlock3 from "@/app/homeblock/homeBlock3/HomeBlock3";
import ServBlock9 from "./ServBlock9";
import Link from "next/link";
import React from "react";
import galochkaIcon from "@/assets/galochkaIcon.svg";
import stars from "@/assets/stars.svg";
import google from "@/assets/google.svg";
import facebook from "@/assets/facebook.svg";
import yelp from "@/assets/yelp.svg";
import banner from "@/assets/banner.jpg";
import krujok from "@/assets/block1Krug.png";
import "../services.scss";
export default function ServiceSingle({ params }: PageNavProps) {
  // const post = use(fetchPostById(params.id));

  const service = use(fetchServiceById(params.id));
  const services = use(fetchServices());
  const reviews = use(fetchReviews());
  function sliceServArr() {
    if (service.children.length > 2) {
      let arra = [...service.children];
      let a = arra.splice(0, 3);
      return a;
    } else {
      let arra = [...services.results];
      let a = arra.splice(0, 3);
      return a;
    }
  }
  function sliceServArr2() {
    let arra = [...service.children];
    let a = arra.splice(3);
    return a;
  }
  console.log(service);

  return (
    <Layout>
      <div>
        <section className="content -mt-12 md:-mt-24 ">
          <div className="block1">
            <div className="block1_left">
              <p className="font-black" style={{ color: "#A5A582" }}>
                SERVICES
              </p>
              <h1 className="bord w-full md:w-[50%] mb-4">{service.name}</h1>
              <p className="w-full md:w-[50%]">{service.description}</p>
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
      <section className="content mt-[60px] md:mt-[150px]">
        <div className="serv_before_after_block hidden md:flex">
          <Image
            src={
              service.offer_image_before
                ? service.offer_image_before
                : altBefore
            }
            width={100}
            height={100}
            alt=""
            unoptimized
          />
          <Image
            width={100}
            height={100}
            src={
              service.offer_image_after ? service.offer_image_after : altAfter
            }
            alt=""
            unoptimized
          />
        </div>
        <div className="serv_before_after_block_adap md:hidden">
          <div>
            <Image
              src={
                service.offer_image_before
                  ? service.offer_image_before
                  : altBefore
              }
              width={100}
              height={100}
              alt=""
              unoptimized
            />
            <Image
              width={100}
              height={100}
              src={
                service.offer_image_after ? service.offer_image_after : altAfter
              }
              alt=""
              unoptimized
            />
          </div>
          <div className="serv_before_after_block_bottom">
            <h2>
              Friendly <br /> offer
            </h2>
            <h4 className="">
              cost <span>${service.offer_price}</span>
            </h4>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="blogSingle_services_block">
          {sliceServArr().map((item) => (
            <div key={item.id}>
              <Image
                src={item.offer_image ? item.offer_image : bath2}
                alt="sorry"
                width={100}
                height={100}
                unoptimized
              />
              <Link href={`/services/${item.slug}`}>
                <p>{item.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section
        className="content mt-10 pt-10 pb-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid justify-between gap-2.5"
        style={{ width: "100%" }}>
        <div style={{ marginTop: "20px" }} key={service.id}>
          <p className="font-bold text-3xl underline">{service.name}</p>
        </div>
        {services.results.map(
          (item) =>
            item.name != service.name && (
              <div style={{ marginTop: "20px" }} key={item.id}>
                <Link href={`/services/${item.slug}`}>
                  <p className="font-bold text-xl cursor-pointer">
                    {item.name}
                  </p>
                </Link>
              </div>
            )
        )}
      </section>
      <section className="servBlock3">
        <div className="content srv3">
          <div className="row">
            <div className="col-6">
              <h1 className="servBlock3_title">FAQ</h1>
              <h2 className="servBlock3_subtitle">
                What problems can arise during heating?
              </h2>
              <p className="servBlock3_text">
                We offer a wide range of HVAC services catered to both
                residential and commercial clients. Even the all-powerful
                Pointing has no control about the blind texts.
              </p>
            </div>
            <div className="col-6"></div>
          </div>
          <div className="row row2">
            <div className="col-6">
              <p className="servBlock3_question">
                How often should the system be cleaned and why?
              </p>
              <p className="servBlock3_question">
                Can I clean the air conditioner myself?
              </p>
              <p className="servBlock3_question">
                How often should the system be cleaned and why?
              </p>
              <p className="servBlock3_question">
                How often should the system be cleaned and why?
              </p>
              <p className="servBlock3_question">
                Can I clean the air conditioner myself?
              </p>
              <p className="servBlock3_question">
                Can I clean the air conditioner myself?
              </p>
            </div>
            <div className="col-6">
              <p className="servBlock3_question">
                How often should the system be cleaned and why?
              </p>
              <p className="servBlock3_question">
                Can I clean the air conditioner myself?
              </p>
              <p className="servBlock3_question">
                How often should the system be cleaned and why?
              </p>
              <p className="servBlock3_question">
                How often should the system be cleaned and why?
              </p>
              <p className="servBlock3_question">
                Can I clean the air conditioner myself?
              </p>
              <p className="servBlock3_question">
                Can I clean the air conditioner myself?
              </p>
            </div>
          </div>
          <button className="servBlock3_btn">more questions</button>
        </div>
      </section>
      <HomeBlock3 />
      <div className="content">
        <div className="fr_server">
          <h2 className="transparent_text">at manufacturing plants</h2>
          <h2>our photos</h2>
          <div className="grid_block">
            {service.media.map((item) => (
              <div key={item.id} className="grid__item">
                <Image
                  src={item.photo}
                  alt={item.caption}
                  className="grid__img"
                  unoptimized
                  width={100}
                  height={100}
                />
                <p className="grid__desc bord">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="servBlock5">
        <div className="servBlock5_bg"></div>
        <h1 className="servBlock5_title">10 YERS WARANTY</h1>
        <button className="servBlock5_btn">Book online now</button>
      </div>
      <section className="content flex justify-around pt-12 pb-12   ">
        <div className="flex items-center">
          <Image className="w-12 md:w-20" src={icon2} alt="#" />
          <div className="flex flex-col ml-4">
            <h2 className="text-3xl md:text-5xl">+1000</h2>{" "}
            <p className="text-center font-bold text-xs md:text-base">
              Completed project
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <Image className="w-12 md:w-20" src={icon1} alt="#" />
          <div className="flex flex-col ">
            <h2 className="text-3xl md:text-5xl">+5000</h2>{" "}
            <p className="text-center font-bold text-xs md:text-base">
              clients review
            </p>
          </div>
        </div>
      </section>
      <ServBlock9 reviews={reviews} />
    </Layout>
  );
}
