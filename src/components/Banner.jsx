import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-bg">
      <div className="text-center banner-topmost-div">
        <h1
          className="banner-h1"
          style={{ color: "#849FAD", fontWeight: "bold" }}
        >
          Online <span className="banner-span">Startup Accelator</span>
        </h1>
      </div>
      <div
        className="text-center banner-extra"
        style={{ color: "rgb(190, 154, 148)" }}
      >
        Grow your startup like crazy without giving up a penny of equity.
      </div>
      <img
        src="https://dq2uhp934kg74.cloudfront.net/production/20240813-1017/img/538a4912e09dd3ccaa7af3dbe6177114/how-it-works-w-labels.png"
        alt=""
      />
    </div>
  );
};

export default Banner;
