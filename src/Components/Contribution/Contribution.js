import React from "react";
import "./Contribution.css";
import { Link } from "react-router-dom";

function Contribution({ contribution }) {
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
            <i className="fas fa-ellipsis-v"></i>
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
        <Link to={`/contribution/${contribution.id}`} className="link">
        <button className="viewBtn">view contribution</button>
        </Link>
      </div>
    </div>
  );
}

export default Contribution;