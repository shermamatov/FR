import React, { useState } from "react";
import "./PhotoBlock1.scss";
import filterIcon from "../../../../images/filterIcon.png";
import photo1 from "../../../../images/photos_Img1.webp";
import photo2 from "../../../../images/photos_img2.webp";
import photo3 from "../../../../images/photos_img3.webp";
import PhotoFilter from "../PhotoFilter/PhotoFilter";
const PhotoBlock1 = () => {
    const [modal, setModal] = useState(false);
    return (
        <div className="photos_main_block" onClick={() => setModal(false)}>
            <h1>Project photos</h1>
            <div className="photos_block">
                <div
                    className="photos_filter_block"
                    onClick={(e) => {
                        setModal(true);
                        e.stopPropagation();
                    }}
                >
                    <img src={filterIcon} alt="" />
                    <p>Filter</p>
                </div>
                <div className="photos_img_blocks">
                    {modal && <PhotoFilter />}
                    <div>
                        <img src={photo1} alt="" />
                    </div>
                    <div>
                        <img src={photo2} alt="" />
                    </div>
                    <div>
                        <img src={photo3} alt="" />
                    </div>
                    <div>
                        <img src={photo1} alt="" />
                    </div>
                    <div>
                        <img src={photo3} alt="" />
                    </div>
                    <div>
                        <img src={photo2} alt="" />
                    </div>
                    <div>
                        <img src={photo2} alt="" />
                    </div>
                    <div>
                        <img src={photo3} alt="" />
                    </div>
                    <div>
                        <img src={photo1} alt="" />
                    </div>
                    <div>
                        <img src={photo2} alt="" />
                    </div>
                    <div>
                        <img src={photo3} alt="" />
                    </div>
                    <div>
                        <img src={photo1} alt="" />
                    </div>
                </div>
            </div>
            <div className="photos_pagination paggination d-flex">
                <button className="prev__btn btn">
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
                <div className="d-flex pagg_numbers">
                    <p className="pagg__number">1</p>
                    <p className="pagg__number">2</p>
                    <p className="pagg__number">3</p>
                    <p className="pagg__number">.</p>
                    <p className="pagg__number">.</p>
                    <p className="pagg__number">.</p>
                    <p className="pagg__number">.</p>
                    <p className="pagg__number">.</p>
                    <p className="pagg__number">16</p>
                </div>
                <button className="next__btn btn">
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
        </div>
    );
};

export default PhotoBlock1;
