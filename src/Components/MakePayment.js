import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import swal from "sweetalert";
export default function MakePayment() {
    const { user } = useContext(AuthContext);
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = [];

  async function handlePayment(e) {
    e.preventDefault();
    let PaymentDetails = {
      phone:user.phone,
      amount,
    };

    axios
      .post("https://msaadaproject.herokuapp.com/api/pay", PaymentDetails)
      .then(function (response) {
        console.log(response.data);

        if (response.data.success === true) {
          swal({
            title: "Success",
            text: "You have succefully created a contrinution!",
            icon: "success",
          });
        } else {
          setErrors(response.data.error);
          swal({
            title: "Something went wrong",
            text: "we could not create your fundraiser!",
            icon: "error",
          });
        }
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  
  return (
    <div>
      <p>helo from payment</p>
      <form>
          {errors}
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" onClick={handlePayment}>Make contribution</button>
      </form>
    </div>
  );
}
