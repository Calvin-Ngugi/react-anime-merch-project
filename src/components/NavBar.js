import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function Navbar({ setIsLoggedIn, isLoggedIn }) {
  const history = useHistory();

  function handleLogout() {
    setIsLoggedIn(false);
    history.push("/login");
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container">
        <button
          className="navbar-toggler mb-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ width: "60px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
            </ul>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="btn btn-outline-danger"
                style={{ width: "100px" }}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn btn-outline-success"
                style={{ width: "100px" }}
              >
                <NavLink
                  to="/login"
                  exact
                  className="nav-link"
                >
                  Login
                </NavLink>
              </button>
            )} 
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
