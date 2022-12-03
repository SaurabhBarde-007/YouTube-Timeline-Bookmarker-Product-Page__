import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logo_white from "../../Assets/logo_white.png";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [model, setModel] = useState(false);

  const modelOpenHandler = () => {
    setModel(true);
  };
  const modelCloseHandler = () => {
    setModel(false);
  };
  return (
    <>
      <nav className={classes.navbar}>
        <Link to="/" className={classes.img_container}>
          <img src={logo_white} alt="logo" className={classes.img} />
        </Link>
        <ul className={classes.nav_links_container}>
          <HashLink smooth to="#home" className={classes.nav_link_container}>
            HOME
          </HashLink>
          <HashLink smooth to="#about" className={classes.nav_link_container}>
            ABOUT
          </HashLink>
          <HashLink
            smooth
            to="#extension"
            className={classes.nav_link_container}
          >
            EXTENSION
          </HashLink>
          <HashLink smooth to="#footer" className={classes.nav_link_container}>
            CONTACT US
          </HashLink>
        </ul>
      
      </nav>
    </>
  );
};

export default Navbar;
