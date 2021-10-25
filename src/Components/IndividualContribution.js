import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Components/IndividualContribution/IndividualContribution.css"

function IndividualContribution() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [contribution, setContribution] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [paymentoption, setPaymentOption] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  // fetch a single post
  useEffect(() => {
    let id = { id: path };
    const getContribution = async () => {
      const res = await axios.post(
        "https://msaadaproject.herokuapp.com/api/view/contribution",
        id
      );
      
      setContribution(res.data.response);
      setTitle(res.data.response.title);
      setDescription(res.data.response.description);
      setTargetAmount(res.data.response.targetAmount);
      setPaymentOption(res.data.response.paymentoption);
    };
    getContribution();




    
  }, [path]);

  // delete a sigle contribution
  const handleDelete = async () => {
    let id = { id: path };
    try {
      const res = await axios.post(
        "https://msaadaproject.herokuapp.com/api/delete/contribution",
        id
      );
      console.log(res.data);
      res.data && window.location.replace("/contributions");
    } catch (err) {
      console.log(err);
    }
  };

  // handle update
  const handleUpdate = async () => {
    let id = path;
    let updatedDetails =
    {
      id,
      title,
      description,
      targetAmount,
      paymentoption,
      verified: 1 ,
    }
    
    try {
      const res = await axios.post(
        "https://msaadaproject.herokuapp.com/api/update/contribution",updatedDetails  
      );
      console.log(updatedDetails)
      if(res){
      console.log("working");
      }else{
        console.log("working");
      }
      
       setUpdateMode(false)
    } catch (error) {
      console.log(error.response);
    }
  };
  

  // }

  // end of delete
  return (
    <div className="IndividualContributionWrapper">
      <div className = "IndividualContribution">
      <h1 className="contributionHeader">{title}</h1>
      
      <p className="description">{description}</p>
      <p className="author">Contribution by <span>Dorry Elmah</span></p>
      <p classname="author">created on<span> {new Date(contribution.created_at).toDateString()} </span></p>
      <button type="submit" className="paymentButton">Donate</button>

      <div className="socialIcons">
         
  <Link className=" link ">
    <i className=" socialIcon fab fa-twitter"></i>
     </Link>
  
  <Link  className=" link ">
    <i className=" socialIcon fab fa-telegram"></i>
   
  </Link>
  <Link className=" link">
    <i className=" socialIcon fab fa-whatsapp"></i>
    
  </Link>
  <Link className="link">
     <i className="socialIcon fab fa-facebook"></i>
    
    </Link>
      </div>
      </div>


      <div className="otherDiv">
      <div className="amount-raised-container">
  <div className="amount-raised"><span className="amount-text">{targetAmount} /=</span> raised </div>
  <div className="dollars-per-mile">{targetAmount} /= needed</div>

  </div>
  


 {/* <div className="paymentDetails"> */}

      
      {updateMode ? (
        <div className="updateContributionForm">
          <form className="editForm">
            <input 
            className="input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            
            <input
              type="text"
              className="input"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
            />
            <input
              type="text"
              className="input"
              value={paymentoption}
              onChange={(e) => setPaymentOption(e.target.value)}
            />
            <textarea
              type="text"
              className="input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" onClick={handleUpdate}>Edit</button>
          </form>
         
        </div>
      ) : (
        <div className="editContribution">
          <i
            className=" contributionIcon  far fa-edit"
            onClick={() => setUpdateMode(true)}
          ></i>
          <i
            className=" contributionIcon fas fa-trash-alt"
            onClick={handleDelete}
          ></i>
        </div>
      )}
      </div>



<div> 
{/* </div> */}







     </div>
     
      


        

      
      
{/*       
        </div>
        <div>
        <input id="clickMe" type="checkbox" />
<label class="button" for="clickMe">Make donation</label>
<div className="modal">
  <label for="clickMe">x</label>
  <div className="form">
  <h2>Make Donation</h2>
  <form>
    <div className="left section">
      <input type="text" placeholder="Amount" required/>
      
      <input type="tel" name="tel" placeholder="Your telephone number" required/>
    </div>
    <div className="right section">
      < textarea name="comment" placeholder="Your comment" required/>
    </div>
    <button type="submit" className="sendForm left">Confirm payment</button>
    <label for="showForm" className="closeFormLabel left">Cancel</label>
  </form>
</div>
 
</div>
        </div>  */}
        </div>
        

      
  );
}

export default IndividualContribution;
