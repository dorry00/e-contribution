import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleContribution from "./SingleContribution";
import Sidebar from "./Sidebar";
import "../App.css";
export default function ViewallContributions() {
  const [loading, setLoading] = useState(true);
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      setLoading(true)
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
          <Sidebar/>
    <div className="contributions">
      <h1 className="contributionHeader">View all contributions</h1>
      {loading && "loading"}

      <SingleContribution contributions={contributions} />
    </div>
    </div>

    </>
  );
}
