import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faPinterest, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
  return (
    <div className="social_links">
      <div>
        <NavLink to="/">
          <FontAwesomeIcon icon={faPinterest} className="social-link" />
        </NavLink>
      </div>
      <div>
        <NavLink to="" className="">
          <FontAwesomeIcon icon={faFacebook} className="social-link" />
        </NavLink>
      </div>
    </div>
  );
}
