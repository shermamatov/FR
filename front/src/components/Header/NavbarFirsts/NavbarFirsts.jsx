import React from "react";
import "./NavbarFirsts.scss";

const NavbarFirsts = () => {
    return (
        <div className="upNavbar">
            <div>
                <p>
                    73 Canal Street, Los Angales, CA{" "}
                    <span className="upn_change">change</span>
                </p>

                <h3>
                    <span>20%</span> Todays special Deal in your city
                </h3>
            </div>
        </div>
    );
};

export default NavbarFirsts;
