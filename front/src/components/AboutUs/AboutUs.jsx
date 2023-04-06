import React from "react";
// block start
import FamilyOwners from "./BlockUs1/FamilyOwners";
import WelcomeTo from "./BlockUs2/WelcomeTo";
import Location from "./BlockUs3/Location";
// block end
// строго использовать css.module

const AboutUs = () => {
    return (
        <div>
            <FamilyOwners />
            <WelcomeTo />
            <Location />
        </div>
    );
};

export default AboutUs;
