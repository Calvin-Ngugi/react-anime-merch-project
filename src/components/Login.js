import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoggedIn(true);
    // after logging the user in, redirect to the home page!
    history.push("/");
  }

  return (
    <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <h3>Sign Up</h3>
              <div className="mb-3 mt-3">
                <label>Username</label>
                <input
                  type="name"
                  className="form-control"
                  name="name"
                  required
                  placeholder="Enter your username"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required
                  placeholder="Enter Email"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  required
                  placeholder="Enter password"
                  onChange={handleChange}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;
