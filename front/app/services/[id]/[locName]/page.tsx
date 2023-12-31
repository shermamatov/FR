import {
  fetchServiceByIdandLoc,
  fetchReviews,
  fetchServices,
  fetchBlog,
  fetchLocations,
} from "@/api";
import { PageNavProps } from "@/app/types";
import { Layout } from "@/components/Layout";
import { use } from "react";
// import ServBlock1 from "../../servBlock1";
import altBefore from "@/assets/services_before.jpg";
import altAfter from "@/assets/services_after.jpg";
import Image from "next/image";
import bath2 from "@/assets/bath.png";
import icon1 from "@/assets/serv_icon1.svg";
import icon2 from "@/assets/serv_icon2.svg";
// import HomeBlock3 from "@/app/homeblock/homeBlock3/HomeBlock3";
import ServBlock9 from "@/components/servBlock9/ServBlock9";
import Link from "next/link";
import React from "react";
// import galochkaIcon from "@/assets/galochkaIcon.svg";
// import stars from "@/assets/stars.svg";
import google from "@/assets/google.svg";
import facebook from "@/assets/facebook.svg";
import yelp from "@/assets/yelp.svg";
import banner from "@/assets/banner.jpg";
import krujok from "@/assets/block1Krug.png";
import "../../services.scss";
import HomeBlock4 from "@/app/homeblock/homeBlock4/HomeBlock4";

import { Metadata, ResolvingMetadata } from "next";
import HomeBlockService from "@/app/homeblock/homeBlockService/HomeBlockService";

type Props = {
  params: { id: string; locName: string };
};

// set dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const locations = await fetchLocations();
  let location_id = locations.results.filter(
    (item: any) => item.location_name.replace(/%| /g, "_") === params.locName
  );
  const id = params.id;

  const url = `https://1furniturerestoration.com/api/service/${id}/?for_location=${location_id[0].id}`;

  // fetch data
  const data = await fetch(url).then((res) => res.json());
  const service = data;

  return {
    title: service.text_for_location.h1
      ? service.text_for_location.h1
      : service.name + " | #1furniturerestoration - Services",
    description: service.text_for_location.text
      ? service.text_for_location.text
      : service.description,
    keywords: service.text_for_location.keywords
      ? service.text_for_location.keywords
      : "",
  };
}

export default function ServiceSingle({ params }: PageNavProps) {
  // const post = use(fetchPostById(params.id));
  const locations = use(fetchLocations());
  let location_id = locations.results.filter(
    (item: any) => item.location_name.replace(/%| /g, "_") === params.locName
  );
  const service = use(fetchServiceByIdandLoc(params.id, location_id[0].id));
  const services = use(fetchServices());

  const reviews = use(fetchReviews());
  const blogs = use(fetchBlog());

  // function sliceServArr() {
  //   if (service.children.length > 2) {
  //     let arra = [...service.children];
  //     let a = arra.splice(0, 10);
  //     return a;
  //   } else {
  //     let arra = [...services.results];
  //     let newArr = [];
  //     for (let i of arra) {
  //       if (i.main_menu) {
  //         newArr.push(i);
  //       }
  //     }
  //     let a = newArr.splice(0, 10);
  //     return a;
  //   }
  // }

  return (
    <Layout>
      <div>
        <section className="content">
          <div className="block1 single_block1 ">
            <div className="block1_left w-full lg:w-[50%]">
              <p className="font-black" style={{ color: "#A5A582" }}>
                SERVICES
              </p>
              {/* <h1 className="bord w-[90%] mb-4">
                                  {service.name}
                              </h1> */}
              {/* <LocationChecker params={params} /> */}
              {service.text_for_location?.text || service.description != "" ? (
                service.text_for_location?.text ? (
                  <>
                    <h1 className="bord w-full lg:w-[90%] mb-4">
                      {service.text_for_location.h1
                        ? service.text_for_location.h1
                        : service.name}
                    </h1>
                    {/* {service.text_for_location.h2 && <h2>{service.text_for_location.h2}</h2>} */}
                    <p className=" w-full lg:w-[90%] text-justify ">
                      {service.text_for_location.text}
                    </p>
                  </>
                ) : (
                  <>
                    <h1 className="bord w-full lg:w-[90%] mb-4">
                      {service.text_for_location.h1
                        ? service.text_for_location.h1
                        : service.name}
                    </h1>

                    <p className="w-full lg:w-[90%] text-justify ">
                      {service.description}
                    </p>
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
              )}
            </div>
            <div className="block1_right bord hidden lg:flex ">
              <div className="banner_block">
                <Image
                  layout="responsive"
                  quality={100}
                  width={100}
                  height={100}
                  src={service.main_image || banner}
                  alt=""
                />
                <div className="krujok">
                  <Image
                    layout="responsive"
                    quality={100}
                    width={100}
                    height={100}
                    src={krujok}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="content mt-[60px] lg:mt-[100px]">
        <div className="serv_before_after_block_adap ">
          <div>
            <Image
              layout="responsive"
              quality={100}
              src={
                service.offer_image_before
                  ? service.offer_image_before
                  : altBefore
              }
              // width={100}
              // height={100}
              alt=""
              // unoptimized
            />
            <Image
              layout="responsive"
              quality={100}
              // width={100}
              // height={100}
              src={
                service.offer_image_after ? service.offer_image_after : altAfter
              }
              alt=""
              // unoptimized
            />
          </div>

          <div className="serv_before_after_block_bottom">
            <h2>
              Friendly <br /> offer
            </h2>
            <div className="serv_before_after_block_bottom_price">
              <p>cost</p>
              <h4>${service.offer_price}</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="blogSingle_services_block">
          {service?.children &&
            service?.children?.map((item: any) => (
              <div key={item.id}>
                <Image
                  quality={100}
                  layout="responsive"
                  src={item.offer_image ? item.offer_image : banner}
                  alt="sorry"
                  width={100}
                  height={100}
                />
                <Link
                  href={`/services/${item.slug}/${params.locName.replace(
                    /%| /g,
                    "_"
                  )}`}>
                  <p>{item.anchor_from_parent || item.name}</p>
                </Link>
              </div>
            ))}
        </div>
      </section>
      <section
        className="content mt-10 pt-10 pb-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid justify-between gap-2.5"
        style={{ width: "100%" }}>
        {service.children.slice(3).map(
          (item) =>
            item.name != service.name && (
              <div style={{ marginTop: "20px" }} key={item.id}>
                <Link
                  href={`/services/${item.slug}/${params.locName.replace(
                    /%| /g,
                    "_"
                  )}`}>
                  <p className="font-bold text-xl cursor-pointer">
                    {item.anchor_from_parent || item.name}
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
              <h1 className="servBlock3_title">Frequently Asked Questions</h1>
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
          {service.blogs?.length !== 0
            ? service.blogs?.map((item) => (
                <Link
                  className="w-[45%]"
                  key={item.id}
                  href={`/blog/${item.id}`}>
                  <p className="servBlock3_question  cursor-pointer">
                    {item.anchor_from_service || item.title}
                  </p>
                </Link>
              ))
            : blogs.results.map((item) => (
                <Link
                  className="w-[45%]"
                  key={item.id}
                  href={`/blog/${item.id}`}>
                  <p className="servBlock3_question  cursor-pointer">
                    {item.anchor_from_service || item.title}
                  </p>
                </Link>
              ))}
          {/* <div className="row row2">
                      </div> */}
        </div>
      </section>
      {/* <HomeBlock3 /> */}
      <HomeBlockService service={service} />
      {service.media.length !== 0 ? (
        <div className="content">
          <div className="fr_server">
            <h2 className="transparent_text">at manufacturing plants</h2>
            <h2 className="text-4xl sm:text-5xl">our photos</h2>
            <div className="grid_block">
              {service.media.map((item) =>
                item.type_of !== "before-after" ? (
                  <div key={item.id} className="grid__item">
                    <Image
                      layout="responsive"
                      quality={100}
                      width={100}
                      height={100}
                      src={item.photo}
                      alt={item.caption}
                      className="grid__img aspect-video aspAdap"
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        backgroundSize: "cover",
                      }}
                    />
                    <p className="grid__desc bord">
                      {item.caption || "media description"}
                    </p>
                  </div>
                ) : (
                  <div key={item.id}>
                    <div
                      key={item.id}
                      className="flex aspect-video aspAdap"
                      style={{ width: "100%" }}>
                      <Image
                        layout="responsive"
                        // quality={100}
                        src={item.before_img || item.photo}
                        alt={item.caption}
                        width={50}
                        height={100}
                        className="w-[50%]"
                        style={{
                          width: "50%",
                          objectFit: "cover",
                          backgroundSize: "cover",
                        }}
                      />
                      <Image
                        layout="responsive"
                        // quality={100}
                        src={item.after_img || item.photo}
                        alt={item.caption}
                        width={50}
                        height={100}
                        className="w-[50%]"
                        // className="aspect-video aspAdap"
                        style={{
                          width: "50%",
                          objectFit: "cover",
                          backgroundSize: "cover",
                        }}
                      />
                    </div>
                    <p className="grid__desc bord">
                      {item.caption || "media description"}
                    </p>
                  </div>
                )
              )}
              {/* {service.media.map((item) => (
                                  <div key={item.id} className="grid__item">
                                      <Image
                                          src={item.photo}
                                          alt={item.caption}
                                          className="grid__img"
                                          // unoptimized
                                          quality={100}
                                          layout="responsive"
                                          width={100}
                                          height={100}
                                      />
                                      <p className="grid__desc bord">
                                          {item.caption}
                                      </p>
                                  </div>
                              ))} */}
            </div>
          </div>
        </div>
      ) : (
        <HomeBlock4 />
      )}

      <div className="servBlock5">
        <div className="servBlock5_bg"></div>
        <h1 className="servBlock5_title">10 YERS WARANTY</h1>
        <Link href="/book">
          <button className="servBlock5_btn">Book online now</button>
        </Link>
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
