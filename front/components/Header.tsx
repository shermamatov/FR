"use client";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { AiOutlineClose } from "react-icons/ai";

// import logo from "@/assets/navLogo.png";
// import strela from "@/assets/strelka.png";
// import menuIcon from "@/assets/menu.png";
import axios from "axios";
import "./Header.scss";
import {
  Location,
  PaginationData,
  Service,
  fetchServices,
  fetchLocations,
  getCurrentLocation,
} from "@/api";
import { usePathname } from "next/navigation";
import HeaderModal from "./HeaderModal";

// async function getData() {
//   const res = await fetchLocations();
//   return res;
// }
// const dataPromise = getData();

const Header = ({ services, locat, locations }: any) => {
  const pathname = usePathname();
  const cookies = new Cookies();
  // const locations = use(dataPromise);
  const [burger, setBurger] = useState(false);
  const [modal, setModal] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<any>({});
  const [specialUrl, setSpecialUrl] = useState<any>();
  const [specLoc, setSpecLoc] = useState<any>(locat);
  // const [isChanged, setIsChanged] = useState(
  //   (typeof window !== "undefined" &&
  //     window.localStorage &&
  //     localStorage.getItem("isChanged")) ||
  //     ""
  //     ? localStorage.getItem("isChanged")
  //     : {}
  // );
  useEffect(() => {
    // setSpecLoc( (typeof window !== "undefined" &&
    // window.localStorage &&
    // localStorage.getItem("currentLocation")) ||
    // ""
    // ? JSON.parse(localStorage.getItem("currentLocation") || "")
    // : {})
    let path = pathname.split("/");
    let location_new = locations.results.filter(
      (item: any) =>
        item.location_name.replace(/%| /g, "_") === path[path.length - 1]
    );
    if (location_new.length !== 0) {
      setSpecLoc(location_new[0]);
    }
    console.log(pathname);
    console.log(location_new);
  }, [pathname]);

  // const [services, setServices] = useState<PaginationData<Service>>();
  const [location, setLocation] = useState<Location>();
  // async function getData() {
  //   setServices(await fetchServices());
  // }

  useEffect(() => {
    if (locat) {
      cookies.remove("currentLocation", { path: "/" });
      cookies.set("currentLocation", locat, { path: "/" });
      localStorage.setItem("currentLocation", JSON.stringify(locat));
    }
  }, [locat]);
  async function getLocat() {
    if (
      typeof window !== "undefined" &&
      window.localStorage &&
      localStorage.getItem("currentLocation") &&
      cookies.get("currentLocation")
    ) {
      setLocation(cookies.get("currentLocation") || "");
    } else {
      setLocation(await getCurrentLocation());
    }
  }
  useEffect(() => {
    // getData();
    getLocat();
    if (location) {
      cookies.remove("currentLocation", { path: "/" });
      cookies.set("currentLocation", location, { path: "/" });

      localStorage.setItem("currentLocation", JSON.stringify(location));
      localStorage.setItem("locationId", JSON.stringify(location.id));
    } else {
      axios("https://1furniturerestoration.com/api/location/find/").then(
        ({ data }) => setCurrentLocation(data)
      );
    }
  }, []);

  return (
    <div>
      <header>
        <div className="upNavbar">
          <div className="content">
            <p>
              {/* {location
                ? `${location?.location_name}, ${location?.state.name}`
                : JSON.stringify(currentLocation) !== "{}"
                ? `${currentLocation?.currentLocation_name}, ${currentLocation?.state.name}`
                : ""} */}
              {specLoc && `${specLoc?.location_name}, ${specLoc?.state.name}`}
              <Link
                href={`/location/${specLoc?.location_name?.replace(
                  /%| /g,
                  "_"
                )}`}
                className="upn_change">
                change
              </Link>
            </p>
            <h3>
              <span>20%</span> Todays special Deal in your city
            </h3>
          </div>
        </div>

        <div className="navbar content">
          <Link href={"/"}>
            <div className="navbar_left_block">
              <img src="/navLogo.png" style={{ cursor: "pointer" }} alt="" />
            </div>
          </Link>
          <div
            className="navbar_right_block"
            onMouseLeave={() => setModal(false)}>
            <div className="adap_logo_block">
              <Link href="/">
                <img src="/navLogo.png" alt="" />
              </Link>
            </div>
            <div className="navbar_navigate">
              <Link href="/about">
                <div
                  className="has__border"
                  onMouseLeave={() => setModal(false)}
                  onClick={() => setModal(false)}>
                  ABOUT US
                  <div
                    className="linia"
                    style={{
                      width: `${pathname == "/about" ? "50%" : "0%"}`,
                    }}></div>
                </div>
              </Link>

              <Link href="/services">
                <div
                  className="has__border serv "
                  onMouseOver={(e) => {
                    setModal(true);
                    e.stopPropagation();
                  }}
                  onClick={() => setModal(false)}
                  // onMouseLeave={() => setModal(false)}
                >
                  <p className="serv">SERVICES</p>
                  <img
                    style={{
                      transform: `${
                        modal ? "rotate(-360deg)" : "rotate(-180deg)"
                      }`,
                    }}
                    src="/strelka.png"
                    alt=""
                  />
                </div>
              </Link>

              <Link href="/reviews">
                <div
                  className="has__border "
                  onMouseLeave={() => setModal(false)}
                  onClick={() => setModal(false)}>
                  REVIEWS
                  <div
                    className="linia"
                    style={{
                      width: `${pathname == "/reviews" ? "50%" : "0%"}`,
                    }}></div>
                </div>
              </Link>

              <Link href="/blog">
                <div
                  className="has__border"
                  onMouseLeave={() => setModal(false)}
                  onClick={() => setModal(false)}>
                  BLOG
                  <div
                    className="linia"
                    style={{
                      width: `${pathname == "/blog" ? "50%" : "0%"}`,
                    }}></div>
                </div>
              </Link>

              <Link href="/photos">
                <div
                  onMouseLeave={() => setModal(false)}
                  onClick={() => setModal(false)}>
                  PROJECT PHOTOS
                  <div
                    className="linia"
                    style={{
                      width: `${pathname == "/photos" ? "50%" : "0%"}`,
                    }}></div>
                </div>
              </Link>
              {/* <NavbarModal setModal={setModal} modal={modal} /> */}
              {
                <HeaderModal
                  modal={modal}
                  setModal={setModal}
                  services={services}
                  location={specLoc}
                  locations={locations}
                />
              }
            </div>
            <div className={"right_block_buttons"}>
              <button className="number_btn">
                <a href="tel: +1 818 858 15 33">+1 818 858 15 33</a>
              </button>
              <Link href="/book">
                <button className="book_btn">Book online now</button>
              </Link>
            </div>
            <div
              onClick={() => {
                setBurger(true);
              }}
              className="menu_block">
              <img src="/menu.png" alt="" />
            </div>
          </div>
        </div>
        <div
          className={
            burger === false
              ? "burger__menu"
              : "burger__menu burger__menu--active"
          }>
          <div className="exit">
            <button
              onClick={() => {
                setBurger(false);
              }}>
              {/* <span>&#128473;</span> */}
              <AiOutlineClose size={25} color="#f2994a" />
            </button>
          </div>
          <div className="navbar_burger">
            <Link href="/about">
              <div
                className="burger__link"
                onClick={() => {
                  setBurger(false);
                }}>
                ABOUT US
              </div>
            </Link>

            {/* <Link href=""> */}
            <div className="burger__link serv" onClick={() => setModal(!modal)}>
              SERVICES{" "}
              <img
                className="mt-[10px]"
                style={{
                  transform: `${modal ? "rotate(-360deg)" : "rotate(-180deg)"}`,
                }}
                src="/strelka.png"
                alt=""
              />
            </div>
            {/* </Link> */}
            {modal && (
              <div>
                <Link href={`/services/`}>
                  <div
                    className="burger__link font-medium text-base ml-14"
                    onClick={() => {
                      setBurger(false);
                    }}>
                    All services
                  </div>
                </Link>
                {/* {services?.results.length === 0
                  ? ""
                  : services?.results.map(
                      (item: Service) =>
                        item.main_menu && (
                          <Link
                            href={`/services/${item.slug}/${
                              specLoc?.id
                            }/${specLoc?.location_name.replace(/%| /g, "_")}`}
                            key={item.id}>
                            <div
                              onClick={() => {
                                setBurger(false);
                              }}
                              className="burger__link font-medium text-base ml-14">
                              {item.name}
                            </div>
                          </Link>
                        )
                    )} */}
                {locations?.results?.length === 0 ||
                services?.results?.length === 0
                  ? ""
                  : locations?.results?.map((locat: any) =>
                      services?.results?.map(
                        (item: Service) =>
                          item.main_menu && (
                            <Link
                              href={`/services/${item.slug}/${
                                locat?.id
                              }/${locat?.location_name?.replace(/%| /g, "_")}`}
                              key={item.id}
                              className={
                                specLoc.location_name !== locat?.location_name
                                  ? `hidden invisible`
                                  : "flex"
                              }>
                              <li
                                className="burger__link font-medium text-base ml-14"
                                onClick={() => {
                                  setBurger(false);
                                }}>
                                {item.name}
                              </li>
                            </Link>
                          )
                      )
                    )}
              </div>
            )}

            <Link href="/reviews">
              <div
                className="burger__link"
                onClick={() => {
                  setBurger(false);
                }}>
                REVIEWS
              </div>
            </Link>

            <Link href="/blog">
              <div
                className="burger__link"
                onClick={() => {
                  setBurger(false);
                }}>
                BLOG
              </div>
            </Link>

            <Link href="/photos">
              <div
                className="burger__link"
                onClick={() => {
                  setBurger(false);
                }}>
                PROJECT PHOTOS
              </div>
            </Link>

            <Link href="/book">
              <button
                className="book_btn ml-10 mt-5"
                onClick={() => {
                  setBurger(false);
                }}>
                Book online now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex md:hidden content ">
          <div className="flex w-full justify-between mt-4">
            <Link
              style={{ color: "#F2994A" }}
              className="font-semibold text-xs locat_link"
              href={`/location/${specLoc?.location_name?.replace(
                /%| /g,
                "_"
              )}`}>
              {/* {location
                ? `${location?.location_name}, ${location?.state.name}`
                : JSON.stringify(currentLocation) !== "{}"
                ? `${currentLocation?.currentLocation_name} ${currentLocation?.state.name}`
                : ""} */}
              {specLoc && `${specLoc?.location_name}, ${specLoc?.state.name}`}
            </Link>
            <a className="font-semibold text-xs" href="tel: +1 818 858 15 33">
              +1 818 858 15 33
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
