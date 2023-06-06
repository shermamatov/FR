"use client";
import { fetchReviews } from "@/api";
import Link from "next/link";
import { use } from "react";
// import Slider from "react-slick";
import "./block7.scss";
import rating from "./rating.svg";
// import Image from "next/image";
import img1 from "./image1.webp";
import img3 from "./img3.webp";

export default function HomeBlock7() {
    const reviews = use(fetchReviews());
    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1208,
                settings: {
                    slidesToShow: 2, // на экранах меньше 768px показываем 2 слайда
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // на экранах меньше 768px показываем 2 слайда
                },
            },
        ],
        slidesToScroll: 1,
        adaptiveHeight: true,
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
        pauseOnHover: true,
        onContextMenu: (e: any) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        },
    };

    return (
        <div className="block7_main">
            <div className="content">
                <h1>Words From Customers</h1>
                <div className="text_review"></div>
                <div className="video_review">
                    <div className="video_left"></div>
                </div>
            </div>
        </div>
    );
}
