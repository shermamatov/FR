"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import rating from "@/assets/block7_rating.png";
import img1 from "@/assets/block7_img1.webp";
import img3 from "@/assets/block7_img3.webp";
import "./ServBlock9.scss";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";

const ServBlock9 = ({ reviews }: any) => {
    const [videoReviews, setVideoReviews] = useState([]);
    const [textState, setTextState] = useState(false);
    const [review, setReview] = useState<any>();
    const [modal, setModal] = useState(false);
    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
            color: "#f2994a",
        },
        "& .MuiRating-iconHover": {
            color: "#ff3d47",
        },
    });

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5.5,
        responsive: [
            {
                breakpoint: 2200,
                settings: {
                    slidesToShow: 4.5, // на экранах меньше 768px показываем 2 слайда
                },
            },
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3.5, // на экранах меньше 768px показываем 2 слайда
                },
            },
            {
                breakpoint: 1208,
                settings: {
                    slidesToShow: 2, // на экранах меньше 768px показываем 2 слайда
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1, // на экранах меньше 768px показываем 2 слайда
                },
            },
        ],
        slidesToScroll: 0.5,
        adaptiveHeight: true,
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
        pauseOnHover: true,
        cssEase: "linear",
    };
    const settings2 = {
        className: "center",
        centerMode: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        responsive: [
            {
                breakpoint: 1208,
                settings: {
                    slidesToShow: 2, // на экранах меньше 768px показываем 2 слайда
                },
            },
            {
                breakpoint: 668,
                settings: {
                    slidesToShow: 1.5, // на экранах меньше 768px показываем 2 слайда
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1, // на экранах меньше 768px показываем 2 слайда
                    centerMode: false,
                },
            },
        ],
        slidesToScroll: 0.5,
        adaptiveHeight: true,
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
        pauseOnHover: true,
        cssEase: "linear",
    };
    useEffect(() => {
        setVideoReviews(reviews.results.slice(1, 5));
    }, [reviews]);
    function openReviewModal(item: any) {
        setModal(true);
        setReview(item);
    }
    function closeReviewModal() {
        setModal(false);
        setReview(null);
    }
    return (
        <div className="block7_main mb-20">
            <div className="">
                <h1>Words From Customers</h1>
                <div className="text_review ">
                    <Slider {...settings}>
                        {reviews.results.map((item: any) => (
                            <div className="text_review_block" key={item.id}>
                                <p onClick={() => setTextState(!textState)}>
                                    {item.review_text.length > 150 && !textState
                                        ? item.review_text.slice(0, 147) + "..."
                                        : item.review_text}
                                </p>
                                <div>
                                    <h5>{item.name}</h5>
                                    <div>
                                        <StyledRating
                                            name="read-only"
                                            value={item.stars}
                                            readOnly
                                            precision={0.5}
                                            sx={{
                                                fontSize: "30px",
                                            }}
                                            icon={
                                                <StarIcon
                                                    sx={{ color: "white" }}
                                                    fontSize="inherit"
                                                />
                                            }
                                            emptyIcon={
                                                <StarOutlineOutlinedIcon
                                                    sx={{ color: "white" }}
                                                    fontSize="inherit"
                                                />
                                            }
                                        />
                                        <p>{item.stars}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="video_review_adap">
                    <Slider {...settings2}>
                        {reviews.results.map((item: any) => (
                            <div key={item.id}>
                                <div className="video_review_block_adap">
                                    <div>
                                        <video>
                                            <source
                                                src={`${
                                                    item.video ||
                                                    "/altVideo.mp4"
                                                }`}
                                                type="video/mp4"
                                            />
                                            <source
                                                src={`${
                                                    item.video ||
                                                    "/altVideo.mp4"
                                                }`}
                                                type="video/ogg"
                                            />
                                            Your browser does not support the
                                            video tag.
                                        </video>
                                        <button
                                            className="video_left_block_btn z-10"
                                            onClick={() =>
                                                openReviewModal(item)
                                            }
                                        >
                                            Play video
                                        </button>
                                    </div>
                                    <h5>{item.name}</h5>
                                    <div>
                                        {/* <Image src={rating} alt="" /> */}
                                        <StyledRating
                                            name="read-only"
                                            value={item.stars}
                                            readOnly
                                            precision={0.5}
                                            sx={{
                                                fontSize: "30px",
                                            }}
                                            icon={
                                                <StarIcon
                                                    sx={{ color: "white" }}
                                                    fontSize="inherit"
                                                />
                                            }
                                            emptyIcon={
                                                <StarOutlineOutlinedIcon
                                                    sx={{ color: "white" }}
                                                    fontSize="inherit"
                                                />
                                            }
                                        />
                                        <p>{item.stars}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {modal && (
                    <div className="block9_modal" onClick={closeReviewModal}>
                        <div
                            className="relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                className="block9_modal_close"
                                onClick={closeReviewModal}
                                src="/close_icon.svg"
                                alt=""
                            />
                            {/* <h3>Beverly Hills</h3> */}
                            <h2>{review.name}</h2>
                            <div
                                className="reviewsBlock9_card_raiting_icons"
                                style={{
                                    marginLeft: "-5px",
                                }}
                            >
                                <StyledRating
                                    name="read-only"
                                    value={review.stars}
                                    readOnly
                                    precision={0.5}
                                    sx={{
                                        fontSize: "30px",
                                    }}
                                />
                            </div>

                            <video className="reviewsBlock9_card_img" controls>
                                <source
                                    src={`${review.video || "/altVideo.mp4"}`}
                                    type="video/mp4"
                                />
                                <source
                                    src={`${review.video || "/altVideo.mp4"}`}
                                    type="video/ogg"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )}

                <div className="video_review content">
                    <div className="video_left">
                        <div className="video_left_block">
                            {reviews && reviews.results.length > 0 ? (
                                <>
                                    {/* <Image
                                        width={100}
                                        height={100}
                                        src={
                                            reviews.results[0].image1
                                                ? reviews.results[0].image1
                                                : img3
                                        }
                                        alt=""
                                        unoptimized
                                    /> */}
                                    <div>
                                        <video>
                                            <source
                                                src={`${
                                                    reviews.results[0].video ||
                                                    "/altVideo.mp4"
                                                }`}
                                                type="video/mp4"
                                            />
                                            <source
                                                src={`${
                                                    reviews.results[0].video ||
                                                    "/altVideo.mp4"
                                                }`}
                                                type="video/ogg"
                                            />
                                            Your browser does not support the
                                            video tag.
                                        </video>
                                        <button
                                            className="video_left_block_btn z-10"
                                            onClick={() =>
                                                openReviewModal(
                                                    reviews.results[0]
                                                )
                                            }
                                        >
                                            Play video
                                        </button>
                                    </div>
                                    <h5>{reviews.results[0].name}</h5>
                                    <div>
                                        {/* <Image src={rating} alt="" /> */}
                                        <StyledRating
                                            name="read-only"
                                            value={reviews.results[0].stars}
                                            readOnly
                                            precision={0.5}
                                            sx={{
                                                fontSize: "24px",
                                            }}
                                            icon={
                                                <StarIcon
                                                    sx={{ color: "white" }}
                                                    fontSize="inherit"
                                                />
                                            }
                                            emptyIcon={
                                                <StarOutlineOutlinedIcon
                                                    sx={{ color: "white" }}
                                                    fontSize="inherit"
                                                />
                                            }
                                        />
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
                                <div key={item.id}>
                                    <div className="video_left_block relative">
                                        {/* <Image
                                        width={100}
                                        height={100}
                                        src={item.image1 ? item.image1 : img3}
                                        alt=""
                                        unoptimized
                                    /> */}
                                        <div>
                                            <video>
                                                <source
                                                    src={`${
                                                        item.video ||
                                                        "/altVideo.mp4"
                                                    }`}
                                                    type="video/mp4"
                                                />
                                                <source
                                                    src={`${
                                                        item.video ||
                                                        "/altVideo.mp4"
                                                    }`}
                                                    type="video/ogg"
                                                />
                                                Your browser does not support
                                                the video tag.
                                            </video>
                                            <button
                                                className="video_left_block_btn z-10"
                                                onClick={() =>
                                                    openReviewModal(item)
                                                }
                                            >
                                                Play video
                                            </button>
                                        </div>

                                        <h5>{item.name}</h5>
                                        <div>
                                            {/* <Image src={rating} alt="" /> */}
                                            <StyledRating
                                                name="read-only"
                                                value={item.stars}
                                                readOnly
                                                precision={0.5}
                                                sx={{
                                                    fontSize: "24px",
                                                }}
                                                icon={
                                                    <StarIcon
                                                        sx={{ color: "white" }}
                                                        fontSize="inherit"
                                                    />
                                                }
                                                emptyIcon={
                                                    <StarOutlineOutlinedIcon
                                                        sx={{ color: "white" }}
                                                        fontSize="inherit"
                                                    />
                                                }
                                            />
                                            <p>{item.stars}</p>
                                        </div>
                                    </div>
                                    {modal && (
                                        <div
                                            className="block9_modal"
                                            onClick={closeReviewModal}
                                        >
                                            <div
                                                className="relative"
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                <img
                                                    className="block9_modal_close"
                                                    onClick={closeReviewModal}
                                                    src="/close_icon.svg"
                                                    alt=""
                                                />

                                                {/* <h3>Beverly Hills</h3> */}
                                                <h2>{review.name}</h2>
                                                <div
                                                    className="reviewsBlock9_card_raiting_icons"
                                                    style={{
                                                        marginLeft: "-5px",
                                                    }}
                                                >
                                                    <StyledRating
                                                        name="read-only"
                                                        value={review.stars}
                                                        readOnly
                                                        precision={0.5}
                                                        sx={{
                                                            fontSize: "30px",
                                                        }}
                                                    />
                                                </div>

                                                <video
                                                    className="reviewsBlock9_card_img"
                                                    controls
                                                >
                                                    <source
                                                        src={`${
                                                            review.video ||
                                                            "/altVideo.mp4"
                                                        }`}
                                                        type="video/mp4"
                                                    />
                                                    <source
                                                        src={`${
                                                            review.video ||
                                                            "/altVideo.mp4"
                                                        }`}
                                                        type="video/ogg"
                                                    />
                                                    Your browser does not
                                                    support the video tag.
                                                </video>
                                            </div>
                                        </div>
                                    )}
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
