
export default function ReviewsBlock1 (){
     return(
        <div className='reviewsBlock1'>
          <div className="content">
        <div className="grid grid-cols-2">
          <div>

            <h1 className="reviewsBlock1_subtitle">Review</h1>
            <h2>Overall Rating  from 129 Reviews</h2>
            <div className="reviewsBlock1_stars">
              <div className="reviewsBlock1_stars_icon">
                {/* Todo: img */}
              </div>
              <h4 className="reviewsBlock1_stars_count">5.0/4.7</h4>
            </div>
            <p className="reviewsBlock1_text">95% of clients recommend us</p>
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
            >
              Write review
            </button>

          </div>

          <div className='reviewsBlock1_images'>
            {/* Todo: img */}
            <span className='reviewsBlock1_circleImg'></span>
            <span className='reviewsBlock1_bigImg'></span>
          </div>

        </div>
</div>
      </div>
     )
}
