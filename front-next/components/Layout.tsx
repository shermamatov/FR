"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/navLogo.png";
import { PropsWithChildren, use, useEffect, useState } from "react";
import { Location, getCurrentLocation } from "@/api";

interface LayoutProps extends PropsWithChildren {
    location?: boolean;
    className?: string;
}

export function Layout({ children, location = true, className }: LayoutProps) {
    const currLocation = use(getCurrentLocation());
    const [currLocat, setCurrLocat] = useState<Location>();
    useEffect(() => {
        if (localStorage.getItem("currentLocation")) {
            setCurrLocat(
                JSON.parse(localStorage.getItem("currentLocation") || "{}")
            );
        } else {
            setCurrLocat(currLocation);
        }
    }, []);
    console.log(currLocat);
    if (typeof window !== "undefined") {
        if (!localStorage.getItem("currentLocation")) {
            localStorage.setItem(
                "currentLocation",
                JSON.stringify(currLocation)
            );
        }
    }

    return (
        <>
            <header>
                <div className="bg-brown-200">
                    <div className="discount content items-center h-16 px-40">
                        <div className="flex gap-2 text-sm items-center">
                            <address>
                                {currLocation.location_name +
                                    " " +
                                    currLocation.state.name}
                            </address>
                            <Link href="/location">change</Link>
                        </div>
                        <p className="text-center text-brown-800 text-xl font-bold flex-shrink">
                            <span className="pr-4">20%</span> Todays special
                            Deal in your city
                        </p>
                    </div>
                </div>

                <div className="content pl-40 relative">
                    {/* TODO: Fix position */}
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
                </div>
            </header>
            <main className={className}>{children}</main>
            {location && (
                <section>
                    <h2 className="content mb-[23px] text-brown-800 text-center">
                        Project location
                    </h2>
                    <iframe
                        className="w-full"
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3024.0035599325865!2d-74.00071413419064!3d40.717938129331245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s73%20Canal%20Street%2C%20New%20York%2C%20Los!5e0!3m2!1sru!2skg!4v1680988403905!5m2!1sru!2skg"
                        height="543"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </section>
            )}
        </>
    );
}
