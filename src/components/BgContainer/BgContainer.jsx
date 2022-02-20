import React from "react";
import { FixedBg } from "./BgContainer.styles";
import background from "../../assets/collage.png";

const BgContainer = ({ children }) => {
  return <FixedBg style={{ backgroundImage: `url(${background})` }} />;
};

export default BgContainer;
