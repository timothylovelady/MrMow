import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { faPinterest, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="container-fluid custom-footer justify-content-center">
      <div className="container-fluid text-center my-4 py-2">
        <NavLink to="/Blog" className="badge badge-pill text-white mx-2">
          | Blog |
        </NavLink>
        <NavLink to="/Archive" className="badge badge-pill text-white mx-2">
          | Archive |
        </NavLink>
        <NavLink to="/Login" className="badge badge-pill text-white mx-2">
          | Sign In |
        </NavLink>
        <NavLink to="/Register" className="badge badge-pill text-white mx-2">
          | Register |
        </NavLink>
        <NavLink to="/contact" className="badge badge-pill text-white mx-2">
          | Contact Us |
        </NavLink>
      </div>
      <p className="text-center footer-text">
        <FontAwesomeIcon icon={faCopyright} className="footer-copyright" />
        <i> Mr Mow.com 2020</i>
      </p>
    </div>
  );
}
export default Footer;
