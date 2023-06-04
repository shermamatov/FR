"use client";
import { use, useState, useEffect } from "react";
import { PaginationData, Review, fetchReviews, getPaggPage } from "@/api";
import ratingIcons from "./img/rating-icons.svg";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material";

export default function ReviewsBlock3() {
    const [reviews, setReviews] = useState<PaginationData<Review>>();
    const [currentPage, setCurrentPage] = useState(0);
    const pageSum = 6;
    async function getData(limit = pageSum, offset = 0) {
        setReviews(await fetchReviews(limit, offset));
    }

    useEffect(() => {
        getData(pageSum, pageSum * currentPage);
    }, [currentPage]);

    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
            color: "#f2994a",
        },
        "& .MuiRating-iconHover": {
            color: "#ff3d47",
        },
    });

    return (
        <div className="reviewsBlock3">
            <div className="content">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-9">
                    {reviews?.results.map((item) => (
                        <div key={item.id}>
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
                                            {/* <Image src={ratingIcons} alt="" /> */}
                                            <StyledRating
                                                name="read-only"
                                                value={item.stars}
                                                readOnly
                                                precision={0.5}
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
                {reviews && reviews?.count > pageSum && (
                    <div className="paggination flex">
                        <button
                            className={`prev__btn btn ${
                                currentPage <= 0 && "noActive"
                            }`}
                            onClick={() =>
                                setCurrentPage(
                                    currentPage < 0
                                        ? currentPage
                                        : currentPage - 1
                                )
                            }
                        >
                            <svg
                                width="12"
                                height="24"
                                viewBox="0 0 12 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.27513 0.463377L11.1914 10.8452C11.2972 10.9688 11.372 11.1027 11.4157 11.2469C11.4602 11.3911 11.4824 11.5456 11.4824 11.7104C11.4824 11.8752 11.4602 12.0297 11.4157 12.1739C11.372 12.3181 11.2972 12.452 11.1914 12.5756L2.27513 22.9883C2.0282 23.2767 1.71952 23.4209 1.34911 23.4209C0.978705 23.4209 0.661213 23.2664 0.396636 22.9574C0.132059 22.6484 -0.000229836 22.288 -0.000229836 21.876C-0.000229836 21.464 0.132059 21.1035 0.396636 20.7945L8.17521 11.7104L0.396636 2.62626C0.149697 2.33788 0.026228 1.98276 0.026228 1.56089C0.026228 1.1382 0.158516 0.77236 0.423094 0.463377C0.687671 0.154392 0.996345 -9.91821e-05 1.34911 -9.91821e-05C1.70188 -9.91821e-05 2.01056 0.154392 2.27513 0.463377Z"
                                    fill="#2A2A2A"
                                />
                            </svg>
                        </button>
                        <div className="flex pagg_numbers">
                            {getPaggPage(reviews?.count, pageSum).map(
                                (item: any) => (
                                    <p
                                        onClick={() => setCurrentPage(item)}
                                        key={item}
                                        className="pagg__number"
                                    >
                                        {item != ". . ." ? item + 1 : item}
                                    </p>
                                )
                            )}
                        </div>
                        <button
                            className={`next__btn btn ${
                                reviews &&
                                currentPage >=
                                    Math.ceil(reviews?.count / pageSum) - 1 &&
                                "noActive"
                            } `}
                            onClick={() => {
                                setCurrentPage(
                                    reviews &&
                                        currentPage >=
                                            Math.ceil(
                                                reviews?.count / pageSum
                                            ) -
                                                1
                                        ? currentPage
                                        : currentPage + 1
                                );
                            }}
                        >
                            <svg
                                width="12"
                                height="24"
                                viewBox="0 0 12 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.27513 0.463377L11.1914 10.8452C11.2972 10.9688 11.372 11.1027 11.4157 11.2469C11.4602 11.3911 11.4824 11.5456 11.4824 11.7104C11.4824 11.8752 11.4602 12.0297 11.4157 12.1739C11.372 12.3181 11.2972 12.452 11.1914 12.5756L2.27513 22.9883C2.0282 23.2767 1.71952 23.4209 1.34911 23.4209C0.978705 23.4209 0.661213 23.2664 0.396636 22.9574C0.132059 22.6484 -0.000229836 22.288 -0.000229836 21.876C-0.000229836 21.464 0.132059 21.1035 0.396636 20.7945L8.17521 11.7104L0.396636 2.62626C0.149697 2.33788 0.026228 1.98276 0.026228 1.56089C0.026228 1.1382 0.158516 0.77236 0.423094 0.463377C0.687671 0.154392 0.996345 -9.91821e-05 1.34911 -9.91821e-05C1.70188 -9.91821e-05 2.01056 0.154392 2.27513 0.463377Z"
                                    fill="#2A2A2A"
                                />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
