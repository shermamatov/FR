import "./ReviewsWritePopup.scss";
import reviewStar from "../../../img/review-star.svg";
import { useState } from "react";
import WriteForm from './WriteForm';
import VideoForm from './VideoForm';
import logo from '../../../../../images/navLogo.png';
import {useNavigate} from 'react-router-dom';


const ReviewsWritePopup = ({ showPopup, setShowPopup }) => {
  const [formSelector, setFormSelector] = useState("write");
  const navigate = useNavigate();
  return (
    <div
      className={
        showPopup
          ? "reviewsWritePopup reviewsWritePopup-show"
          : "reviewsWritePopup"
      }
    >
      <div
        className={showPopup ? "reviewsWritePopup_left" : ""}
        onClick={() => {
          setShowPopup(false);
        }}
      ></div>
      <div className="reviewsWritePopup_right">
        <div className="reviewsWritePopup_header">
          <button
          onClick={() => {
            setShowPopup(false);
            navigate('/')
          }}
          className="reviewsWritePopup_logo">
            <img src={logo} alt="" />
          </button>
          <h1 className="reviewsWritePopup_title">Write a review</h1>

          <div className="reviewsWritePopup_header_right">
            <button onClick={()=>{
                setFormSelector('write')
            }} className={formSelector === 'write'
            ? 'reviewsWritePopup_header_btn reviewsWritePopup_header_btn-active'
            : 'reviewsWritePopup_header_btn'}>review</button>
            <button onClick={()=>{
                setFormSelector('video')
            }}  className={formSelector === 'video'
            ? 'reviewsWritePopup_header_btn reviewsWritePopup_header_btn-active'
            : 'reviewsWritePopup_header_btn'}>
              Video review
            </button>
          </div>

          <button
           onClick={() => {
            setShowPopup(false);
          }}
          className="reviewsWritePopup_header_closeBtn">X</button>
        </div>

        <div className="reviewsWritePopup_name">
          <h2 className="reviewsWritePopup_name_title">Full Name</h2>
          <input
            type="text"
            placeholder="Enter your full name"
            className="reviewsWritePopup_name_input"
          />
        </div>

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
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
            </div>
          </div>
          <div className="reviewsWritePopup_productRating_item">
            <p className="reviewsWritePopup_productRating_item_text">Quality</p>
            <div className="reviewsWritePopup_productRating_item_right">
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
            </div>
          </div>
          <div className="reviewsWritePopup_productRating_item">
            <p className="reviewsWritePopup_productRating_item_text">
              Performance
            </p>
            <div className="reviewsWritePopup_productRating_item_right">
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
            </div>
          </div>
          <div className="reviewsWritePopup_productRating_item">
            <p className="reviewsWritePopup_productRating_item_text">Value</p>
            <div className="reviewsWritePopup_productRating_item_right">
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
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
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
              <button>
                <img src={reviewStar} alt="" />
              </button>
            </div>
          </div>
        </div>

{
    formSelector === 'write'
    ? <WriteForm />
    : <VideoForm />
}

<button className="reviewsWritePopup_submitBtn">Submit  review</button>
      </div>
    </div>
  );
};

export default ReviewsWritePopup;
