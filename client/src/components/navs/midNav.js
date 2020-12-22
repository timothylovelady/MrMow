/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MidNav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="container-fluid main-container pt-2 pb-5">
        <div className="container-fluid text-center my-4 py-2">
          <NavLink to="/Blog" className="badge badge-pill glass mx-2">
            Blog
          </NavLink>
          <NavLink to="/Archive" className="badge badge-pill glass mx-2">
            Archive
          </NavLink>
          <NavLink to="/Login" className="badge badge-pill glass mx-2">
            Sign In
          </NavLink>
          <NavLink to="/Register" className="badge badge-pill glass mx-2">
            Register
          </NavLink>
          <NavLink to="/testBlog" className="badge badge-pill glass mx-2">
            Test Blog
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MidNav;
