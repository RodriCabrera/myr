import React from "react";
import { FixedBg } from "./BgContainer.styles";
import background from "../../assets/eliylucho.jpeg";

const BgContainer = ({ children }) => {
  return <FixedBg style={{ backgroundImage: `url(${background})` }} />;
};

export default BgContainer;
