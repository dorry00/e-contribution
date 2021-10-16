import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  //register a user
  async function RegisterUser(e) {
    e.preventDefault();
    setErrors([]);                   
    let userDetails = { name, email, phone, password };

    axios
      .post("https://msaadaproject.herokuapp.com/api/register", userDetails)
      .then(function (response) {
        console.log(response.data);
response.data.success && window.location.replace("/login");
      //   if (response.data.success === true) {
      //     swal({
      //       title: "Success",
      //       text: "You have succefully created an account!",
      //       icon: "success",
      //     });
      //   } else {
      //     setErrors(response.data.error);
      //   }
      !response.data.success && setErrors(response.data.error);
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <div class="center">
        <h1>Sign Up</h1>
        <form>
          <div className="txt_field">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
            <span className="error-message">{errors.name}</span>
            <label>Name</label>
          </div>

          <div className="txt_field">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              autoComplete="true"
            />
            <span className="error-message">{errors.email}</span>
            <label>Email</label>
          </div>

          <div className="txt_field">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              autoComplete="true"
            />
            <span className="error-message">{errors.phone}</span>
            <label>Phone Number</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="true"
            />
            <span className="error-message">{errors.password}</span>

            <label>Password</label>
          </div>
          <input
            type="submit"
            onClick={RegisterUser}
            value="Sign Up to Msaada App"
          />
          <div className="signup_link">
          Have an account?
          <Link className="link" to="/login">
            Log In 
          </Link>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
