import { useEffect, useState } from "react";
import reviewsBlock1Star from "../img/reviewsBlock1-star.svg";
import reviewsBlock1Cirlce from "../img/reviewsBlock1-circle.png";
import reviewsBlock1Big from "../img/reviewsBlock1-big.png";
import ReviewsWritePopup from "./ReviewsPopup/ReviewsWritePopup/ReviewsWritePopup";
import { useSelector } from "react-redux";

const ReviewsBlock1 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [totalStars, setTotalStars] = useState([]);
  const [averageStars, setAverageStars] = useState(0);
  const reviews = useSelector((s) => s.app.reviews);
  const calcTotalStars = () => {
    let list = [];
    for (let i = 5; i > 0; i--) {
      list = [
        ...list,
        {
          stars: i,
          count: reviews.filter((item) => {
            return item.stars == i;
          }).length,
        },
      ];
    }
    setTotalStars(list);
  };

  const calcAverageStars = () =>{
    setAverageStars((reviews.reduce((acc,rec)=>{
        return acc + rec.stars
    },0) / reviews.length).toFixed(1))
  }

  useEffect(() => {
    if(reviews.length > 0){
        calcTotalStars();
        calcAverageStars();
    }

  }, [reviews]);
  return (
    <section className="reviewsBlock1">
      <ReviewsWritePopup showPopup={showPopup} setShowPopup={setShowPopup} />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p className="reviewsBlock1_subtitle">Review</p>
            <h1 className="reviewsBlock1_title">
              Overall Rating <br /> from 129 Reviews
            </h1>
            <div className="reviewsBlock1_stars">
              <div className="reviewsBlock1_stars_icon">
                <img src={reviewsBlock1Star} alt="" />
                <img src={reviewsBlock1Star} alt="" />
                <img src={reviewsBlock1Star} alt="" />
                <img src={reviewsBlock1Star} alt="" />
                <img src={reviewsBlock1Star} alt="" />
              </div>
              <h4 className="reviewsBlock1_stars_count">5.0/{averageStars}</h4>
            </div>
            <p className="reviewsBlock1_text">95% of clients recommend us</p>
            <div className="reviewsBlock1_raiting">
              {totalStars.map((item) => {
                return (
                  <div key={item.stars} className="reviewsBlock1_raiting_item">
                    <p className="reviewsBlock1_raiting_item_left">
                      {item.stars} star
                    </p>
                    <div className="reviewsBlock1_raiting_item_line"></div>
                    <p className="reviewsBlock1_raiting_item_right">
                      ({item.count})
                    </p>
                  </div>
                );
              })}
            </div>
            <button
              className="reviewsBlock1_btn"
              onClick={() => setShowPopup(true)}
            >
              Write review
            </button>
          </div>
          <div className="col-6">
            <img
              src={reviewsBlock1Cirlce}
              alt=""
              className="reviewsBlock1_circleImg"
            />
            <img
              src={reviewsBlock1Big}
              alt=""
              className="reviewsBlock1_bigImg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsBlock1;
