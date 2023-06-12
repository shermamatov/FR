"use client";
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

export default function BookNowFormSecond({
  setState,
  setFormData,
  formData,
  setMessage,
}: any) {
  const [day, setDay] = useState<any>({});
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
    for (let i = 0; i < 7; i++) {
      const date = moment().add(i, "days");
      days.push({
        date: date.format("DD"),
        dayOfWeek: date.format("dddd"),
        month: monthList.indexOf(date.format("MMMM")),
      });
    }
    return days;
  }
  // const timeSlots = () => {
  //     const slots = [];
  //     const start = moment("10:00", "HHmm");
  //     const end = moment("20:00", "HHmm");
  //     while (start.isBefore(end)) {
  //         const slot = {
  //             full: `${start.format("HHmm")} - ${start
  //                 .add(2, "hour")
  //                 .format("HHmm")}`,
  //             start: start.format("HHmm") - 200,
  //         };
  //         slots.push(slot);
  //     }
  //     return slots;
  // };
  const timeSlots = (): { full: string; start: string }[] => {
    const slots: { full: string; start: string }[] = [];
    const start = moment("10:00", "HHmm");
    const end = moment("20:00", "HHmm");
    while (start.isBefore(end)) {
      const slot = {
        full: `${start.format("HHmm")} - ${start
          .add(2, "hour")
          .format("HHmm")}`,
        start: (parseInt(start.format("HHmm")) - 200).toString(),
      };
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
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const settings2 = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const formatNum = (num: any) => {
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
      console.log(
        `${now.getFullYear()}-${day.date}-${formatNum(
          day.month + 1
        )}T${`${time}`.slice(0, 2)}:00`
      );

      setLoading(true);
      axios
        .post("https://1furniturerestoration.com/api/bookings", {
          ...formData,
          comment,
          time: `${now.getFullYear()}-${day.date}-${formatNum(
            day.month + 1
          )}T${`${time}`.slice(0, 2)}:00`,
        })
        .then((response) => {
          console.log(response);
          setMessage(
            "Your request has been accepted. Thanks for the application!"
          );
        })
        .catch((error) => {
          console.log(error);
          setMessage(
            "An error has occurred. Try again or contact our call center"
          );
        })
        .finally(() => {
          setState(false);
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
      <div className="date_block-wrapper mt-8 ">
        <button className="date_block-wrapper-prev-btn">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <Slider {...settings}>
          {dates.map((item, idx) => {
            return (
              <div key={idx}>
                <div
                  className={`date_block ${
                    day.date == item.date ? "active" : "neActive"
                  }`}
                  onClick={() => {
                    setDay({
                      date: item.date,
                      month: item.month,
                    });
                    console.log(day);

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

      <h2 className="blockNowForm2_time mt-20">
        Select time for {dayOfWeek}, {month} {day.date}
      </h2>
      <div className="blockNowForm2_time_wrapper mb-16">
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
}
