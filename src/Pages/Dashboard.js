import React from "react";
import "./style/dashboard.css";
import CreateContribution from "../Components/CreateContribution/CreateContribution";
import Sidebar from "../Components/Sidebar";
import ViewallContributions from "../Components/ViewallContributions";

function Dashboard() {
  return (
    <div className="dashboardContainer">
      <Sidebar />
      <CreateContribution />
      <ViewallContributions />
    </div>
  );
}

export default Dashboard;
