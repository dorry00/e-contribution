import React from "react";
import "../App.css";
import Contribution from "./Contribution"

function SingleContribution({contributions}) {
  return (
    <div>
     {
         contributions.map((contribution)=>(
             <Contribution key = {contribution.id}contribution={contribution}/>
         )
         )
     }
    </div>
  );
}

export default SingleContribution;
