import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import '../Styles/nvStyle.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
      <Router>
        <nav className="z-depth-0">
          <div className="nav-wrapper-tr" style= {{backgroundColor: "transparent"}}>
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">code</i>
              MEDBASE
            </Link>
          </div>
        </nav>
        </Router>
      </div>
    );
  }
}
export default Navbar;