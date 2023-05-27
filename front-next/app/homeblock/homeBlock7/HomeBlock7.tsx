'use client'
import { fetchReviews } from '@/api';
import Link from 'next/link';
import { use} from 'react';
import Slider from "react-slick";
import './block7.scss';
import rating from './rating.svg';
import Image from 'next/image';
import img1 from './image1.webp';
import img3 from './img3.webp';

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
        onContextMenu: (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        },
    };


    return (
        <div className="block7_main">
            <div className="content">
                <h1>Words From Customers</h1>
                <div className="text_review">
                    <Slider {...settings}>
                        {reviews.results.map((item) => (
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
                {/* <div className="video_review_adap">
                    <Slider {...settings}>
                        {reviews.results.map((item) => (
                            <div className="video_review_block_adap" key={item.id}>
                                <Image
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
                </div> */}
                <div className="video_review">
                    <div className="video_left">
                        {/* <div className="video_left_block">
                            {reviews && reviews.results.length > 0 ? (
                                <>
                                    <Image
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
                        </div> */}
                    </div>

                    {/* <div className="video_right">
                    {videoReviews.map((item) => {
                        return (
                            <div key={item.id} className="video_left_block">
                                <Image
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
                </div> */}
                </div>
            </div>
        </div>
    )
}
