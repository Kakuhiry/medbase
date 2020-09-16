import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage.js'
import Login from './Components/Login.js'


function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route path= "/" exact component= {LandingPage}/>
          <Route path= "/login" exact component= {Login}/>
        </switch>
      </div>
    </Router>
  );
}

export default App;
