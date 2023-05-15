import React from "react";
import { useNavigate } from "react-router-dom";

const ServBlock2Card = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>{
      navigate(`/services/${item.slug}`)
    }} key={item.id} className="image-box-2">
      <div className="image-box-2-image">
        {item.offer_image_before && item.offer_image_after ? (
          <>
          <img className="image-box-2-image-offer" src={item.offer_image_before} alt="" />
          <img className="image-box-2-image-offer" src={item.offer_image_after} alt="" />
          </>
        ) : (
          <img className="image-box-2-img" src={item.offer_image} alt="" />
        )}
      </div>

      <div className="asd">
        <p>{item.name}</p>
      </div>
    </div>
  );
};

export default ServBlock2Card;
