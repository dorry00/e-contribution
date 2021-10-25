import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleContribution from "../Components/SingleContribution"
import "../App.css";
import Loading from "../Components/Loading/Loading";

export default function ViewallContributions() {
  const [loading, setLoading] = useState(true);
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://msaadaproject.herokuapp.com/api/all/contributions"
      );
      setContributions(response.data.list);
      setLoading(false);
    };

    fetchContributions();
  }, []);



  return (
    <>
      <div className="contributionsContainer">
        
        <div className="contributions">
          <h1 className="contributionHeader">Verified contributions</h1>
          <hr className="hr"/>
         
          {loading && <Loading/>}
          <SingleContribution contributions={contributions} />
        </div>
      </div>
    </>
  );
}
