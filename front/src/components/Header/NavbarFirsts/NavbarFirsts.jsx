import React, { useEffect } from "react";
import "./NavbarFirsts.scss";
import { getCurrentLocation, getServices } from "../../../redux/reducers/app";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavbarFirsts = () => {
    const dispatch = useDispatch();
    const currentLocation = useSelector((s) => s.app.currentLocation);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getCurrentLocation());
    }, []);
    useEffect(() => {
        dispatch(getServices(currentLocation.id));
    }, [currentLocation]);
    return (
        <div className="upNavbar">
            <div>
                <p>
                    {JSON.stringify(currentLocation) === "{}" ? (
                        "..."
                    ) : (
                        <>
                            {`${currentLocation.location_name}, ${
                                currentLocation.state
                                    ? currentLocation.state.name
                                    : ""
                            } `}
                            <span
                                onClick={() => {
                                    navigate("/location");
                                }}
                                className="upn_change"
                            >
                                change
                            </span>
                        </>
                    )}
                </p>

                <h3>
                    <span>20%</span> Todays special Deal in your city
                </h3>
            </div>
        </div>
    );
};

export default NavbarFirsts;
