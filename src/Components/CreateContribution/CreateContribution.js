import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./CreateContribution.css";


function CreateContribution() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [paymentoption, setPaymentOption] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  
  

  async function handleCreateContribution(e) {
    e.preventDefault();
    setErrors([])
    setLoading(true)
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
        if(response.data.error){
        setErrors(response.data.error)
        }
     
        setLoading(false)

        if (response.data.success === true) {
          swal({
            title: "Success",
            text: "Succefully created a contribution! We will verify it very soon! ",
            icon: "success",
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
      
   
    <div className="createContribution">
             <div className="createContributionWrapper">
        <h1 className="formTitle">Create A Contribution</h1>
      <form className="formInputs" > 
      
      
          

        <div className="inputs">
       
        <span className="errorMessage">{errors.title}</span>
         
          
          <input
         
            type="text"
            placeholder="Enter a contribution title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            title="title"
            className="input"
            autoComplete="true"
          />
          <span className="errorMessage">{errors.targetAmount}</span>
         
         
          <input
            type="text"
            placeholder="Enter a target amount..."
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            name="targetamount"
            required
            className="input"
            autoComplete="true"
          />
          <span className="errorMessage">{errors.paymentoption}</span>
          
           <input
          type="paymentOption"
          placeholder=" paymentOption"
          name="psw"
          value={paymentoption}
          onChange={(e) => setPaymentOption(e.target.value)}
          required
          className="input"
          autoComplete="true"
        />
       

        </div>   
        


          
          
        
        
        <div className="textareas">
        <span className="errorMessage">{errors.description}</span>
          <textarea
            type="text"
            id="description"
            className="textarea"
           placeholder="Enter a description for your contribution... "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            required
            autoComplete="true"
          />
         
        </div>
        

       
        <button className="formButton" type="submit" onClick={handleCreateContribution}>
            {loading && "Creating Contribution ..."}
            {!loading && "create contribution"}
           
          </button>
          
        
        
      </form>
     

    </div>
   
    </div> 
    </div>
    </>
  );
}

export default CreateContribution;

