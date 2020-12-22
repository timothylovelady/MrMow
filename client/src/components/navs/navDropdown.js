import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserContext from "../../context/userContext";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function NavDropdown(props) {
  const { signOut, loggedIn } = React.useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  var online = loggedIn ? (
    <div className="dropdown-text" onClick={() => signOut()}>
      Sign Out
    </div>
  ) : (
    <div className="dropdown-text" onClick={() => {}}>
      Sign In
    </div>
  );
  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      direction="down"
      className=""
    >
      <DropdownToggle
        className="toggler"
        style={{
          border: "none",
          backgroundColor: "transparent",
          outline: "none",
          textShadow: "2px 0 2px black",
        }}
      >
        <FontAwesomeIcon icon={faBars} className="menu-bars" />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>{online}</DropdownItem>
        <DropdownItem>
          <NavLink to="/Register" className="dropdown-text">
            Register
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/Blog" className="dropdown-text">
            Blog
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/contact" className="dropdown-text">
            Contact Us
          </NavLink>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
