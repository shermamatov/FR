import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./BlockNowForm2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const BlockNowForm2 = ({ changeLocalStorage }) => {
  const [day, setDay] = useState(3);

  function getNextFiveDays() {
    const days = [];
    for (let i = 0; i < 5; i++) {
      const date = moment().add(i, "days");
      days.push({
        date: date.format("DD"),
        dayOfWeek: date.format("dddd"),
      });
    }
    return days;
  }
  const timeSlots = () => {
    const slots = [];
    const start = moment("10:00am", "hh:mma");
    const end = moment("8:00pm", "hh:mma");
    while (start.isBefore(end)) {
      const slot = `${start.format("hh:mma")} - ${start
        .add(1, "hour")
        .format("hh:mma")}`;
      slots.push(slot);
    }
    return slots;
  };

  const slots = timeSlots();
  const dates = getNextFiveDays();

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const settings2 = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    console.log(slots);
  }, []);
  return (
    <div className="blockNowForm2">
      <p className="blockNowForm2_choose">Choose day and time</p>
      {/* <h2 className="blockNowForm2_month"> */}
      <div>
        <button className="date_block-wrapper-prev-btn">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>{" "}
        <Slider {...settings2}>
          <div>
            <h3>February</h3>
          </div>
          <div>
            <h3>march</h3>
          </div>
          <div>
            <h3>april</h3>
          </div>
          <div>
            <h3>may</h3>
          </div>
          <div>
            <h3>june</h3>
          </div>
          <div>
            <h3>july</h3>
          </div>
          <div>
            <h3>august</h3>
          </div>
        </Slider>
        <button className="date_block-wrapper-next-btn">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      {/* </h2> */}
      <div className="date_block-wrapper">
        <button className="date_block-wrapper-prev-btn">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <Slider {...settings}>
          {dates.map((item) => {
            return (
              <div key={item.date}>
                <div
                  className="date_block"
                  onClick={() => {
                    setDay(item.date);
                  }}
                >
                  <h2>{item.dayOfWeek}</h2>
                  <h1>{item.date}</h1>
                </div>
              </div>
            );
          })}
        </Slider>
        <button className="date_block-wrapper-next-btn">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <h2 className="blockNowForm2_time">
        Select time for Monday, February 20
      </h2>
      <div className="blockNowForm2_time_wrapper">
        {slots.map((item) => {
         return <p key={item} className="blockNowForm2_time_item">{item}</p>;
        })}
     
      </div>
      <textarea
        placeholder="Comment"
        className="blockNowForm2_textarea"
      ></textarea>
      <button
        onClick={() => {
          changeLocalStorage(false);
        }}
        className="blockNowForm2_btn"
      >
        Book now
      </button>
    </div>
  );
};

export default BlockNowForm2;
