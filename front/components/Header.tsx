"use client";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
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
    getCurrentLocation,
} from "@/api";
import { usePathname } from "next/navigation";
import HeaderModal from "./HeaderModal";

const Header = () => {
    const pathname = usePathname();
    const [burger, setBurger] = useState(false);
    const [modal, setModal] = useState(false);
    const [currentLocation, setCurrentLocation] = useState<any>({});
    const [specialUrl, setSpecialUrl] = useState<any>();

    const [services, setServices] = useState<PaginationData<Service>>();
    const [location, setLocation] = useState<Location>();
    async function getData() {
        setServices(await fetchServices());
    }
    async function getLocat() {
        if (
            typeof window !== "undefined" &&
            window.localStorage &&
            localStorage.getItem("currentLocation")
        ) {
            setLocation(
                JSON.parse(localStorage.getItem("currentLocation") || "")
            );
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

    return (
        <div>
            <header>
                <div className="upNavbar">
                    <div className="content">
                        <p>
                            {location
                                ? `${location?.location_name}, ${location?.state.name}`
                                : JSON.stringify(currentLocation) !== "{}"
                                ? `${currentLocation?.currentLocation_name}, ${currentLocation?.state.name}`
                                : ""}
                            <Link href="/location" className="upn_change">
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
                            <img
                                src="/navLogo.png"
                                style={{ cursor: "pointer" }}
                                alt=""
                            />
                        </div>
                    </Link>
                    <div
                        className="navbar_right_block"
                        onMouseLeave={() => setModal(false)}
                    >
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
                                >
                                    ABOUT US
                                    <div
                                        className="linia"
                                        style={{
                                            width: `${
                                                pathname == "/about"
                                                    ? "50%"
                                                    : "0%"
                                            }`,
                                        }}
                                    ></div>
                                </div>
                            </Link>

                            <Link href="/services">
                                <div
                                    className="has__border serv "
                                    onMouseOver={(e) => {
                                        setModal(true);
                                        e.stopPropagation();
                                    }}
                                    // onMouseLeave={() => setModal(false)}
                                >
                                    <p className="serv">SERVICES</p>
                                    <img
                                        style={{
                                            transform: `${
                                                modal
                                                    ? "rotate(-360deg)"
                                                    : "rotate(-180deg)"
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
                                >
                                    REVIEWS
                                    <div
                                        className="linia"
                                        style={{
                                            width: `${
                                                pathname == "/reviews"
                                                    ? "50%"
                                                    : "0%"
                                            }`,
                                        }}
                                    ></div>
                                </div>
                            </Link>

                            <Link href="/blog">
                                <div
                                    className="has__border"
                                    onMouseLeave={() => setModal(false)}
                                >
                                    BLOG
                                    <div
                                        className="linia"
                                        style={{
                                            width: `${
                                                pathname == "/blog"
                                                    ? "50%"
                                                    : "0%"
                                            }`,
                                        }}
                                    ></div>
                                </div>
                            </Link>

                            <Link href="/photos">
                                <div onMouseLeave={() => setModal(false)}>
                                    PROJECT PHOTOS
                                    <div
                                        className="linia"
                                        style={{
                                            width: `${
                                                pathname == "/photos"
                                                    ? "50%"
                                                    : "0%"
                                            }`,
                                        }}
                                    ></div>
                                </div>
                            </Link>
                            {/* <NavbarModal setModal={setModal} modal={modal} /> */}
                            {
                                <HeaderModal
                                    modal={modal}
                                    setModal={setModal}
                                    services={services}
                                    location={location}
                                />
                            }
                        </div>
                        <div className={"right_block_buttons"}>
                            <button className="number_btn">
                                <a href="tel: +1 818 858 15 33">
                                    +1 818 858 15 33
                                </a>
                            </button>
                            <Link href="/book">
                                <button className="book_btn">
                                    Book online now
                                </button>
                            </Link>
                        </div>
                        <div
                            onClick={() => {
                                setBurger(true);
                            }}
                            className="menu_block"
                        >
                            <img src="/menu.png" alt="" />
                        </div>
                    </div>
                </div>
                <div
                    className={
                        burger === false
                            ? "burger__menu"
                            : "burger__menu burger__menu--active"
                    }
                >
                    <div className="exit">
                        <button
                            onClick={() => {
                                setBurger(false);
                            }}
                        >
                            <span>&#128473;</span>
                        </button>
                    </div>
                    <div className="navbar_burger">
                        <Link href="/about">
                            <div className="burger__link">ABOUT US</div>
                        </Link>

                        {/* <Link href=""> */}
                        <div
                            className="burger__link serv"
                            onClick={() => setModal(!modal)}
                        >
                            SERVICES{" "}
                            <img
                                className="mt-[10px]"
                                style={{
                                    transform: `${
                                        modal
                                            ? "rotate(-360deg)"
                                            : "rotate(-180deg)"
                                    }`,
                                }}
                                src="/strelka.png"
                                alt=""
                            />
                        </div>
                        {/* </Link> */}
                        {modal && (
                            <div>
                                <Link href={`/services/`}>
                                    <div className="burger__link font-medium text-base ml-14">
                                        main services
                                    </div>
                                </Link>
                                {services?.results.length === 0
                                    ? ""
                                    : services?.results.map(
                                          (item: Service) =>
                                              item.main_menu && (
                                                  <Link
                                                      href={`/services/${
                                                          item.slug
                                                      }/${
                                                          location?.id
                                                      }/${location?.location_name.replace(
                                                          /%| /g,
                                                          "_"
                                                      )}`}
                                                      key={item.id}
                                                  >
                                                      <div className="burger__link font-medium text-base ml-14">
                                                          {item.name}
                                                      </div>
                                                  </Link>
                                              )
                                      )}
                            </div>
                        )}

                        <Link href="/reviews">
                            <div className="burger__link">REVIEWS</div>
                        </Link>

                        <Link href="/blog">
                            <div className="burger__link">BLOG</div>
                        </Link>

                        <Link href="/photos">
                            <div className="burger__link">PROJECT PHOTOS</div>
                        </Link>

                        <Link href="/book">
                            <button className="book_btn ml-10 mt-5">
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
                            href={"/location"}
                        >
                            {location
                                ? `${location?.location_name}, ${location?.state.name}`
                                : JSON.stringify(currentLocation) !== "{}"
                                ? `${currentLocation?.currentLocation_name} ${currentLocation?.state.name}`
                                : ""}
                        </Link>
                        <a
                            className="font-semibold text-xs"
                            href="tel: +1 818 858 15 33"
                        >
                            +1 818 858 15 33
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
