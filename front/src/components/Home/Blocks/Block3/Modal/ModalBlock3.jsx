import React from "react";
import "./ModalBlock3.scss";
import img from "../../../../../images/Modal_img1.webp";
const ModalBlock3 = () => {
    return (
        <div className="modal_main">
            <div className="modal_block">
                <div className="modal_body">
                    <div className="modal_img_block">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalBlock3;
