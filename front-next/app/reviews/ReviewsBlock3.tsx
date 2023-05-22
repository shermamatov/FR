import { use } from 'react';
import { fetchReviews } from '@/api';

export default function ReviewsBlock3 (){
    const reviews = use(fetchReviews());

    return(
        <div className="reviewsBlock3">
            <div className="content">
            <div className="grid grid-cols-3 gap-x-4 gap-y-9">
            {reviews?.results.map((item) => (
         <div key={item.id}>
         <div className="reviewsBlock3_card">
             <p className="reviewsBlock3_card_text">
             My second time using them. They are quick to respond, very nice, and have reasonable prices. I will definitely be calling them in the future with any of my home hvac needs/repairs.
             </p>
             <div>
                 <h3 className="reviewsBlock3_card_name">
                    {item.name}
                 </h3>
                 <div className="reviewsBlock2_card_raiting">
                     <div
                         className="reviewsBlock2_card_raiting_icons"
                         style={{ marginLeft: "-5px" }}
                     >
                        {/* Todo: img */}
                     </div>
                     <p className="reviewsBlock2_card_raiting_count">
                         4.5
                     </p>
                 </div>
             </div>
         </div>
     </div>
        ))}


                {/* <div
                    className="reviewsBlock2_bottom_row"
                    style={{ width: "100%" }}
                >
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
        </div>
    )
}
