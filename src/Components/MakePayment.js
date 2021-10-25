import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import swal from "sweetalert";
export default function MakePayment() {
  const { user } = useContext(AuthContext);
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = [];
let PaymentDetails;
  async function handlePayment(e) {
    e.preventDefault();

    if(user !== null){

      PaymentDetails = {
        phone: user.phone,
        amount,
      };
    }else{
      
   PaymentDetails = {
      phone: phone,
      amount,
    };
    }


    axios
      .post("https://msaadaproject.herokuapp.com/api/pay", PaymentDetails)
      .then(function (response) {
        console.log(response.data);

        if (response.data.responceStatusCode === "200") {
          swal({
            title: "Success",
            text: "Please input a pin on your phone to complete the donation!",
            icon: "success",
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
        {!user && (
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        )}

        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" onClick={handlePayment}>
          Make contribution
        </button>
      </form>
    </div>
  );
}
