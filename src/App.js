import "./App.css";
import { Route, Switch} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login/Login";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import { useContext, useState, useEffect} from "react";
import { AuthContext } from "./Context/AuthContext";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Navbar";

import ViewallContributions from "./Components/ViewallContributions";
import IndividualContribution from "./Components/IndividualContribution";
import AccountDetails from "./Components/AccountDetails/AccountDetails";
import Transactions from "./Components/Transactions/Transactions";
import UpdateAccount from "./Components/UpdateAccount/UpdateAccount";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Footer from "./Components/Footer/Footer";
import AllCompletedTransactions from "./Components/AllCompletedTransactions/AllCompletedTransactions";
import PendingTransactions from "./Components/PendingTransactions/PendingTransactions";
import UserDashBoard from "./Components/UserDashboard/UserDashBoard";
function App() {
  const { user } = useContext(AuthContext);
  const[ admin, setAdmin ]= useState(false);
  useEffect(() => {
    if(user){

  if(user.email === "admin@msaada.com"){
    setAdmin(true)
  }
  else{
    setAdmin(false)
  }
  }

  
  }, [user])
  
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contribution/:contributionId">
          <IndividualContribution />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          {user?<UserDashBoard/>:<Login/>}
        </Route>
        <Route path="/contributions">
          <ViewallContributions />
        </Route>
       
        <Route path="/accountDetails">
        {user?<AccountDetails />:<Login/>}
          </Route>
        {/* <Route path="/dashboard">
          <Dashboard />
        </Route> */}
        <Route path ="/alltransactions">
          {admin?<AllCompletedTransactions/>:<Login/>}
        </Route>
        <Route path="/pending transactions">
        {admin?<PendingTransactions/>:<Login/>}
        </Route>        
        <Route path="/transactions">
         {user? <Transactions/>:<Login/>}
          </Route>
          <Route path="/admin">
              {admin?<AdminDashboard/>:<Login/>}
          </Route>
          <Route path="/dashboard">
            {user?<UserDashBoard/>:<Login/>}
            
            </Route>
          {/* <Route>
             {user?<UpdateAccount/>:<Login/>}
          </Route> */}
        <Route component={PageNotFound} />
        
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
