import React from "react";

const ServBlock2Card = ({ item }) => {
  return (
    <div key={item.id} className="image-box-2">
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
