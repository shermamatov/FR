import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./block7.scss";
import { otzv1, otzv2 } from "../../../../const/consts";
import rating from "../../../../images/block7_rating.png";
import img1 from "../../../../images/block7_img1.webp";
import img2 from "../../../../images/block7_img2.webp";
import img3 from "../../../../images/block7_img3.webp";
import { useChel } from "../../../../Contexts/ChelContext";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../../../redux/reducers/app";
const Block7 = () => {
    const dispatch = useDispatch();
    const reviews = useSelector((s) => s.app.reviews);
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
        onContextMenu: (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        },
    };
    const { addBordClass } = useChel();
    useEffect(() => {
        addBordClass();
        dispatch(getReviews());
    }, []);
    useEffect(() => {
        if (reviews.length >= 5) {
            let list = [];
            for (let i = 1; i < 5; i++) {
                list = [...list, reviews[i]];
            }
            setVideoReviews(list);
        } else if (reviews.length > 1) {
            let list = [];
            for (let i = 1; i <= reviews.length; i++) {
                list = [...list, reviews[i]];
            }
            setVideoReviews(list);
        }
    }, [reviews]);
    return (
        <div className="block7_main">
            <h1>Words From Customers</h1>
            <div className="text_review">
                <Slider {...settings}>
                    {reviews.map((item) => (
                        <div className="text_review_block" key={item.id}>
                            <p>
                                {item.review_text.length > 150
                                    ? item.review_text.slice(0, 147) + "..."
                                    : item.review_text}
                            </p>
                            <div>
                                <h5>{item.name}</h5>
                                <div>
                                    <img src={rating} alt="" />
                                    <p>{item.stars}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="video_review_adap">
                <Slider {...settings}>
                    {reviews.map((item) => (
                        <div className="video_review_block_adap" key={item.id}>
                            <img
                                src={item.image1 ? item.image1 : img1}
                                alt=""
                            />
                            <h5>{item.name}</h5>
                            <div>
                                <img src={rating} alt="" />
                                <p>{item.stars}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="video_review">
                <div className="video_left">
                    <div className="video_left_block">
                        {reviews && reviews.length > 0 ? (
                            <>
                                <img
                                    src={
                                        reviews[0].image1
                                            ? reviews[0].image1
                                            : img1
                                    }
                                    alt=""
                                />
                                <h5>{reviews[0].name}</h5>
                                <div>
                                    <img src={rating} alt="" />
                                    <p>{reviews[0].stars}</p>
                                </div>
                            </>
                        ) : (
                            ""
                        )}
                    </div>
                </div>

                <div className="video_right">
                    {videoReviews.map((item) => {
                        return (
                            <div key={item.id} className="video_left_block">
                                <img
                                    src={item.image1 ? item.image1 : img3}
                                    alt=""
                                />
                                <h5>{item.name}</h5>
                                <div>
                                    <img src={rating} alt="" />
                                    <p>{item.stars}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Block7;
