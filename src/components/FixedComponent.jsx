import React from "react";
import "./Fixed.css";

const FixedComponent = () => {
  return (
    <div className="fixed-main">
      <div className="content-wrapper">
        <h2 className="heading">
          Grow your startup like crazy without giving up a penny of equity.
        </h2>
        <a className="cta-button" href="#">
          Let's do this
          <span className="button-icon">
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              className="icon"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default FixedComponent;
