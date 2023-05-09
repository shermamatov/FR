import React, { useEffect } from "react";
import "./NavbarFirsts.scss";
import { getCurrentLocation } from "../../../redux/reducers/app";
import {useDispatch, useSelector} from "react-redux";
const NavbarFirsts = () => {
    const dispatch = useDispatch()
    const currentLocation = useSelector(s => s.app.currentLocation)
    // const [currentLocationstate, setCurrentLocation] = useState('');
    useEffect(() => {
        dispatch(getCurrentLocation())
    }, []);
    useEffect(()=>{
        console.log(currentLocation);
    }, [currentLocation])
    return (
        <div className="upNavbar">
            <div>
                <p>
                    73 Canal Street, {currentLocation.city}, {currentLocation.region}{" "}
                    <span className="upn_change" >change</span>
                </p>

                <h3>
                    <span>20%</span> Todays special Deal in your city
                </h3>
            </div>
        </div>
    );
};

export default NavbarFirsts;
