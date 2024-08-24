import React, { useState } from "react";
import "./AppNavbar.css";

const AppNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  function toggleUserOptions() {
    setShowUserOptions(!showUserOptions);
  }

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`sidebar-main sidebar ${showSidebar ? "d-block" : "d-none"}`}
      >
        <div className="text-end p-2">
          <button className="btn btn-secondary " onClick={toggleSidebar}>
            X
          </button>
        </div>

        <div className="d-flex flex-column">
          <a href="#" className="side-link">
            Founder
          </a>
          <a href="#" className="side-link">
            Idea
          </a>
          <a href="#" className="side-link">
            Formation
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="d-flex align-items-center">
          {/* Hamburger Icon */}
          <div
            style={{
              width: "25px",
              marginRight: "10px",
              marginLeft: "10px",
              cursor: "pointer",
            }}
            className="hamburger-div"
            onClick={toggleSidebar}
          >
            <svg
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              width="25px"
            >
              <rect fill="#fff" height="1" width="11" x="0.5" y="2.5"></rect>
              <rect fill="#fff" height="1" width="11" x="0.5" y="5.5"></rect>
              <rect fill="#fff" height="1" width="11" x="0.5" y="8.5"></rect>
            </svg>
          </div>

          {/* Logo */}
          <a className="navbar-brand main-logo" href="#">
            Startups.com
          </a>
        </div>

        <div className="ml-auto d-flex align-items-center position-relative d-lg-none">
          <div
            style={{
              cursor: "pointer",
              marginRight: "10px",
            }}
            className="user-icon-div"
            onClick={toggleUserOptions}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              width="30px"
            >
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z" />
            </svg>
          </div>

          {showUserOptions && (
            <div className="user-options-dropdown position-absolute bg-dark text-white p-2 rounded">
              <button className="btn btn-dark btn-block mb-2">Sign In</button>
              <button className="btn btn-dark btn-block">Sign Up</button>
            </div>
          )}
        </div>

        {/* Navbar Links (Desktop) */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item nav-mid-field">
              <a className="nav-link" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item nav-mid-field">
              <a className="nav-link" href="#community">
                Community
              </a>
            </li>
            <li className="nav-item nav-mid-field">
              <a className="nav-link" href="#library">
                Library
              </a>
            </li>
            <li className="nav-item nav-mid-field">
              <a className="nav-link" href="#products">
                Products
              </a>
            </li>
          </ul>

          <button className="ml-2 sign-in">Sign In</button>
          <button className="ml-2 sign-up mr-2">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default AppNavbar;
