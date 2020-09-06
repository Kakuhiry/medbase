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
        </switch>
      </div>
    </Router>
  );
}

export default App;
