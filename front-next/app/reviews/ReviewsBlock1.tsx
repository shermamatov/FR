"use client";
import Image from "next/image";
import starIcon from "./img/star-icon.svg";
import circleImg from "./img/circle-img.svg";
import bigImg from "./img/bg.jpg";
import ReviewsWritePopup from "./ReviewsPopup/ReviewsWritePopup/ReviewsWritePopup";
import { PaginationData, Service } from "@/api";

export default function ReviewsBlock1({ services }: any) {
    function showReviewsWritePopup() {
        let popup: any = document.getElementById("reviewsWritePopup");
        popup.className += " reviewsWritePopup-show";
    }

    return (
        <div className="reviewsBlock1">
            <ReviewsWritePopup services={services} />
            <div className="content">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <h1 className="reviewsBlock1_subtitle">Review</h1>
                        <h2
                            className="text-3xl sm:text-5xl
                        "
                        >
                            Overall Rating from 129 Reviews
                        </h2>
                        <div className="reviewsBlock1_stars">
                            <div className="reviewsBlock1_stars_icon">
                                <Image className="w-7" src={starIcon} alt="" />
                                <Image className="w-7" src={starIcon} alt="" />
                                <Image className="w-7" src={starIcon} alt="" />
                                <Image className="w-7" src={starIcon} alt="" />
                                <Image className="w-7" src={starIcon} alt="" />
                            </div>
                            <h4 className="reviewsBlock1_stars_count">
                                5.0/4.7
                            </h4>
                        </div>
                        <p className="reviewsBlock1_text">
                            95% of clients recommend us
                        </p>
                        <div className="reviewsBlock1_raiting">
                            <div className="reviewsBlock1_raiting_item">
                                <p className="reviewsBlock1_raiting_item_left">
                                    5 star
                                </p>
                                <div className="reviewsBlock1_raiting_item_line"></div>
                                <p className="reviewsBlock1_raiting_item_right">
                                    (120)
                                </p>
                            </div>

                            <div className="reviewsBlock1_raiting_item">
                                <p className="reviewsBlock1_raiting_item_left">
                                    4 star
                                </p>
                                <div className="reviewsBlock1_raiting_item_line"></div>
                                <p className="reviewsBlock1_raiting_item_right">
                                    (0)
                                </p>
                            </div>

                            <div className="reviewsBlock1_raiting_item">
                                <p className="reviewsBlock1_raiting_item_left">
                                    3 star
                                </p>
                                <div className="reviewsBlock1_raiting_item_line"></div>
                                <p className="reviewsBlock1_raiting_item_right">
                                    (0)
                                </p>
                            </div>

                            <div className="reviewsBlock1_raiting_item">
                                <p className="reviewsBlock1_raiting_item_left">
                                    2 star
                                </p>
                                <div className="reviewsBlock1_raiting_item_line"></div>
                                <p className="reviewsBlock1_raiting_item_right">
                                    (0)
                                </p>
                            </div>

                            <div className="reviewsBlock1_raiting_item">
                                <p className="reviewsBlock1_raiting_item_left">
                                    1 star
                                </p>
                                <div className="reviewsBlock1_raiting_item_line"></div>
                                <p className="reviewsBlock1_raiting_item_right">
                                    (0)
                                </p>
                            </div>
                        </div>

                        <button
                            className="reviewsBlock1_btn"
                            id="reviewsBlock1_btn"
                            onClick={() => showReviewsWritePopup()}
                        >
                            Write review
                        </button>
                    </div>

                    <div className="reviewsBlock1_images hidden md:block">
                        <Image
                            src={circleImg}
                            className="reviewsBlock1_circleImg"
                            alt=""
                        />
                        <Image
                            src={bigImg}
                            className="reviewsBlock1_bigImg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
