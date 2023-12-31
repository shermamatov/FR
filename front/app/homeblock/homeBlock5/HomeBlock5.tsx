"use client";
import "./block5.css";
import {
  Location,
  PaginationData,
  Service,
  fetchServices,
  getCurrentLocation,
} from "@/api";
import axios from "axios";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function HomeBlock5() {
  const [services, setServices] = useState<PaginationData<Service>>();
  const [location, setLocation] = useState<Location>();
  const [currentLocation, setCurrentLocation] = useState({});

  async function getData() {
    setServices(await fetchServices());
  }
  async function getLocat() {
    if (
      typeof window !== "undefined" &&
      window.localStorage &&
      localStorage.getItem("currentLocation")
    ) {
      setLocation(JSON.parse(localStorage.getItem("currentLocation") || ""));
    } else {
      setLocation(await getCurrentLocation());
    }
  }
  useEffect(() => {
    getData();
    getLocat();
    if (location) {
      localStorage.setItem("currentLocation", JSON.stringify(location));
      localStorage.setItem("locationId", JSON.stringify(location.id));
    } else {
      axios("https://1furniturerestoration.com/api/location/find/").then(
        ({ data }) => setCurrentLocation(data)
      );
    }
  }, []);
  // const services = use(fetchServices());
  return (
    <div className="services_block">
      <div className="content">
        <div className={"services__wrapper"}>
          <div>
            <div className="services__inner">
              <div className="services__top">
                <h2 className="services__title bord">
                  {/* FR Services in Southern California */}
                  Our Furniture <br /> Restoration Services
                </h2>
                <p className="services__desc bord">
                  Explore a wide range of our furniture restoration services.
                  From small fixes to extensive reconstructions, we cover all
                  aspects of restoration with our 20+ years of experience!
                </p>
              </div>
              <div className="services__bottom">
                <ul className="services__list gap-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 ">
                  {services?.results.map(
                    (item) =>
                      item.main_menu && (
                        <li key={item.id}>
                          <Link
                            href={`/services/${
                              item.slug
                            }/${location?.location_name.replace(/%| /g, "_")}`}>
                            {item.name}
                          </Link>
                        </li>
                      )
                  )}
                </ul>
              </div>
              <div className="btn_block md:hidden">
                <Link href="/blog" className="latest__btn">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
