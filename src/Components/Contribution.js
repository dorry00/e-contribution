import React from "react";
import "../App.css";
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
                <Link className="link" to={`/dashboard/profile/`}>
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
        <Link to ={ `/contribution/${contribution.id}`}>

        <h6 className="contributionTitle">{contribution.title}</h6>
        </Link>

        <p className="contributionDescription">
          Our clients are the companies and startups who make the world go round
          – they treat diseases, move parcels, insure cars, process payments,
          create jobs, rent homes and publish news. Vast and complex businesses
          like these need digital experiences that are just as people-friendly
          as they are robust and scalable. Our clients are the companies and
          startups who make the world go round – they treat diseases, move
          parcels, insure cars, process payments, create jobs, rent homes and
          publish news. Vast and complex businesses like these need digital
          experiences that are just as people-friendly as they are robust and
          scalable. 
        </p>
        {/* <p className="contributionDescription">{contribution.description}</p> */}
        <div className="paymentInfo">
        <span className="paymentOption">Payment Option:{contribution.paymentoption}</span>
        <span className="targetAmount">Target Amount : {contribution.targetAmount}</span>
        </div>
        <img src="../Assets/Images/mpesa-seeklogo.com.svg" alt=""/>
        <div className="editContribution">
          <i className=" contributionIcon  far fa-edit"></i>
          <i className=" contributionIcon fas fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
}

export default Contribution;
