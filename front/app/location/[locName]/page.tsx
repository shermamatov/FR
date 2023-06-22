"use client";
import { Layout } from "@/components/Layout";
import "../location.scss";
import { use, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { Location, PaginationData, fetchLocations } from "@/api";
import Link from "next/link";
export default function Location({ params }: any) {
  const [locations, setLocations] = useState<PaginationData<Location>>();
  const cookies = new Cookies();
  const { locName } = params;
  async function getLocations() {
    setLocations(await fetchLocations());
  }

  function setCurrentLocation(elem: Location) {
    if (typeof window !== "undefined") {
      cookies.set("currentLocation", elem, { path: "/" });
      localStorage.setItem("currentLocation", JSON.stringify(elem));
      localStorage.setItem("locationId", JSON.stringify(elem.id));
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <Layout location={false}>
      <section className="content location_adap_main_block">
        <div className="location_row">
          <div className="location_row_left">
            <p className="location_subtitle">Locations</p>
            <h1 className="location_title">Your city is {locName}</h1>
          </div>
          <input
            type="text"
            placeholder="insert your city or zip coude"
            className="location_input"
          />

          <img src="/circle-img.webp" alt="" className="location_row_img" />
        </div>
      </section>
      <section>
        <div className="content mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3024.0035599325865!2d-74.00071413419064!3d40.717938129331245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s73%20Canal%20Street%2C%20New%20York%2C%20Los!5e0!3m2!1sru!2skg!4v1680988403905!5m2!1sru!2skg"
            width="100%"
            height="350"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      <section className="location_block2 ">
        <div className="content">
          <h1 className="location_block2_title">
            Select from the list your city
          </h1>
          <div className="row" style={{ flexDirection: "column" }}>
            {locations?.results?.map((item) => (
              <div className="col" key={item.id}>
                <Link
                  href={`/location/${item?.location_name?.replace(
                    /%| /g,
                    "_"
                  )}`}>
                  <p
                    className="location_block2_item"
                    onClick={() => setCurrentLocation(item)}>
                    {item.location_name}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <div className="location_block2_bottomLine"></div>
        </div>
      </section>
    </Layout>
  );
}
