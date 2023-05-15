import "./ReviewsWritePopup.scss";
import reviewStar from "../../../img/review-star.svg";
import { useState } from "react";
import WriteForm from "./WriteForm";
import VideoForm from "./VideoForm";
import logo from "../../../../../images/navLogo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const ReviewsWritePopup = ({ showPopup, setShowPopup }) => {
  const navigate = useNavigate();
  const [formSelector, setFormSelector] = useState("write");
  const [stars, setStars] = useState(0);
  const [name, setName] = useState("");
  const [review_text, setReview_text] = useState("");
  const [service, setService] = useState(null);
  const [location, setLocation] = useState(null);
  const services = useSelector((s) => s.app.services);
  const locations = useSelector((s) => s.app.locations);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const submitReview = () => {
    if (name.trim() && review_text.trim() && stars && service && location) {
      setLoading(true);
      axios
        .post("https://itek-dev.highcat.org/api/review/", {
          name,
          stars,
          review_text,
          service,
          location,
          image1: null,
          image2: null,
          phone: "",
          email: ""
        })
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
  };

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
              navigate("/");
            }}
            className="reviewsWritePopup_logo"
          >
            <img src={logo} alt="" />
          </button>
          <h1 className="reviewsWritePopup_title">Write a review</h1>

          <div className="reviewsWritePopup_header_right">
            <button
              onClick={() => {
                setFormSelector("write");
              }}
              className={
                formSelector === "write"
                  ? "reviewsWritePopup_header_btn reviewsWritePopup_header_btn-active"
                  : "reviewsWritePopup_header_btn"
              }
            >
              review
            </button>
            <button
              onClick={() => {
                setFormSelector("video");
              }}
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
            onClick={() => {
              setShowPopup(false);
            }}
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
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>

<select onChange={e =>{
  setService(e.target.value)
}} className="reviewsWritePopup_name_input" defaultValue={'0'}>
  <option disabled value="0">select service</option>
  {
    services.map(item =>{
      return <option key={item.id} value={item.id}>{item.title}</option>
    })
  }
</select>

<select onChange={e =>{
  setLocation(e.target.value)
}} className="reviewsWritePopup_name_input" defaultValue={'0'}>
  <option disabled value="0">select location</option>
  {
    locations.map(item =>{
      return <option key={item.id} value={item.id}>{item.location_name}</option>
    })
  }
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
              <button
                className={stars > 0 ? "star_btn_point" : ""}
                onClick={() => {
                  setStars(1);
                }}
              >
                <img src={reviewStar} alt="" />
              </button>
              <button
                className={stars > 1 ? "star_btn_point" : ""}
                onClick={() => {
                  setStars(2);
                }}
              >
                <img src={reviewStar} alt="" />
              </button>
              <button
                className={stars > 2 ? "star_btn_point" : ""}
                onClick={() => {
                  setStars(3);
                }}
              >
                <img src={reviewStar} alt="" />
              </button>
              <button
                className={stars > 3 ? "star_btn_point" : ""}
                onClick={() => {
                  setStars(4);
                }}
              >
                <img src={reviewStar} alt="" />
              </button>
              <button
                className={stars > 4 ? "star_btn_point" : ""}
                onClick={() => {
                  setStars(5);
                }}
              >
                <img src={reviewStar} alt="" />
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
          <VideoForm />
        )}

{
  loading
  ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  : <button
  onClick={() => {
    submitReview();
  }}
  className="reviewsWritePopup_submitBtn"
>
  Submit review
</button>
}
{
  message.length > 0
  ? <p>{message}</p>
  : ''
}

      </div>
    </div>
  );
};

export default ReviewsWritePopup;
