import React from "react";
import "./block7.scss";
import { otzv1, otzv2 } from "../../../../const/consts";
import rating from "../../../../images/block7_rating.png";
import img1 from "../../../../images/block7_img1.webp";
import img2 from "../../../../images/block7_img2.webp";
import img3 from "../../../../images/block7_img3.webp";
const Block7 = () => {
    return (
        <div className="block7_main">
            <h1>Words From Customers</h1>
            <div className="text_review">
                {otzv1.map((item) => (
                    <div className="text_review_block" key={item.id}>
                        <p>{item.desc}</p>
                        <h5>{item.name}</h5>
                        <div>
                            <img src={rating} alt="" />
                            <p>{item.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="video_review_adap">
                {otzv2.map((item) => (
                    <div className="video_review_block_adap" key={item.id}>
                        <img src={item.img} alt="" />
                        <h5>{item.name}</h5>
                        <div>
                            <img src={rating} alt="" />
                            <p>{item.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="video_review">
                <div className="video_left">
                    <div className="video_left_block">
                        <img src={img1} alt="" />
                        <h5>Jacob Jones</h5>
                        <div>
                            <img src={rating} alt="" />
                            <p>4.7</p>
                        </div>
                    </div>
                </div>
                {/* <div className="video_right"> */}
                <div className="video_middle">
                    <div className="video_left_block">
                        <img src={img3} alt="" />
                        <h5>Jacob Jones</h5>
                        <div>
                            <img src={rating} alt="" />
                            <p>4.7</p>
                        </div>
                    </div>
                    <div className="video_left_block">
                        <img src={img2} alt="" />
                        <h5>Jacob Jones</h5>
                        <div>
                            <img src={rating} alt="" />
                            <p>4.7</p>
                        </div>
                    </div>
                </div>
                <div className="video_right">
                    <div className="video_left_block">
                        <img src={img3} alt="" />
                        <h5>Jacob Jones</h5>
                        <div>
                            <img src={rating} alt="" />
                            <p>4.7</p>
                        </div>
                    </div>
                    <div className="video_left_block">
                        <img src={img2} alt="" />
                        <h5>Jacob Jones</h5>
                        <div>
                            <img src={rating} alt="" />
                            <p>4.7</p>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Block7;
