import React from "react";
import "./block2.scss";
import banner from "../../../../images/block2Banner.png";
import { useNavigate } from "react-router-dom";
const Block2 = () => {
  const navigate = useNavigate();
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
      <button
        onClick={() => {
          navigate("/book_now");
        }}
        className="btn_var3 "
      >
        book online now
      </button>
    </div>
  );
};

export default Block2;
