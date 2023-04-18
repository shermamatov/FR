import React from "react";
import ServBlock1 from "./ServicesBlock/ServBlock1/ServBlock1";
import ServBlock3 from "./ServicesBlock/ServBlock3/ServBlock3";
import Servblock4 from "./ServicesBlock/ServBlock4/Servblock4";
import FrServer from "../Home/Blocks/Block4/FrServer";
import Block7 from "../Home/Blocks/Block7/Block7";
import Block6 from "../Home/Blocks/Block6/Block6";
import ServBlock5 from "./ServicesBlock/ServBlock5/ServBlock5";
import ServBlock2 from "./ServicesBlock/ServBlock2/ServBlock2";

const Services = () => {
  return (
    <div>
      <ServBlock1 />
      <ServBlock2 />
      <ServBlock3 />
      <Servblock4 />
      <FrServer />
      <ServBlock5 />
      <Block6 />
      <Block7 />
    </div>
  );
};

export default Services;
