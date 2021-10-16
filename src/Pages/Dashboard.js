import React, { useContext } from "react";
import "./style/dashboard.css";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import CreateContribution from "../Components/CreateContribution";
import MakePayment from "../Components/MakePayment";
import Sidebar from "../Components/Sidebar";
import ViewallContributions from "../Components/ViewallContributions";

function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <div className="dashboardContainer">
      <Sidebar />
      <CreateContribution />
      <ViewallContributions />
      {/* <p>helo {user.name}</p>
            <p>your email is {user.email}</p>
            <Link to="/">go home</Link>
            <Link to="/somewhere">go home</Link>
            <Link to="/dashboard/makepayment">pay</Link>
            
            <MakePayment/> */}
    </div>
  );
}

export default Dashboard;
