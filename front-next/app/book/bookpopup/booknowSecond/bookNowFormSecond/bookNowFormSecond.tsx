"use Client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./bookNowFormSecond.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
// import { useSelector } from "react-redux";

const BookNowFormSecond = ({
  //   changeLocalStorage,
  setFormData,
  formData,
  //   setMessage,
}) => {
  const [day, setDay] = useState({});
  const [dayOfWeek, setDayOfWeek] = useState("");
  const month = moment().format("MMMM");
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  function getNextFiveDays() {
    const monthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [];
    for (let i = 0; i < 3; i++) {
      const date = moment().add(i, "days");
      days.push({
        date: date.format("DD"),
        dayOfWeek: date.format("dddd"),
        month: monthList.indexOf(date.format("MMMM")),
      });
    }
    console.log(days);

    return days;
  }
  const timeSlots = () => {
    const slots = [];
    const start = moment("10:00", "HHmm");
    const end = moment("20:00", "HHmm");
    while (start.isBefore(end)) {
      const slot = {
        full: `${start.format("HHmm")} - ${start
          .add(2, "hour")
          .format("HHmm")}`,
        start: start.format("HHmm") - 200,
      };
      slots.push(slot);
    }
    console.log(slots);

    return slots;
  };

  const slots = timeSlots();
  const dates = getNextFiveDays();

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const settings2 = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const formatNum = (num) => {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  const bookNow = () => {
    const now = new Date();
    setFormData({
      ...formData,
      comment,
      time: `${now.getFullYear()}-${formatNum(day.month + 1)}-${
        day.date
      }T${`${time}`.slice(0, 2)}:00:00`,
    });
    if (comment && day && time && month) {
      setLoading(true);
      axios
        .post("https://itek-dev.highcat.org/api/bookings/", {
          ...formData,
          comment,
          time: `${now.getFullYear()}-${day.date}-${formatNum(
            day.month + 1
          )}T${`${time}`.slice(0, 2)}:00`,
        })
        .then((response) => {
          console.log(response);
          setMessage("application sent");
        })
        .catch((error) => {
          console.log(error);
          setMessage(
            "An error has occurred. Try again or contact our call center"
          );
        })
        .finally(() => {
          changeLocalStorage(false);
          setLoading(false);
        });
    }
  };

  return (
    <div className="blockNowForm2">
      <p className="blockNowForm2_choose">Choose day and time</p>
      {/* <h2 className="blockNowForm2_month"> */}
      <div className="mb-3">
        <div>
          <h2>{month}</h2>
        </div>
      </div>
      {/* </h2> */}
      <div className="date_block-wrapper flex">
        <button className="date_block-wrapper-prev-btn">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <Slider {...settings}>
          {dates.map((item, idx) => {
            return (
              <div key={idx}>
                <div
                  className="date_block"
                  onClick={() => {
                    setDay({
                      date: item.date,
                      month: item.month,
                    });

                    setDayOfWeek(item.dayOfWeek);
                  }}>
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
        Select time for {dayOfWeek}, {month} {day.date}
      </h2>
      <div className="blockNowForm2_time_wrapper">
        {slots.map((item) => {
          return (
            <p
              key={item.start}
              onClick={() => {
                setTime(item.start);
                console.log(item);
                console.log(time);
              }}
              className={
                item.start == time
                  ? "blockNowForm2_time_item blockNowForm2_time_item-active"
                  : "blockNowForm2_time_item"
              }>
              {item.full}
            </p>
          );
        })}
      </div>
      <textarea
        placeholder="Comment"
        className="blockNowForm2_textarea"
        onChange={(e) => {
          setComment(e.target.value);
        }}></textarea>

      {loading ? (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <button
          onClick={() => {
            bookNow();
          }}
          className="blockNowForm2_btn">
          Book now
        </button>
      )}
    </div>
  );
};

export default BookNowFormSecond;
