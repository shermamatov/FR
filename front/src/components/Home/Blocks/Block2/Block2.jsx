import React from "react";
import "./block2.scss";
import banner from "../../../../images/block2Banner.png";
const Block2 = () => {
    return (
        <div className="block2">
            <div className="block2_top">
                <div className="img_block2">
                    <img src={banner} alt="" />
                </div>
                <div className="img_block2">
                    <img src={banner} alt="" />
                </div>
            </div>
            <button className="btn_var3 ">book online now</button>
        </div>
    );
};

export default Block2;
