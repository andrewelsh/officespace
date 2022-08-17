import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <div className="header">
      <div>
        <div className="logo">OFFICE SPACE</div>
        <div className="logo-subtitle">clean. quick. easy</div>
        <FontAwesomeIcon className="barsIcon" icon={faBars} />
      </div>
      <img
        className="login-image"
        src="https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg"
        alt="default profile"
      />
      <div className="loginText">Sign Out</div>
    </div>
  );
};

export default Header;
