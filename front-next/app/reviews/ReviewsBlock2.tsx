import { use } from 'react';
import { fetchReviews } from '@/api';

export default function ReviewsBlock2 () {
    const reviews = use(fetchReviews());

    return(
        <div className="reviewsBlock2">
            <div className="content">
            <div className="reviewsBlock2_btns">
                <button
                    className="reviewsBlock2_btns_filter"

                >
                    <img src='' alt="" />
                    Filter
                </button>
                <div className="reviewsBlock2_btns_right">
                    <button>All</button>
                    <button>Review</button>
                    <button>Video review</button>
                </div>
            </div>
            <h1 className="reviewsBlock2_title">Video review</h1>
            <div className="grid grid-cols-3 gap-x-4 gap-y-9">
            {reviews?.results.map((item) => (
          <div key={item.id}>
 <div className="reviewsBlock2_card">
                            <div style={{ position: "relative" }}>
                                <button className="reviewsBlock2_card_btn">
                                    Play video
                                </button>
                                <span  className="reviewsBlock2_card_img">

                                </span>
                            </div>
                            <h3 className="reviewsBlock2_card_title">
                            {item.name}
                            </h3>
                            <div className="reviewsBlock2_card_raiting">
                                <div className="reviewsBlock2_card_raiting_icons">
                                    {/* Todo: img */}
                                </div>
                                <p className="reviewsBlock2_card_raiting_count">
                               4.5
                                </p>
                            </div>
                        </div>
           </div>
        ))}
                    <div>

                    </div>

            </div>
{/*
            <div className="reviewsBlock2_bottom_row">
                <div className="reviewsBlock2_bottom">
                    <button
                        className="reviewsBlock2_bottom_btn"
                        onClick={() => prevPage()}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div className="reviewsBlock2_bottom_center">
                        {paggArr?.map((item, index) => (
                            <p
                                key={index}
                                onClick={() => {
                                    setPage(index);
                                    setCurrentPage(index);
                                }}
                                className="reviewsBlock2_bottom_center_item"
                            >
                                {index + 1}
                            </p>
                        ))}

                    </div>
                    <button
                        className="reviewsBlock2_bottom_btn"
                        onClick={() => nextPage()}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div> */}
        </div>
        </div>
    )
}
