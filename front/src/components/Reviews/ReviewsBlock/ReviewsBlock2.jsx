import reviewsBlock2Filter from '../img/reviewsBlock2-filter.svg';
import reviewsBlock2Card from '../img/reviewsBlock2-card.png';
import reviewsBlock2Stars from '../img/reviewsBlock2-stars.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const ReviewsBlock2 = () => {
  return (
    <section className="reviewsBlock2">
      <div className="container">
        <div className="reviewsBlock2_btns">
          <button className='reviewsBlock2_btns_filter'>
            <img src={reviewsBlock2Filter} alt="" />
            Filter
          </button>

          <div className="reviewsBlock2_btns_right">
            <button>All</button>
            <button>Review</button>
            <button>Video review</button>
          </div>
        </div>
            <h1 className="reviewsBlock2_title">Video  review</h1>
        <div className="row">
            <div className="col-3">
                <div className="reviewsBlock2_card">
                    <button className="reviewsBlock2_card_btn">Play  video</button>
                    <img src={reviewsBlock2Card} alt="" className="reviewsBlock2_card_img" />
                    <h3 className="reviewsBlock2_card_title">Jacob Jones</h3>
                    <div className="reviewsBlock2_card_raiting">
                        <div className="reviewsBlock2_card_raiting_icons">
                            <img src={reviewsBlock2Stars} alt="" />
                        </div>
                        <p className="reviewsBlock2_card_raiting_count">4.5</p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="reviewsBlock2_card">
                    <button className="reviewsBlock2_card_btn">Play  video</button>
                    <img src={reviewsBlock2Card} alt="" className="reviewsBlock2_card_img" />
                    <h3 className="reviewsBlock2_card_title">Jacob Jones</h3>
                    <div className="reviewsBlock2_card_raiting">
                        <div className="reviewsBlock2_card_raiting_icons">
                            <img src={reviewsBlock2Stars} alt="" />
                        </div>
                        <p className="reviewsBlock2_card_raiting_count">4.5</p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="reviewsBlock2_card">
                    <button className="reviewsBlock2_card_btn">Play  video</button>
                    <img src={reviewsBlock2Card} alt="" className="reviewsBlock2_card_img" />
                    <h3 className="reviewsBlock2_card_title">Jacob Jones</h3>
                    <div className="reviewsBlock2_card_raiting">
                        <div className="reviewsBlock2_card_raiting_icons">
                            <img src={reviewsBlock2Stars} alt="" />
                        </div>
                        <p className="reviewsBlock2_card_raiting_count">4.5</p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="reviewsBlock2_card">
                    <button className="reviewsBlock2_card_btn">Play  video</button>
                    <img src={reviewsBlock2Card} alt="" className="reviewsBlock2_card_img" />
                    <h3 className="reviewsBlock2_card_title">Jacob Jones</h3>
                    <div className="reviewsBlock2_card_raiting">
                        <div className="reviewsBlock2_card_raiting_icons">
                            <img src={reviewsBlock2Stars} alt="" />
                        </div>
                        <p className="reviewsBlock2_card_raiting_count">4.5</p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="reviewsBlock2_card">
                    <button className="reviewsBlock2_card_btn">Play  video</button>
                    <img src={reviewsBlock2Card} alt="" className="reviewsBlock2_card_img" />
                    <h3 className="reviewsBlock2_card_title">Jacob Jones</h3>
                    <div className="reviewsBlock2_card_raiting">
                        <div className="reviewsBlock2_card_raiting_icons">
                            <img src={reviewsBlock2Stars} alt="" />
                        </div>
                        <p className="reviewsBlock2_card_raiting_count">4.5</p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="reviewsBlock2_card">
                    <button className="reviewsBlock2_card_btn">Play  video</button>
                    <img src={reviewsBlock2Card} alt="" className="reviewsBlock2_card_img" />
                    <h3 className="reviewsBlock2_card_title">Jacob Jones</h3>
                    <div className="reviewsBlock2_card_raiting">
                        <div className="reviewsBlock2_card_raiting_icons">
                            <img src={reviewsBlock2Stars} alt="" />
                        </div>
                        <p className="reviewsBlock2_card_raiting_count">4.5</p>
                    </div>
                </div>
            </div>

        </div>


<div className="reviewsBlock2_bottom_row">
<div className="reviewsBlock2_bottom">
            <button className="reviewsBlock2_bottom_btn"><FontAwesomeIcon icon={faChevronLeft}/></button>
                <div className="reviewsBlock2_bottom_center">
                    <p className="reviewsBlock2_bottom_center_item">1</p>
                    <p className="reviewsBlock2_bottom_center_item">2</p>
                    <p className="reviewsBlock2_bottom_center_item">3</p>
                    <p className="reviewsBlock2_bottom_center_item">. . . . .</p>
                    <p className="reviewsBlock2_bottom_center_item">16</p>
                </div>
            <button className="reviewsBlock2_bottom_btn"><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
</div>

      </div>
    </section>
  );
};

export default ReviewsBlock2;
