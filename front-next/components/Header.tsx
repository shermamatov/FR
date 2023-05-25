"use client";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import logo from "@/assets/navLogo.png";
import strela from "@/assets/strelka.png";
import menuIcon from "@/assets/menu.png";

import "./Header.scss";
import { fetchServices } from "@/api";
const Header = () => {
    const services = use(fetchServices());
    const [burger, setBurger] = useState(false);
    const [modal, setModal] = useState(false);
    const [width, setWidth] = useState(1200);
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <header>
                <div className="upNavbar">
                    <div className="content">
                        <p>
                            73 Canal Street, California, LA
                            <Link href="/location">
                                <span className="upn_change">change</span>
                            </Link>
                        </p>
                        <h3>
                            <span>20%</span> Todays special Deal in your city
                        </h3>
                    </div>
                </div>
                {/* <div className="content pl-40 relative">
                    <Link href="/">
                        <Image
                            src={logo}
                            width={188}
                            height={160}
                            alt="logo"
                            className="absolute left-8 -z-10"
                        />
                    </Link>
                    <div className="header-content">
                        <nav>
                            <a href="/about-us">About us</a>
                            <a href="/services">Services</a>
                            <a href="/reviews">Reviews</a>
                            <a href="/blog">Blog</a>
                            <a href="/photos">Project photos</a>
                        </nav>
                        <div className="flex gap-4">
                            <a href="tel:+18188881010" className="phone">
                                +1-818-888-10-10
                            </a>
                            <Link href="/book" className="btn">
                                Book online now
                            </Link>
                        </div>
                    </div>
                </div> */}
                <div className="navbar content">
                    <div className="navbar_left_block">
                        <Image
                            src={logo}
                            style={{ cursor: "pointer" }}
                            alt=""
                        />
                    </div>
                    <div
                        className="navbar_right_block"
                        // onMouseLeave={() => setModal(false)}
                    >
                        <div className="adap_logo_block">
                            <Link href="/">
                                <Image src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="navbar_navigate">
                            <Link href="/about_us">
                                <div
                                    className="has__border"
                                    onMouseLeave={() => setModal(false)}
                                >
                                    ABOUT US
                                    <div
                                        className="linia"
                                        // style={{
                                        //     width: `${
                                        //         pathname == "/AboutUs" ? "50%" : "0%"
                                        //     }`,
                                        // }}
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
                                    onMouseLeave={() => setModal(false)}
                                >
                                    <p className="serv">SERVICES </p>
                                    <Image
                                        style={{
                                            transform: `${
                                                modal
                                                    ? "rotate(-360deg)"
                                                    : "rotate(-180deg)"
                                            }`,
                                        }}
                                        src={strela}
                                        alt=""
                                    />
                                </div>
                            </Link>

                            <Link href="/reviews">
                                <div
                                    className="has__border"
                                    onMouseLeave={() => setModal(false)}
                                >
                                    REVIEWS
                                    <div
                                        className="linia"
                                        // style={{
                                        //     width: `${
                                        //         pathname == "/reviews" ? "50%" : "0%"
                                        //     }`,
                                        // }}
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
                                        // style={{
                                        //     width: `${
                                        //         pathname == "/blog" ? "50%" : "0%"
                                        //     }`,
                                        // }}
                                    ></div>
                                </div>
                            </Link>

                            <Link href="/photos">
                                <div onMouseLeave={() => setModal(false)}>
                                    PROJECT PHOTOS
                                    <div
                                        className="linia"
                                        // style={{
                                        //     width: `${
                                        //         pathname == "/photos" ? "50%" : "0%"
                                        //     }`,
                                        // }}
                                    ></div>
                                </div>
                            </Link>
                            {/* <NavbarModal setModal={setModal} modal={modal} /> */}
                            {/* <div
                                onMouseOver={() => setModal(true)}
                                onMouseLeave={() => setModal(false)}
                                className="nav_modal"
                                style={{
                                    display: `${modal ? "flex" : "none"}`,
                                }}
                            >
                                {services.results.length === 0
                                    ? ""
                                    : services.results.map((item) => (
                                          <ul key={item.id}>
                                              <Link
                                                  href={`/services/${item.slug}`}
                                              >
                                                  <li>{item.name}</li>
                                              </Link>
                                          </ul>
                                      ))}
                            </div> */}
                        </div>
                        <div className={"right_block_buttons"}>
                            <button className="number_btn">
                                <a href="tel: +1 818 858 15 33">
                                    +1 818 858 15 33
                                </a>
                            </button>
                            <Link href="/book_now">
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
                            <Image src={menuIcon} alt="" />
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
                        <Link href="/about_us">
                            <div className="burger__link">ABOUT US</div>
                        </Link>
                        <Link href="/services">
                            {" "}
                            <div className="burger__link serv">SERVICES </div>
                        </Link>
                        <Link href="/reviews">
                            <div className="burger__link">REVIEWS</div>
                        </Link>
                        <Link href="/blog">
                            <div className="burger__link">BLOG</div>
                        </Link>
                        <Link href="/photos">
                            <div className="burger__link">PROJECT PHOTOS</div>
                        </Link>

                        <Link href="/book_now">
                            <button className="book_btn">
                                Book online now
                            </button>
                        </Link>
                    </div>
                </div>
                {/* <div className={width >= 769 ? "d-none" : "navbar"}>
                    <div className="d-flex">
                        <Link href={"/location"}>
                            73 Canal Street, California, LA
                        </Link>
                        <a href="tel:+18188881010">+1-818-888-10-10</a>
                    </div>
                </div> */}
            </header>
        </div>
    );
};

export default Header;
