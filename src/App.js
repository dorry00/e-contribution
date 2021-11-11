import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login/Login";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./Context/AuthContext";
import Navbar from "./Components/Navbar";
import ViewallContributions from "./Components/ViewallContributions";
import IndividualContribution from "./Components/IndividualContribution";
import Transactions from "./Components/Transactions/Transactions";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Footer from "./Components/Footer/Footer";
import AllCompletedTransactions from "./Components/AllCompletedTransactions/AllCompletedTransactions";
import UserDashBoard from "./Components/UserDashboard/UserDashBoard";
import UserDonations from "./Components/UserDonations/UserDonations";
function App() {
  const { user } = useContext(AuthContext);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (user) {

      if (user.email === "admin@msaada.com") {
        setAdmin(true)
        admin && window.location.replace("/admin")
      }
      else {
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
          {user ? <UserDashBoard />:<Login />}
          
           </Route>
        <Route path="/contributions">
          <ViewallContributions />
        </Route>
        
        <Route path="/alltransactions">
          {admin ? <AllCompletedTransactions /> : <Login />}
        </Route>
               <Route path="/transactions">
          {user ? <Transactions /> : <Login />}
        </Route>
        <Route path="/admin">
          {admin ? <AdminDashboard /> : <Login />}
        </Route>
        <Route path="/user donations">
          {user ? <UserDonations /> : <Login />}
        </Route>
        <Route path="/dashboard">
          {user ? <UserDashBoard /> : <Login />}
        </Route>
               <Route component={PageNotFound} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
