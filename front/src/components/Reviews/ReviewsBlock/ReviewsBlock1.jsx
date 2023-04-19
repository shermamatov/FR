import React from "react";
import reviewsBlock1Star from '../img/reviewsBlock1-star.svg';
import reviewsBlock1Cirlce from '../img/reviewsBlock1-circle.png';
import reviewsBlock1Big from '../img/reviewsBlock1-big.png';

const ReviewsBlock1 = () => {
  return (
    <section className="reviewsBlock1">
      <div className="container">
        <div className="row">
            <div className="col-6">
                <p className="reviewsBlock1_subtitle">Review</p>
                <h1 className="reviewsBlock1_title">Overall Rating <br /> from 129 Reviews</h1>
                <div className="reviewsBlock1_stars">
                    <div className="reviewsBlock1_stars_icon">
                        <img src={reviewsBlock1Star} alt="" />
                        <img src={reviewsBlock1Star} alt="" />
                        <img src={reviewsBlock1Star} alt="" />
                        <img src={reviewsBlock1Star} alt="" />
                        <img src={reviewsBlock1Star} alt="" />
                    </div>
                    <h4 className="reviewsBlock1_stars_count">5.0/4.7</h4>
                </div>
                <p className="reviewsBlock1_text">95% of clients recommend us</p>
                <div className="reviewsBlock1_raiting">
                    <div className="reviewsBlock1_raiting_item">
                        <p className="reviewsBlock1_raiting_item_left">5 star</p>
                        <div className="reviewsBlock1_raiting_item_line"></div>
                        <p className="reviewsBlock1_raiting_item_right">(120)</p>
                    </div>
                    <div className="reviewsBlock1_raiting_item">
                        <p className="reviewsBlock1_raiting_item_left">4 star</p>
                        <div className="reviewsBlock1_raiting_item_line"></div>
                        <p className="reviewsBlock1_raiting_item_right">(9)</p>
                    </div>
                    <div className="reviewsBlock1_raiting_item">
                        <p className="reviewsBlock1_raiting_item_left">3 star</p>
                        <div className="reviewsBlock1_raiting_item_line"></div>
                        <p className="reviewsBlock1_raiting_item_right">(0)</p>
                    </div>
                    <div className="reviewsBlock1_raiting_item">
                        <p className="reviewsBlock1_raiting_item_left">2 star</p>
                        <div className="reviewsBlock1_raiting_item_line"></div>
                        <p className="reviewsBlock1_raiting_item_right">(0)</p>
                    </div>
                    <div className="reviewsBlock1_raiting_item">
                        <p className="reviewsBlock1_raiting_item_left">1 star</p>
                        <div className="reviewsBlock1_raiting_item_line"></div>
                        <p className="reviewsBlock1_raiting_item_right">(0)</p>
                    </div>
                </div>
                <button className="reviewsBlock1_btn">Write review</button>
            </div>
            <div className="col-6">
                <img src={reviewsBlock1Cirlce} alt="" className="reviewsBlock1_circleImg" />
                <img src={reviewsBlock1Big} alt="" className="reviewsBlock1_bigImg" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsBlock1;
