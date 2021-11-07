import React,{useContext,useState,useEffect} from "react";
import "./Contribution.css";
import axios from "axios"
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

function Contribution({ contribution}) {
  const {user} = useContext(AuthContext);
  const [admin, setAdmin]=useState(false)
  const [loading,setLoading]= useState(false)
  const[verified,setVerified ] =useState(false)
  
 
  useEffect(() => {
     if(user.email === "admin@msaada.com"){
    setAdmin(true)
  }
  if(contribution.verified === "1"){
    setVerified(true)
  }
    
    
  }, [user.email,contribution.verified])

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true)
    
    let updatedDetails = {
      id: contribution.id,
      title: contribution.title,
      description: contribution.description,
      targetAmount: contribution.targetAmount,
      paymentoption: contribution.paymentoption,
      verified: 1,
    }
    await axios.post(
      "https://msaadaproject.herokuapp.com/api/update/contribution", updatedDetails
    );
    setLoading(false)
    window.location.reload()
    
  };

  return (
    <div className="contribution">
      <div className="contribuitionWrapper">
        <div className="postTop">
          <div className="topLeft">
            <i className=" profileLogo fas fa-user"></i>
            <div className="nameInfo">
              <span className="profileName">
                <Link className="link" to={`/dashboard/accountDetails/`}>
                  
                  Dorry Elmah
                </Link>
              </span>
              <span className="contributionDate">
                {new Date(contribution.created_at).toDateString()}
              </span>
            </div>
          </div>

          <div className="topRight">
           {verified && "verified"}
          </div>
        </div>

        <div className="creationInfo"></div>
       
          <h6 className="contributionTitle">{contribution.title}</h6>
      

        <p className="contributionDescription">{contribution.description}</p>

        <div className="paymentInfo"></div>
        <div className="amount">
          <div className="raised">
            <h2 className="header"> kes 10,000</h2>
            <span className="headerSpan">raised</span>
          </div>
          <div className="needed">
            <h2 className="header">kes 10,200</h2>
            <span className="headerSpan">needed</span>
          </div>
        </div>
        <div className="contributionBtns">
        <Link to={`/contribution/${contribution.id}`} className="link">
        <button className="viewBtn">view donation</button>
        </Link>
        {
          (admin && !verified) && 
        <button className="verify" onClick={handleVerify}>{loading && "verifying"} {!loading && "verify donation"}</button>
        }
        </div>
       
      </div>
    </div>
  );
}

export default Contribution;