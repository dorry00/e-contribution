import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Navbar";
import CreateContribution from "./Components/CreateContribution";
import ViewallContributions from "./Components/ViewallContributions";
import MakePayment from "./Components/MakePayment";
import Contribution from "./Components/Contribution";
import IndividualContribution from "./Components/IndividualContribution";
import AccountDetails from "./Components/AccountDetails";

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
          <CreateContribution/>
        </Route>
        <Route path="/accountDetails">
          <AccountDetails/>
        </Route>

       
         

        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
