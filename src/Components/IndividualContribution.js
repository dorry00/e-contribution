import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

function IndividualContribution() {

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [contribution, setContribution] = useState({});
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [targetAmount,setTargetAmount] = useState("")
  const [paymentoption,setPaymentOption]=useState("");
  const [updateMode,setUpdateMode]=useState(false);


  // fetch a single post
  useEffect(() => {
    let id = { id: path };
    const getContribution = async () => {
      const res = await axios.post(
        "https://msaadaproject.herokuapp.com/api/view/contribution",
        id
      );
      console.log(res.data.response);
      setContribution(res.data.response);
      setTitle(res.data.response.title);
      setDescription(res.data.response.description);
      setTargetAmount(res.data.response.targetAmount);
      setPaymentOption(res.data.response.paymentoption)

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
      res.data && window.location.replace("/contribuitions")
    } catch (err) {
      console.log(err);
    }
  };

// handle update
  const handleUpdate = async () =>{
    let id =  path;

    let updatedDetails = {
      id,
      title,                
      description,
      targetAmount,
      paymentoption,
      verified:true

    }
    try {
      const res = await axios.post(
       "https://msaadaproject.herokuapp.com/api/update/contribution",
        updatedDetails
      
      );
      console.log(res.data.response)
      res.data.success  && window.location.reload() 
    } catch (error) {
      console.error(error.response);
    }
  };

  // }



  // end of delete
  return (
    <div>
      <p>
        working
        {contribution.targetAmount}
        {
          updateMode? (
          
          <div className="updateContribution">
          
          <form>
          <input type="text" value ={title} onChange={(e)=>setTitle(e.target.value)}/>
          <textarea type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
          <input type="text" value={targetAmount} onChange={(e)=>setTargetAmount(e.target.value)}/>
          <input type="text" value={paymentoption} onChange={(e)=>setPaymentOption(e.target.value)} />
          <button onClick={handleUpdate}>Edit</button>
          </form>
          </div>
          )
          :
          (
          <div className="editContribution">
          <i className=" contributionIcon  far fa-edit" onClick={()=>setUpdateMode(true)}></i>
          <i
            className=" contributionIcon fas fa-trash-alt"
            onClick={handleDelete}
          ></i>
        </div>
          )
        }
      </p>
      
    </div>
  );
}

export default IndividualContribution;
