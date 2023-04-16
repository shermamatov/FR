import React, { useState } from "react";
import Slider from "react-slick";
import "./BlockNowForm2.css";
const BlockNowForm2 = ({ changeLocalStorage }) => {
    const [day, setDay] = useState(3);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div>
            <h2> Multiple items </h2>
            <Slider {...settings}>
                <div
                    className="date_block"
                    onClick={() => {
                        setDay(20);
                        console.log(day);
                    }}
                >
                    <h2>ponedelnik</h2>
                    <h1>20</h1>
                </div>
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
                <div
                    className="date_block"
                    onClick={() => {
                        setDay(26);
                        console.log(day);
                    }}
                >
                    <h2>voskresenie</h2>
                    <h1>26</h1>
                </div>
            </Slider>
        </div>
    );
};

export default BlockNowForm2;
