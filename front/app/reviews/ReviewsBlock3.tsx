"use client";
import { use, useState, useEffect } from "react";
import { PaginationData, Review, fetchReviews, getPaggPage } from "@/api";
import ratingIcons from "./img/rating-icons.svg";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material";
import axios from "axios";

export default function ReviewsBlock3({ services }: any) {
    const [reviews, setReviews] = useState<PaginationData<Review>>();
    const [reviewsAll, setReviewsAll] = useState<Review[]>();
    const [currentPage, setCurrentPage] = useState(0);
    const [showFilterPopup, setShowFilterPopup] = useState(false);
    const [filterYear, setFilterYear] = useState<number | string>();

    const pageSum = 6;
    async function getData(limit = pageSum, offset = 0) {
        axios(
            `https://1furniturerestoration.com/api/review/?limit=${limit}&offset=${offset}`
        ).then(({ data }) => {
            setReviewsAll(data.results);
            setReviews(data);
        });
    }
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFilterYear(e.currentTarget.value);
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
    async function getFilter(
        filterArr = [],
        filterArrStars = [],
        filterArrServices = []
    ) {
        let filter: any = [];
        let results = [...(reviewsAll ?? [])];
        if (results.length !== 0) {
            //BY YEAR
            if (
                filterArr.length !== 0 &&
                filterArrServices.length === 0 &&
                filterArrStars.length === 0
            ) {
                for (let i of filterArr) {
                    for (let j of results) {
                        if (j?.created_at?.slice(0, 4) == i) {
                            filter.push(j);
                        }
                    }
                }
            }
            //BY SERVICES
            if (
                filterArr.length === 0 &&
                filterArrServices.length !== 0 &&
                filterArrStars.length === 0
            ) {
                for (let i of filterArrServices) {
                    for (let j of results) {
                        if (j?.service == i) {
                            filter.push(j);
                        }
                    }
                }
            }
            //BY STARS
            if (
                filterArr.length === 0 &&
                filterArrServices.length === 0 &&
                filterArrStars.length !== 0
            ) {
                for (let i of filterArrStars) {
                    for (let j of results) {
                        if (j?.stars == i) {
                            filter.push(j);
                        }
                    }
                }
            }
            //BY YEARS AND SERVICES
            if (
                filterArr.length !== 0 &&
                filterArrServices.length !== 0 &&
                filterArrStars.length === 0
            ) {
                let yearArr: any = [];
                let serviceArr: any = [];
                for (let i of filterArr) {
                    for (let j of results) {
                        if (j?.created_at?.slice(0, 4) == i) {
                            yearArr.push(j);
                        }
                    }
                }
                for (let i of filterArrServices) {
                    for (let j of results) {
                        if (j?.service == i) {
                            serviceArr.push(j);
                        }
                    }
                }
                if (yearArr.length >= serviceArr.length) {
                    let filtered = yearArr.filter((value: any) =>
                        serviceArr.includes(value)
                    );
                    for (let i of filtered) {
                        filter.push(i);
                    }
                } else {
                    let filtered = serviceArr.filter((value: any) =>
                        yearArr.includes(value)
                    );
                    for (let i of filtered) {
                        filter.push(i);
                    }
                }
            }

            //BY YEARS AND STARS
            if (
                filterArr.length !== 0 &&
                filterArrServices.length === 0 &&
                filterArrStars.length !== 0
            ) {
                let yearArr: any = [];
                let starsArr: any = [];
                for (let i of filterArr) {
                    for (let j of results) {
                        if (j?.created_at?.slice(0, 4) == i) {
                            yearArr.push(j);
                        }
                    }
                }
                for (let i of filterArrStars) {
                    for (let j of results) {
                        if (j?.stars == i) {
                            starsArr.push(j);
                        }
                    }
                }
                if (yearArr.length >= starsArr.length) {
                    let filtered = yearArr.filter((value: any) =>
                        starsArr.includes(value)
                    );
                    for (let i of filtered) {
                        filter.push(i);
                    }
                } else {
                    let filtered = starsArr.filter((value: any) =>
                        yearArr.includes(value)
                    );
                    for (let i of filtered) {
                        filter.push(i);
                    }
                }
            }
            //BY SERVICES AND STARS
            if (
                filterArr.length === 0 &&
                filterArrServices.length !== 0 &&
                filterArrStars.length !== 0
            ) {
                let serviceArr: any = [];
                let starsArr: any = [];
                for (let i of filterArrServices) {
                    for (let j of results) {
                        if (j?.service == i) {
                            serviceArr.push(j);
                        }
                    }
                }
                for (let i of filterArrStars) {
                    for (let j of results) {
                        if (j?.stars == i) {
                            starsArr.push(j);
                        }
                    }
                }
                if (starsArr.length >= serviceArr.length) {
                    let filtered = starsArr.filter((value: any) =>
                        serviceArr.includes(value)
                    );
                    for (let i of filtered) {
                        filter.push(i);
                    }
                } else {
                    let filtered = serviceArr.filter((value: any) =>
                        starsArr.includes(value)
                    );
                    for (let i of filtered) {
                        filter.push(i);
                    }
                }
            }

            //BY SERVICES, Year and stars
            if (
                filterArr.length !== 0 &&
                filterArrServices.length !== 0 &&
                filterArrStars.length !== 0
            ) {
                let serviceArr: any = [];
                let starsArr: any = [];
                let yearsArr: any = [];
                for (let i of filterArrServices) {
                    for (let j of results) {
                        if (j?.service == i) {
                            serviceArr.push(j);
                        }
                    }
                }
                for (let i of filterArrStars) {
                    for (let j of results) {
                        if (j?.stars == i) {
                            starsArr.push(j);
                        }
                    }
                }
                for (let i of filterArr) {
                    for (let j of results) {
                        if (j?.created_at?.slice(0, 4) == i) {
                            yearsArr.push(j);
                        }
                    }
                }
                if (
                    yearsArr.length >= serviceArr.length &&
                    yearsArr.length >= serviceArr.length
                ) {
                    let filtered = yearsArr.filter(
                        (value: any) =>
                            serviceArr.includes(value) &&
                            starsArr.includes(value)
                    );
                    for (let i of filtered) {
                        filter.push(i);
                    }
                }
                if (
                    serviceArr.length >= yearsArr.length &&
                    serviceArr.length >= starsArr.length
                ) {
                    let filtered = serviceArr.filter(
                        (value: any) =>
                            yearsArr.includes(value) && starsArr.includes(value)
                    );
                    for (let i of filtered) {
                        filter.push(i);
                    }
                }
                if (
                    starsArr.length >= yearsArr.length &&
                    starsArr.length >= serviceArr.length
                ) {
                    let filtered = starsArr.filter(
                        (value: any) =>
                            yearsArr.includes(value) &&
                            serviceArr.includes(value)
                    );
                    for (let i of filtered) {
                        filter.push(i);
                    }
                }
            }
        }

        console.log(filter);
        setReviewsAll(filter);
    }

    function filterHandler() {
        let arr: any = [];
        let arrStars: any = [];
        let arrServices: any = [];
        let checkboxArr: any = document.getElementsByName("year");
        let checkboxArrStars: any = document.getElementsByName("stars");
        let checkboxArrServices: any = document.getElementsByName("services");
        for (let i = 0; i < checkboxArr.length; i++) {
            if (checkboxArr[i].checked) {
                arr.push(checkboxArr[i].value);
            }
        }
        if (filterYear) {
            arr.push(filterYear);
        }
        for (let i = 0; i < checkboxArrStars.length; i++) {
            if (checkboxArrStars[i].checked) {
                arrStars.push(checkboxArrStars[i].value);
            }
        }
        for (let i = 0; i < checkboxArrServices.length; i++) {
            if (checkboxArrServices[i].checked) {
                arrServices.push(checkboxArrServices[i].value);
            }
        }

        // console.log(arr);
        getFilter(arr, arrStars, arrServices);
        arr = [];
        arrServices = [];
        arrStars = [];
    }

    function filter() {
        filterHandler();
    }

    return (
        <div
            className="reviewsBlock3"
            onClick={() => setShowFilterPopup(false)}
        >
            <div className="content">
                <div className="reviewsBlock2_btns">
                    <div
                        className="photos_filter_block z-8"
                        onClick={(e) => {
                            getData();
                            setShowFilterPopup(!showFilterPopup);
                            // setModal(!modal);
                            e.stopPropagation();
                        }}
                    >
                        <img src="/filterIcon.png" alt="" />
                        <p>Filter</p>
                        <button className="font-bold text-lg ml-4">
                            Reviews
                        </button>
                    </div>
                    {showFilterPopup && (
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="reviewsFilterPopup reviewsFilterPopup-show"
                        >
                            <div className="reviewsFilterPopup_block">
                                <h3 className="reviewsFilterPopup_block_title">
                                    By year
                                </h3>
                                <input
                                    type="number"
                                    className="reviewsFilterPopup_block_input"
                                    value={filterYear}
                                    onChange={onChange}
                                />
                                <label className="reviewsFilterPopup_block_item">
                                    <input
                                        type="checkbox"
                                        id="year"
                                        name="year"
                                        value={"2019"}
                                    />
                                    2019
                                </label>
                                <label className="reviewsFilterPopup_block_item">
                                    <input
                                        type="checkbox"
                                        id="year"
                                        name="year"
                                        value={"2020"}
                                    />
                                    2020
                                </label>
                                <label className="reviewsFilterPopup_block_item">
                                    <input
                                        type="checkbox"
                                        id="year"
                                        name="year"
                                        value={"2021"}
                                    />
                                    2021
                                </label>
                                <label className="reviewsFilterPopup_block_item">
                                    <input
                                        type="checkbox"
                                        id="year"
                                        name="year"
                                        value={"2022"}
                                    />
                                    2022
                                </label>
                                <label className="reviewsFilterPopup_block_item">
                                    <input
                                        type="checkbox"
                                        id="year"
                                        name="year"
                                        value={"2023"}
                                    />
                                    2023
                                </label>

                                <a
                                    href="#"
                                    className="reviewsFilterPopup_block_link"
                                >
                                    more
                                </a>
                            </div>

                            <div className="reviewsFilterPopup_block overflow-y-scroll h-[30%]">
                                <h3 className="reviewsFilterPopup_block_title">
                                    By services
                                </h3>
                                {services?.results?.map((item: any) => (
                                    <label
                                        key={item.id}
                                        className="reviewsFilterPopup_block_item"
                                    >
                                        <input
                                            type="checkbox"
                                            value={item.id}
                                            name="services"
                                        />
                                        {item.name}
                                    </label>
                                ))}
                            </div>
                            <div className="reviewsFilterPopup_block">
                                <h3 className="reviewsFilterPopup_block_title">
                                    By stars
                                </h3>
                                <label className="reviewsFilterPopup_block_item">
                                    <input
                                        type="checkbox"
                                        name="stars"
                                        value={5}
                                    />{" "}
                                    5
                                </label>
                                <label className="reviewsFilterPopup_block_item">
                                    <input
                                        type="checkbox"
                                        name="stars"
                                        value={4}
                                    />{" "}
                                    4
                                </label>
                                <label className="reviewsFilterPopup_block_item">
                                    <input
                                        type="checkbox"
                                        name="stars"
                                        value={3}
                                    />{" "}
                                    3
                                </label>
                                <label className="reviewsFilterPopup_block_item">
                                    <input
                                        type="checkbox"
                                        name="stars"
                                        value={2}
                                    />{" "}
                                    2
                                </label>
                                <label className="reviewsFilterPopup_block_item">
                                    <input
                                        type="checkbox"
                                        name="stars"
                                        value={1}
                                    />{" "}
                                    1
                                </label>

                                <button
                                    className="reviewsFilterPopup_block_btn"
                                    onClick={() => {
                                        filter();
                                        setShowFilterPopup(false);
                                    }}
                                >
                                    save
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-9">
                    {reviewsAll?.length == 0 && (
                        <div className="h-[80vh] col-span-2 md:col-span-3 lg:col-span-4">
                            <h2
                                style={{
                                    textAlign: "center",
                                    margin: "50px 0px",
                                }}
                            >
                                there’s nothing here{" "}
                            </h2>
                            <h4 onClick={() => getData()}>back</h4>
                        </div>
                    )}
                    {reviewsAll?.map((item) => (
                        <div key={item.id} className="col-span-1">
                            <div className="reviewsBlock3_card">
                                <p className="reviewsBlock3_card_text text-md">
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
                </div>
                {reviews && reviewsAll?.length !== 0 && (
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
