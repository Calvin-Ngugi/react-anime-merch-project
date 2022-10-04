import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function Navbar({ setIsLoggedIn }) {
  const history = useHistory();

  function handleLogout() {
    setIsLoggedIn(false);
    history.push("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container" style={{justifyContent: "space-between"}}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" exact activeStyle={{ background: "#def" }} className="nav-link">
                Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/about" exact activeStyle={{ background: "#def" }} className="nav-link">              
                About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/login" exact activeStyle={{ background: "#def" }} className="nav-link">
                Login
            </NavLink>
          </li>

        </ul>

        </div>
        <button
          onClick={handleLogout}
          className="btn btn-outline-danger"
          style={{width: "100px", marginLeft: "250px", marginRight: "100px"}}
        >
          Logout
        </button>
    </nav>
  );
}

export default Navbar;
