import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login/Login";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Navbar";
import CreateContribution from "./Components/CreateContribution";
import ViewallContributions from "./Components/ViewallContributions";
import MakePayment from "./Components/MakePayment";

import IndividualContribution from "./Components/IndividualContribution";
import AccountDetails from "./Components/AccountDetails/AccountDetails";
import VerifiedFundraisers from "./Components/VerifiedFundraisers";
import Transactions from "./Components/Transactions/Transactions";
import UpdateAccount from "./Components/UpdateAccount/UpdateAccount";
function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* {user ? <Dashboard /> : <Login />} */}
        {/* <Register exact path="/register" component={Register} /> */}
        {/* <Route path="/login">{user ? <Redirect to="/dashboard" /> : <Login />}</Route> */}
        <Route path="/contribution/:contributionId">
          <IndividualContribution />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contributions">
          <ViewallContributions />
        </Route>
        <Route path="/createContribution">
          <CreateContribution />
        </Route>
        <Route path="/accountDetails">
          <AccountDetails />
        </Route>
        <Route path="/makeDonation">
          <MakePayment />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/verified">
          <VerifiedFundraisers />
        </Route>
        <Route path="/transactions">
          <Transactions/>
          </Route>
          <Route path="/updateAccount">
            <UpdateAccount/>
          </Route>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
