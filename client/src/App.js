import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./Components/private-route/PrivateRoute.js";
import Dashboard from "./Components/dashboard/Dashboard.js"
import LandingPage from "./Components/LandingPage.js";
import Login from "./Components/Login.js";
import Register from "./Components/Register";
import MainMenu from "./Components/dashboard/MainMenu"
import CreatedUser from "./Components/NewPatientConfirmation"

import { Provider } from "react-redux";
import store from "./store";
import Search from "./Components/Search";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <switch>
            <Route path="/login" exact component={Login} />
            
            
            <Route path="/" exact component={LandingPage} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path= "/menu" component= {MainMenu}/>
              <PrivateRoute exact path="/dashboard/register" component={Register} />
              <PrivateRoute exact path="/dashboard/register/success" component={CreatedUser} />
              <PrivateRoute exact path="/dashboard/search" component={Search} />
            </Switch>
          </switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
