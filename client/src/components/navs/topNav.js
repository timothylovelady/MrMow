/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="container-fluid pt-2">
        <div className="container-fluid text-center my-4 py-2">
          <NavLink to="/" className="mx-2">
            Home
          </NavLink>
          <NavLink to="/services" className="mx-2">
            Services
          </NavLink>
          <NavLink to="/appointments" className="mx-2">
            Appointments
          </NavLink>
          <NavLink to="/login" className="mx-2">
            Sign In
          </NavLink>
          <NavLink to="/register" className="mx-2">
            Register
          </NavLink>
          <NavLink to="/contact" className="mx-2">
            Contact Us
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TopNav;
