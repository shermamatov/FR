import React, { useState } from "react";
import Slider from "react-slick";
import "./BlockNowForm2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const BlockNowForm2 = ({ changeLocalStorage }) => {
  const [day, setDay] = useState(3);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="blockNowForm2">
      <p className="blockNowForm2_choose">Choose day and time</p>
      <h2 className="blockNowForm2_month">
        <button className="date_block-wrapper-prev-btn">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>{" "}
        February{" "}
        <button className="date_block-wrapper-next-btn">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </h2>
      <div className="date_block-wrapper">
        <button className="date_block-wrapper-prev-btn">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <Slider {...settings}>
          <div>
            <div
              className="date_block"
              onClick={() => {
                setDay(20);
                console.log(day);
              }}
            >
              <h2>pon</h2>
              <h1>20</h1>
            </div>
          </div>

          <div>
            <div
              className="date_block"
              onClick={() => {
                setDay(21);
                console.log(day);
              }}
            >
              <h2>vtornik</h2>
              <h1>21</h1>
            </div>
          </div>

          <div>
            <div
              className="date_block"
              onClick={() => {
                setDay(22);
                console.log(day);
              }}
            >
              <h2>sreda</h2>
              <h1>22</h1>
            </div>
          </div>

          <div>
            <div
              className="date_block"
              onClick={() => {
                setDay(23);
                console.log(day);
              }}
            >
              <h2>chetverg</h2>
              <h1>23</h1>
            </div>
          </div>

          <div>
            <div
              className="date_block"
              onClick={() => {
                setDay(24);
                console.log(day);
              }}
            >
              <h2>pyatnica</h2>
              <h1>24</h1>
            </div>
          </div>

          <div>
            <div
              className="date_block"
              onClick={() => {
                setDay(25);
                console.log(day);
              }}
            >
              <h2>subota</h2>
              <h1>25</h1>
            </div>
          </div>

          <div>
            <div
              className="date_block"
              onClick={() => {
                setDay(26);
                console.log(day);
              }}
            >
              <h2>voskr</h2>
              <h1>26</h1>
            </div>
          </div>
        </Slider>
        <button className="date_block-wrapper-next-btn">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <h2 className="blockNowForm2_time">
        Select time for Monday, February 20
      </h2>
      <div className="blockNowForm2_time_wrapper">
        <p className="blockNowForm2_time_item">8 am - 11 am</p>
        <p className="blockNowForm2_time_item">11 am - 2 pm</p>
        <p className="blockNowForm2_time_item">2 pm - 5 pm</p>
        <p className="blockNowForm2_time_item">5 pm - 8 pm</p>
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
