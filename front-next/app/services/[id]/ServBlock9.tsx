"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import rating from "@/assets/block7_rating.png";
import img1 from "@/assets/block7_img1.webp";
import img3 from "@/assets/block7_img3.webp";
import "./ServBlock9.scss";
import Image from "next/image";
const ServBlock9 = ({ reviews }: any) => {
    const [videoReviews, setVideoReviews] = useState([]);
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
        // onContextMenu: (e) => {
        //     e.preventDefault();
        //     e.stopPropagation();
        //     return false;
        // },
    };
    useEffect(() => {
        // if (reviews.length >= 5) {
        //     let list = [];
        //     for (let i = 1; i < 5; i++) {
        //         list = [...list, reviews[i]];
        //     }
        //     setVideoReviews(list);
        // } else if (reviews.length > 1) {
        //     let list = [];
        //     for (let i = 1; i <= reviews.length; i++) {
        //         list = [...list, reviews[i]];
        //     }
        //     setVideoReviews(list);
        // }
        setVideoReviews(reviews.results.slice(1, 5));
    }, [reviews]);
    console.log(reviews);

    return (
        <div className="block7_main mb-20">
            <div className="content">
                <h1>Words From Customers</h1>
                <div className="text_review">
                    <Slider {...settings}>
                        {reviews.results.map((item: any) => (
                            <div className="text_review_block" key={item.id}>
                                <p>
                                    {item.review_text.length > 150
                                        ? item.review_text.slice(0, 147) + "..."
                                        : item.review_text}
                                </p>
                                <div>
                                    <h5>{item.name}</h5>
                                    <div>
                                        <Image src={rating} alt="" />
                                        <p>{item.stars}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="video_review_adap">
                    <Slider {...settings}>
                        {reviews.results.map((item: any) => (
                            <div
                                className="video_review_block_adap"
                                key={item.id}
                            >
                                <Image
                                    width={100}
                                    height={100}
                                    src={item.image1 ? item.image1 : img1}
                                    alt=""
                                />
                                <h5>{item.name}</h5>
                                <div>
                                    <Image src={rating} alt="" />
                                    <p>{item.stars}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="video_review">
                    <div className="video_left">
                        <div className="video_left_block">
                            {reviews && reviews.results.length > 0 ? (
                                <>
                                    <Image
                                        width={100}
                                        height={100}
                                        src={
                                            reviews.results[0].image1
                                                ? reviews.results[0].image1
                                                : img1
                                        }
                                        alt=""
                                    />
                                    <h5>{reviews.results[0].name}</h5>
                                    <div>
                                        <Image src={rating} alt="" />
                                        <p>{reviews.results[0].stars}</p>
                                    </div>
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>

                    <div className="video_right">
                        {videoReviews.map((item: any) => {
                            return (
                                <div key={item.id} className="video_left_block">
                                    <Image
                                        width={100}
                                        height={100}
                                        src={item.image1 ? item.image1 : img3}
                                        alt=""
                                    />
                                    <h5>{item.name}</h5>
                                    <div>
                                        <Image src={rating} alt="" />
                                        <p>{item.stars}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServBlock9;
