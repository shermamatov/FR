import React, { useState, useEffect } from "react";
import "./block5.css";
import "./block_adaptive.css";
import {
    services_list,
    services_list2,
    services_list3,
} from "../../../../const/consts";
const WordsFrom = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
            if (width < 740) {
                setHide(true);
            }
        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className={hide === false ? "services_block" : "services_block-2"}>
            <div
                className={
                    hide === false ? "services__wrapper" : "services__wrapper-2"
                }
            >
                <div className="container">
                    <div className="services__inner">
                        <div className="services__top">
                            <h2 className="services__title bord">
                                FR Services in <br /> Southern California
                            </h2>
                            <p className="services__desc bord">
                                The core SEO strategy has remained steady from
                                day one: provide high-quality content to website
                                visitors and be an authoritative thought leader
                                in the industry; creating new, highly-useful
                                content for the blog and landing pages; focusing
                                on on-page optimizations targeting high-value
                                search-terms.
                            </p>
                        </div>
                        <div className="services__bottom">
                            <ul className="services__list services__list--fc">
                                <li>
                                    <p>Wood Restoration</p>
                                </li>
                                {services_list.map((item) => (
                                    <li key={item.id}>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                            <ul
                                className={
                                    width < 740 && hide === false
                                        ? "services__list d-none"
                                        : "services__list"
                                }
                            >
                                {services_list2.map((item) => (
                                    <li key={item.id}>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                            <ul
                                className={
                                    width < 740 && hide === false
                                        ? "services__list d-none"
                                        : "services__list"
                                }
                            >
                                {services_list3.map((item) => (
                                    <li key={item.id}>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={width > 740 ? "d-none" : "btn_block"}>
                            {hide === false ? (
                                <button
                                    onClick={() => {
                                        setHide(true);
                                    }}
                                >
                                    Read more
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        setHide(false);
                                    }}
                                >
                                    Close
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordsFrom;
