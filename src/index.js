import React from "react";
import ReactDOM from "react-dom";
import ParallaxProvider from "react-scroll-parallax/cjs/components/ParallaxProvider";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
