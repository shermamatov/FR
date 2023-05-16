import { useDispatch, useSelector } from "react-redux";
import reviewsBlock2Stars from "../img/reviewsBlock2-stars.svg";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { createNestedList, getReviews } from "../../../redux/reducers/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ReviewsBlock3 = () => {
    const reviewsArr = useSelector((s) => s.app.reviews);
    const dispatch = useDispatch();
    const [paggArr, setPaggArr] = useState(
        createNestedList(reviewsArr, 4) || []
    );
    const [reviewsState, setReviewsState] = useState(reviewsArr || []);
    const [currentPage, setCurrentPage] = useState(0);

    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
            color: "#f2994a",
        },
        "& .MuiRating-iconHover": {
            color: "#ff3d47",
        },
    });

    function setPage(index) {
        setReviewsState(paggArr[index]);
    }

    function nextPage() {
        if (currentPage < paggArr.length - 1) {
            setReviewsState(paggArr[currentPage + 1]);
            setCurrentPage(currentPage + 1);
            console.log(currentPage);
        } else {
            setReviewsState(paggArr[0]);
            setCurrentPage(0);
        }
    }

    function prevPage() {
        if (currentPage > 0) {
            setReviewsState(paggArr[currentPage - 1]);
            setCurrentPage(currentPage - 1);
        } else if (currentPage == 0) {
            setReviewsState(paggArr[paggArr.length - 1]);
            setCurrentPage(paggArr.length - 1);
        }
    }

    useEffect(() => {
        dispatch(getReviews());
    }, []);

    useEffect(() => {
        setPaggArr(createNestedList(reviewsArr, 6));
    }, [reviewsArr]);

    useEffect(() => {
        setReviewsState(paggArr[0]);
    }, [paggArr]);

    return (
        <section className="reviewsBlock3">
            <div className="container">
                <h1 className="reviewsBlock3_title">Review</h1>
                <div className="row">
                    {reviewsState?.map((item) => (
                        <div className="col-4">
                            <div className="reviewsBlock3_card">
                                <p className="reviewsBlock3_card_text">
                                    {item.review_text}
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
                                            <StyledRating
                                                name="read-only"
                                                value={item.stars}
                                                readOnly
                                                sx={{
                                                    fontSize: "30px",
                                                }}
                                            />
                                        </div>
                                        <p className="reviewsBlock2_card_raiting_count">
                                            4.5
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div
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
                                {/* <p className="reviewsBlock2_bottom_center_item">
                                2
                            </p>
                            <p className="reviewsBlock2_bottom_center_item">
                                3
                            </p>
                            <p className="reviewsBlock2_bottom_center_item">
                                . . . . .
                            </p>
                            <p className="reviewsBlock2_bottom_center_item">
                                16
                            </p> */}
                            </div>
                            <button
                                className="reviewsBlock2_bottom_btn"
                                onClick={() => nextPage()}
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>
                    {/* <div className="col-4">
                        <div className="reviewsBlock3_card">
                            <p className="reviewsBlock3_card_text">
                                My second time using them. They are quick to
                                respond, very nice, and have reasonable prices.
                                I will definitely be calling them in the future
                                with any of my home hvac needs/repairs.
                            </p>
                            <h3 className="reviewsBlock3_card_name">
                                Ashley R.
                            </h3>

                            <div className="reviewsBlock2_card_raiting">
                                <div className="reviewsBlock2_card_raiting_icons">
                                    <img src={reviewsBlock2Stars} alt="" />
                                </div>
                                <p className="reviewsBlock2_card_raiting_count">
                                    4.5
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="reviewsBlock3_card">
                            <p className="reviewsBlock3_card_text">
                                My second time using them. They are quick to
                                respond, very nice, and have reasonable prices.
                                I will definitely be calling them in the future
                                with any of my home hvac needs/repairs.
                            </p>
                            <h3 className="reviewsBlock3_card_name">
                                Ashley R.
                            </h3>

                            <div className="reviewsBlock2_card_raiting">
                                <div className="reviewsBlock2_card_raiting_icons">
                                    <img src={reviewsBlock2Stars} alt="" />
                                </div>
                                <p className="reviewsBlock2_card_raiting_count">
                                    4.5
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="reviewsBlock3_card">
                            <p className="reviewsBlock3_card_text">
                                My second time using them. They are quick to
                                respond, very nice, and have reasonable prices.
                                I will definitely be calling them in the future
                                with any of my home hvac needs/repairs.
                            </p>
                            <h3 className="reviewsBlock3_card_name">
                                Ashley R.
                            </h3>

                            <div className="reviewsBlock2_card_raiting">
                                <div className="reviewsBlock2_card_raiting_icons">
                                    <img src={reviewsBlock2Stars} alt="" />
                                </div>
                                <p className="reviewsBlock2_card_raiting_count">
                                    4.5
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default ReviewsBlock3;
