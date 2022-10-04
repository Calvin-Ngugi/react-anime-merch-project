import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function Navbar({ setIsLoggedIn }) {
  const history = useHistory();

  function handleLogout() {
    setIsLoggedIn(false);
    history.push("/login");
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item" style={{ width: "100px" }}>
            <NavLink
              to="/"
              exact
              activeStyle={{ background: "#def" }}
              className="nav-link"
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item" style={{ width: "100px" }}>
            <NavLink
              to="/about"
              exact
              activeStyle={{ background: "#def" }}
              className="nav-link"
            >
              About
            </NavLink>
          </li>

          <li className="nav-item" style={{ width: "100px" }}>
            <NavLink
              to="/cart"
              exact
              activeStyle={{ background: "#def" }}
              className="nav-link"
            >
              Cart
            </NavLink>
          </li>

          <li className="nav-item" style={{ width: "100px" }}>
            <NavLink
              to="/login"
              exact
              activeStyle={{ background: "#def" }}
              className="nav-link"
            >
              Login
            </NavLink>
          </li>
        </ul>

        <button
          onClick={handleLogout}
          className="btn btn-outline-danger"
          style={{ width: "100px" }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
