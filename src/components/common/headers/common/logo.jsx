import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../../assets/images/logo.png";

function LogoImage(props) {
  return (
    <Link to={`${process.env.PUBLIC_URL}/`}>
      <img src={logo} alt="logo" className="img-fluid" width="50" />
    </Link>
  );
}

export default LogoImage;
