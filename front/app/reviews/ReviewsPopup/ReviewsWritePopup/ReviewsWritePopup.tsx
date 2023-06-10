"use client";
import "./ReviewsWritePopup.scss";
import WriteForm from "./WriteForm";
import VideoForm from "./VideoForm";
import logo from "../../img/logo.svg";
import Image from "next/image";
import { use, useState } from "react";
import axios from "axios";

const ReviewsWritePopup = ({ services }: any) => {
    const [formSelector, setFormSelector] = useState("write");
    const [stars, setStars] = useState(0);
    const [name, setName] = useState("");
    const [review_text, setReview_text] = useState("");
    const [service, setService] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [video, setVideo] = useState({});
    const formData = new FormData();


  const submitReview = () => {
    switch(formSelector){
        case 'write':{
          if (name.trim() && review_text.trim() && stars && service && location) {
            setLoading(true);
            formData.set('name', name);
            formData.set('stars', stars);
            formData.set('review_text', review_text);
            formData.set('service', service);
            formData.set('location', location);
            formData.set('video', null);
            formData.set('image1', null);
            formData.set('image2', null);
            formData.set('phone', '');
            formData.set('email', '');
            axios
              .post("https://1furniturerestoration.com/api/review/", formData)
              .then((response) => {
                console.log(response);
                setMessage('Successfully');
              })
              .catch((error) =>{
                 console.log(error);
                 setMessage('An error has occurred. try again')
                }).finally(()=>{
                  setLoading(false)
                });
          }
          break
        }
        case 'video':{
          if (name.trim() && video.name && stars && service && location) {
            setLoading(true);
            formData.set('name', name);
            formData.set('stars', stars);
            formData.set('review_text', '');
            formData.set('service', service);
            formData.set('location', location);
            formData.set('video', video, video.name);
            formData.set('image1', null);
            formData.set('image2', null);
            formData.set('phone', '');
            formData.set('email', '');
            axios
              .post("https://1furniturerestoration.com/api/review/", formData)
              .then((response) => {
                console.log(response);
                setMessage('Successfully');
              })
              .catch((error) =>{
                 console.log(error);
                 setMessage('An error has occurred. try again')
                }).finally(()=>{
                  setLoading(false)
                });
          }
          break
        }
    }

  };

    function closeReviewsWritePopup() {
        let popup: any = document.getElementById("reviewsWritePopup");
        popup.className = "reviewsWritePopup";
    }

    return (
        <div className={"reviewsWritePopup"} id="reviewsWritePopup">
            <div
                onClick={() => closeReviewsWritePopup()}
                className="reviewsWritePopup_left"
            ></div>
            <div className="reviewsWritePopup_right">
                <div className="reviewsWritePopup_header">
                    <button
                        onClick={() => closeReviewsWritePopup()}
                        className="reviewsWritePopup_logo"
                    >
                        <img src="/logo.svg" alt="" />
                    </button>
                    <h1 className="reviewsWritePopup_title">Write a review</h1>

                    <div className="reviewsWritePopup_header_right">
                        <button
                            onClick={() => setFormSelector("write")}
                            className={
                                formSelector === "write"
                                    ? "reviewsWritePopup_header_btn reviewsWritePopup_header_btn-active"
                                    : "reviewsWritePopup_header_btn"
                            }
                        >
                            review
                        </button>
                        <button
                            onClick={() => setFormSelector("video")}
                            className={
                                formSelector === "video"
                                    ? "reviewsWritePopup_header_btn reviewsWritePopup_header_btn-active"
                                    : "reviewsWritePopup_header_btn"
                            }
                        >
                            Video review
                        </button>
                    </div>

                    <button
                        onClick={() => closeReviewsWritePopup()}
                        className="reviewsWritePopup_header_closeBtn"
                    >
                        X
                    </button>
                </div>

                <div className="reviewsWritePopup_name">
                    <h2 className="reviewsWritePopup_name_title">Full Name</h2>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="reviewsWritePopup_name_input"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>

                <select
                    onChange={(e) => setService(e.target.value)}
                    className="reviewsWritePopup_name_input"
                    defaultValue={"0"}
                >
                    <option disabled value="0">
                        select service
                    </option>
                    {services?.results.map((item: any) => {
                        return (
                            <option key={item.id} value={item.id}>
                                {item.title}
                            </option>
                        );
                    })}
                </select>

                <div className="reviewsWritePopup_productRating">
                    <h2 className="reviewsWritePopup_productRating_title">
                        Product Rating
                    </h2>

                    <div className="reviewsWritePopup_productRating_item">
                        <p className="reviewsWritePopup_productRating_item_text">
                            Features
                        </p>
                        <div className="reviewsWritePopup_productRating_item_right">
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="reviewsWritePopup_productRating_item">
                        <p className="reviewsWritePopup_productRating_item_text">
                            Quality
                        </p>
                        <div className="reviewsWritePopup_productRating_item_right">
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="reviewsWritePopup_productRating_item">
                        <p className="reviewsWritePopup_productRating_item_text">
                            Performance
                        </p>
                        <div className="reviewsWritePopup_productRating_item_right">
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="reviewsWritePopup_productRating_item">
                        <p className="reviewsWritePopup_productRating_item_text">
                            Value
                        </p>
                        <div className="reviewsWritePopup_productRating_item_right">
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button>
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="reviewsWritePopup_productRating">
                    <h2 className="reviewsWritePopup_productRating_title">
                        Overall Rating
                    </h2>
                    <p className="reviewsWritePopup_productRating_subtitle">
                        Determined by averaging the above Product Ratings
                    </p>

                    <div className="reviewsWritePopup_productRating_item">
                        <p className="reviewsWritePopup_productRating_item_text">
                            Features
                        </p>
                        <div className="reviewsWritePopup_productRating_item_right">
                            <button
                                className={stars > 0 ? "star_btn_point" : ""}
                                onClick={() => setStars(1)}
                            >
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button
                                className={stars > 1 ? "star_btn_point" : ""}
                                onClick={() => setStars(2)}
                            >
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button
                                className={stars > 2 ? "star_btn_point" : ""}
                                onClick={() => setStars(3)}
                            >
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button
                                className={stars > 3 ? "star_btn_point" : ""}
                                onClick={() => setStars(4)}
                            >
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                            <button
                                className={stars > 4 ? "star_btn_point" : ""}
                                onClick={() => setStars(5)}
                            >
                                <img src="/one-star-icon.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                {formSelector === "write" ? (
                    <WriteForm
                        review_text={review_text}
                        setReview_text={setReview_text}
                    />
                ) : (
                    <VideoFo-rm video={video} setVideo={setVideo}/>
                )}

                <p>{message}</p>

                <button
                    onClick={() => submitReview()}
                    className="reviewsWritePopup_submitBtn"
                >
                    Submit review
                </button>
            </div>
        </div>
    );
};

export default ReviewsWritePopup;
