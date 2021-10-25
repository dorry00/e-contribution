import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { LoginCall } from "../../ApiCalls";
import { AuthContext } from "../../Context/AuthContext"
import "../../App.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, error, isFetching, dispatch } = useContext(AuthContext);
  async function LoginUser(e) {
    e.preventDefault();
    LoginCall({ email, password }, dispatch);
    console.log(user);
    user && window.location.replace("/contributions");
  }
  return (
    <div className="center">
      <h1>Login</h1>
      <form method="post">
        <div className="txt_field">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="true"
          />

          <label>Email</label>
        </div>
        <div class="txt_field">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="true"
          />

          <label>Password</label>
        </div>
        {error && (
          <span className="error-message">*wrong login credentials</span>
        )}
        <div className="pass">
          <a href="#">Forgot password?</a>
        </div>
        <button
          className="loginBtn"
          type="submit"
          disabled={isFetching}
          onClick={LoginUser}
        >
          Login to Msaada App
        </button>
        <div className="signup_link">
          Don't have an account?{" "}
          <Link className="link" to="/register">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
