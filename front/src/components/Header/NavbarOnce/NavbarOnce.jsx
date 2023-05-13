import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import "./NavbarOnce.scss";
import navLogo from "../../../images/navLogo.png";
import menuIcon from "../../../images/menu.png";
import { useLocation, useNavigate, Link } from "react-router-dom";
import NavbarModal from "../NavbarModal/NavbarModal";
import strela from "../../../images/strelka.png";
import {getServices} from '../../../redux/reducers/app';
const NavbarOnce = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentLocation = useSelector((s) => s.app.currentLocation);
    const [burger, setBurger] = useState(false);
    const [modal, setModal] = useState(false);
    const { pathname } = useLocation();
    useEffect(()=>{
        dispatch(getServices())

    }, [])
    return (
        <>
            <div className="navbar">
                <div className="navbar_left_block">
                    <img
                        src={navLogo}
                        style={{ cursor: "pointer" }}
                        alt=""
                        onClick={() => navigate("/")}
                    />
                </div>
                <div
                    className="navbar_right_block"
                    onMouseLeave={() => setModal(false)}
                >
                    <div className="adap_logo_block">
                        <img
                            onClick={() => navigate("/")}
                            src={navLogo}
                            alt=""
                        />
                    </div>
                    <div className="navbar_navigate">
                        <div
                            onClick={() => navigate("/about_us")}
                            className="has__border"
                            onMouseLeave={() => setModal(false)}
                        >
                            ABOUT US
                            <div
                                className="linia"
                                style={{
                                    width: `${
                                        pathname == "/AboutUs" ? "50%" : "0%"
                                    }`,
                                }}
                            ></div>
                        </div>
                        <div
                            className="has__border serv "
                            onClick={() => navigate("/services")}
                            onMouseOver={() => setModal(true)}
                            // onMouseLeave={() => setModal(false)}
                        >
                            <p className="serv">SERVICES </p>
                            <img
                                style={{
                                    transform: `${
                                        modal
                                            ? "rotate(-360deg)"
                                            : "rotate(-180deg)"
                                    }`,
                                }}
                                src={strela}
                                alt=""
                            />
                        </div>
                        <div
                            className="has__border"
                            onClick={() => navigate("/reviews")}
                            onMouseLeave={() => setModal(false)}
                        >
                            REVIEWS
                            <div
                                className="linia"
                                style={{
                                    width: `${
                                        pathname == "/reviews" ? "50%" : "0%"
                                    }`,
                                }}
                            ></div>
                        </div>
                        <div
                            className="has__border"
                            onClick={() => navigate("/blog")}
                            onMouseLeave={() => setModal(false)}
                        >
                            BLOG
                            <div
                                className="linia"
                                style={{
                                    width: `${
                                        pathname == "/blog" ? "50%" : "0%"
                                    }`,
                                }}
                            ></div>
                        </div>

                        <div
                            onClick={() => navigate("/photos")}
                            onMouseLeave={() => setModal(false)}
                        >
                            PROJECT PHOTOS
                            <div
                                className="linia"
                                style={{
                                    width: `${
                                        pathname == "/photos" ? "50%" : "0%"
                                    }`,
                                }}
                            ></div>
                        </div>
                        <NavbarModal setModal={setModal} modal={modal} />
                    </div>
                    <div className={"right_block_buttons"}>
                        <button className="number_btn">+1-818-888-10-10</button>
                        <button
                            className="book_btn"
                            onClick={() => {
                                navigate("/book_now");
                            }}
                        >
                            Book online now
                        </button>
                    </div>
                    <div
                        onClick={() => {
                            setBurger(true);
                        }}
                        className="menu_block"
                    >
                        <img src={menuIcon} width={"100%"} alt="" />
                    </div>
                </div>
            </div>
            <div
                className={
                    burger === false
                        ? "burger__menu"
                        : "burger__menu burger__menu--active"
                }
            >
                <div className="exit">
                    <button
                        onClick={() => {
                            setBurger(false);
                        }}
                    >
                        <span>&#128473;</span>
                    </button>
                </div>
                <div className="navbar_burger">
                    <div
                     onClick={() => navigate("/about_us")}
                    className="burger__link">ABOUT US</div>
                    <div
                     onClick={() => navigate("/services")}
                    className="burger__link serv">SERVICES </div>
                    <div
                     onClick={() => navigate("/reviews")}
                    className="burger__link">REVIEWS</div>
                    <div
                     onClick={() => navigate("/blog")}
                    className="burger__link">BLOG</div>
                    <div
                     onClick={() => navigate("/photos")}
                    className="burger__link">PROJECT PHOTOS</div>
                    <button
                        className="book_btn"
                        onClick={() => {
                            navigate("/book_now");
                        }}
                    >
                        Book online now
                    </button>
                </div>
            </div>
            <div className={window.innerWidth >= 769 ? "d-none" : "navbar"}>
                <div className="d-flex">
                    <Link to={'/location'}>
                        {
                            JSON.stringify(currentLocation) === '{}'
                            ? '...'
                            : `${currentLocation.location_name}, ${currentLocation.state ? currentLocation.state.name : ""} `

                        }
                    </Link>
                    <a href="tel:+18188881010">+1-818-888-10-10</a>
                </div>
            </div>
        </>
    );
};

export default NavbarOnce;
