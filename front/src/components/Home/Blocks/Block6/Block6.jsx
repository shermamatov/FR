import React from "react";
import "./block6.scss";
import img1 from "../../../../images/block6_img1.png";
import img2 from "../../../../images/block6_img2.png";
const Block6 = () => {
    return (
        <div className="block6">
            <div>
                <img src={img2} alt="" />
            </div>
            <div>
                <img src={img1} alt="" />
            </div>
        </div>
    );
};

export default Block6;
