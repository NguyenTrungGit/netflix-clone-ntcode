/*eslint-disable*/
import "./Nav.css";
import React, { useEffect, useState } from "react";

function nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__show"}`}>
      <img
        className="nav__logo nav__brand"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__logo nav__avatar"
        src="https://www.seekpng.com/png/full/514-5147412_default-avatar-icon.png"
        alt="Avatar"
      />
    </div>
  );
}

export default nav;
/*eslint-disable*/
