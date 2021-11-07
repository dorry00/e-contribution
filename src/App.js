import "./App.css";
import { Route, Switch} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login/Login";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Navbar";
import CreateContribution from "./Components/CreateContribution/CreateContribution";
import ViewallContributions from "./Components/ViewallContributions";
import IndividualContribution from "./Components/IndividualContribution";
import AccountDetails from "./Components/AccountDetails/AccountDetails";
import Transactions from "./Components/Transactions/Transactions";
import UpdateAccount from "./Components/UpdateAccount/UpdateAccount";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Footer from "./Components/Footer/Footer";
import AllCompletedTransactions from "./Components/AllCompletedTransactions/AllCompletedTransactions";
import PendingTransactions from "./Components/PendingTransactions/PendingTransactions";
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
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path ="/alltransactions">
        <AllCompletedTransactions/>
        </Route>
        <Route path="/pending transactions">
        <PendingTransactions/>
        </Route>        
        <Route path="/transactions">
          <Transactions/>
          </Route>
          <Route path="/admin">
            <AdminDashboard/>
          </Route>
          <Route path="/updateAccount">
            <UpdateAccount/>
          </Route>
        <Route component={PageNotFound} />
        
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
