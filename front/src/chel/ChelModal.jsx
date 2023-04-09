import React, { useEffect, useState } from "react";
import "./chelModal.css";
import chelClose from "../images/chelClose.png";
import { useChel } from "../Contexts/ChelContext";
const ChelModal = ({ setChelModalState }) => {
    const {
        checked1,
        setCheked1,
        checked2,
        setCheked2,
        checked3,
        setCheked3,
        setCheked4,
        checked4,
    } = useChel();
    useEffect(() => {
        console.log(checked3);
    }, [checked3]);
    function reset() {
        setCheked1(false);
        setCheked2(false);
        setCheked3(false);
        setCheked4(false);
    }
    return (
        <div
            className="chel_modal_main_block"
            onClick={() => setChelModalState(false)}
        >
            <div className="chel_modal" onClick={(e) => e.stopPropagation()}>
                <img
                    onClick={() => setChelModalState(false)}
                    src={chelClose}
                    className="closeModal"
                    alt=""
                />
                <div className="chel_modal_block">
                    <h2>Accessibility Adjustments</h2>
                    <button onClick={reset} className="reset_btn">
                        reset settings
                    </button>
                    <div className="togle_main_block">
                        <h3>Choose the right accessibility profile for you</h3>
                        <div
                            className="togle_block"
                            style={{ marginTop: "30px" }}
                        >
                            <label className="togle">
                                <input
                                    type="checkbox"
                                    checked={checked1}
                                    onChange={() => setCheked1(!checked1)}
                                />
                                <span className="togler round"></span>
                            </label>
                            <div className="togle_block_text">
                                <h4>Seizure Safe Profile</h4>
                                <h5>Clear flashes & reduces color</h5>
                            </div>
                        </div>
                        <div className="togle_block">
                            <label className="togle">
                                <input
                                    type="checkbox"
                                    checked={checked2}
                                    onChange={() => setCheked2(!checked2)}
                                />
                                <span className="togler round"></span>
                            </label>
                            <div className="togle_block_text">
                                <h4>Cognitive Disability Profile</h4>
                                <h5>Assists with reading & focusing</h5>
                            </div>
                        </div>
                        <div className="togle_block">
                            <label className="togle">
                                <input
                                    type="checkbox"
                                    checked={checked3}
                                    onChange={() => setCheked3(!checked3)}
                                />
                                <span className="togler round"></span>
                            </label>
                            <div className="togle_block_text">
                                <h4>Vision Impaired Profile</h4>
                                <h5>Enhances website's visuals</h5>
                            </div>
                        </div>
                        <div
                            className="togle_block"
                            style={{ borderBottom: "none" }}
                        >
                            <label className="togle">
                                <input
                                    type="checkbox"
                                    checked={checked4}
                                    onChange={() => setCheked4(!checked4)}
                                />
                                <span className="togler round"></span>
                            </label>
                            <div className="togle_block_text">
                                <h4>monochrome</h4>
                                <h5>Clear flashes & reduces color</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blue_fone"></div>
            </div>
        </div>
    );
};

export default ChelModal;
