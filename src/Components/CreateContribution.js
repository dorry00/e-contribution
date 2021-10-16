import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "../App.css";

import ViewallContributions from "./ViewallContributions";
import Sidebar from "./Sidebar";

function CreateContribution() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [paymentoption, setPaymentOption] = useState("");
  const [errors, setErrors] = useState([]);

  async function handleCreateContribution(e) {
    e.preventDefault();
    let contributionDetails = {
      title,
      description,
      targetAmount,
      paymentoption,
    };

    axios
      .post(
        "https://msaadaproject.herokuapp.com/api/create/contribution",
        contributionDetails
      )
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
    <>
    <div className="createContributionContainer">
      <Sidebar/>
   
    <div className="createContribution">
      <form className="contribuitionForm">
        <h1 className="formTitle">Create A Contribution</h1>

        <div className="formItem">
          <label htmlFor="title">
            contribution title:
          </label>
          <input
            type="text"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            title="title"
            required
            autoComplete="true"
          />
        </div>
        <span>{errors.title}</span>
        <div className="formItem">
          <label htmlFor="description">
           description
          </label>
          <textarea
            type="text"
            id="description"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            required
            autoComplete="true"
          />
          <span>{errors.description}</span>
        </div>

        <div className="formItem">
          <label htmlFor="psw">
            target amount
          </label>
          <input
            type="text"
            placeholder="Enter target amount..."
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            name="targetamount"
            required
            autoComplete="true"
          />
          <span>{errors.targetamount}</span>
        </div>
        <div className="formItem">

        <label htmlFor="paymentoption">
         payment Option
        </label>
        <input
          type="paymentOption"
          placeholder=" paymentOption"
          name="psw"
          value={paymentoption}
          onChange={(e) => setPaymentOption(e.target.value)}
          required
          autoComplete="true"
        />
        <span>{errors.paymentoption}</span>
</div>
        <div className="formItem">
          <button className="formBtn" type="submit" onClick={handleCreateContribution}>
            create contribution
          </button>
          </div>
        
      </form>

    </div>
    </div>
    </>
  );
}

export default CreateContribution;
