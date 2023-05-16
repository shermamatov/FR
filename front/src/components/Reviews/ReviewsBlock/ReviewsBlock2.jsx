import reviewsBlock2Filter from "../img/reviewsBlock2-filter.svg";
import reviewsBlock2Card from "../img/reviewsBlock2-card.png";
import reviewsBlock2Stars from "../img/reviewsBlock2-stars.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import ReviewsFilterPopup from "./ReviewsPopup/ReviewsFilterPopup/ReviewsFilterPopup";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createNestedList, getReviews } from "../../../redux/reducers/app";

const ReviewsBlock2 = () => {
    const [showFilterPopup, setShowFilterPopup] = useState(false);
    const dispatch = useDispatch();

    const reviewsArr = useSelector((s) => s.app.reviews);

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
        setPaggArr(createNestedList(reviewsArr, 4));
    }, [reviewsArr]);

    useEffect(() => {
        setReviewsState(paggArr[0]);
    }, [paggArr]);

    return (
        <section className="reviewsBlock2">
            <div className="container">
                <div className="reviewsBlock2_btns">
                    <button
                        className="reviewsBlock2_btns_filter"
                        onClick={() => {
                            setShowFilterPopup(!showFilterPopup);
                        }}
                    >
                        <img src={reviewsBlock2Filter} alt="" />
                        Filter
                    </button>
                    <ReviewsFilterPopup showFilterPopup={showFilterPopup} />
                    <div className="reviewsBlock2_btns_right">
                        <button>All</button>
                        <button>Review</button>
                        <button>Video review</button>
                    </div>
                </div>
                <h1 className="reviewsBlock2_title">Video review</h1>
                <div className="row">
                    {reviewsState?.map((item) => (
                        <div className="col-3" key={item.id}>
                            <div className="reviewsBlock2_card">
                                <div style={{ position: "relative" }}>
                                    <button className="reviewsBlock2_card_btn">
                                        Play video
                                    </button>
                                    <img
                                        src={reviewsBlock2Card}
                                        alt=""
                                        className="reviewsBlock2_card_img"
                                    />
                                </div>
                                <h3 className="reviewsBlock2_card_title">
                                    {item.name}
                                </h3>
                                <div className="reviewsBlock2_card_raiting">
                                    <div className="reviewsBlock2_card_raiting_icons">
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
                                        {item.stars}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

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
            </div>
        </section>
    );
};

export default ReviewsBlock2;
