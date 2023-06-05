"use client";
import { PaginationData, Photo, fetchPhotos, getPaggPage } from "@/api";
import { use, useEffect, useState } from "react";
import "./block4.css";
import Image from "next/image";

export default function HomeBlock4() {
    // const photos = use(fetchPhotos(9));
    const [photos, setPhotos] = useState<PaginationData<Photo>>();
    const [currentPage, setCurrentPage] = useState(0);
    async function getData(limit = 3, offset = 0) {
        setPhotos(await fetchPhotos(limit, offset));
    }

    useEffect(() => {
        getData(3, 3 * currentPage);
    }, [currentPage]);

    return (
        <div className="content">
            <div className="fr_server">
                <h2 className="transparent_text">at manufacturing plants</h2>
                {/* <div className="container"> */}
                <h2>our photos</h2>
                <div className="grid_block">
                    {photos?.results.map((item) => (
                        <div key={item.id} className="grid__item">
                            <Image
                                src={item.photo}
                                alt={item.caption}
                                className="grid__img"
                                unoptimized
                                width={100}
                                height={100}
                            />
                            <p className="grid__desc bord">
                                {item.caption || "media description"}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="paggination flex">
                    <button
                        className={`prev__btn btn ${
                            currentPage <= 0 && "noActive"
                        }`}
                        onClick={() =>
                            setCurrentPage(
                                currentPage < 0 ? currentPage : currentPage - 1
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
                        {getPaggPage(photos?.count, 3).map((item: any) => (
                            <p
                                onClick={() => setCurrentPage(item)}
                                key={item}
                                className="pagg__number"
                            >
                                {item != ". . ." ? item + 1 : item}
                            </p>
                        ))}
                        {/* <p className="pagg__number">1</p>
                    <p className="pagg__number">2</p>
                    <p className="pagg__number">3</p>
                    <p className="pagg__number">.</p>
                    <p className="pagg__number">.</p>
                    <p className="pagg__number">.</p>
                    <p className="pagg__number">.</p>
                    <p className="pagg__number">.</p>
                    <p className="pagg__number">16</p> */}
                    </div>
                    <button
                        className={`next__btn btn ${
                            photos &&
                            currentPage >= Math.ceil(photos?.count / 3) - 1 &&
                            "noActive"
                        } `}
                        onClick={() => {
                            setCurrentPage(
                                photos &&
                                    currentPage >=
                                        Math.ceil(photos?.count / 3) - 1
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
                {/* </div> */}
            </div>
        </div>
    );
}