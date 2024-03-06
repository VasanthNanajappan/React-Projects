import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";
function Nav() {
  const [show, setShow] = useState(false);
  const history = useHistory();
  //Implemeting Scrolling Effect-if we on top it shows white bg then we scroll it appears black!
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src={require("./img/Netflix-img.png")}
          alt="Netflix-png"
        />

        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix-Avatar-logo"
        />
      </div>
    </div>
  );
}

export default Nav;
