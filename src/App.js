import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className= "grad">
        <div className = "header">
          <img className="logo" src={require('/home/elvis/Documents/GitHub/medbase/src/images/3533224112_e75c18de-aef7-47fb-bf36-5748bd89b1bf.png')} alt= "Not found"/>
          <div className= "nav-bar-left">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          <div className= "nav-bar-right">
          <ul>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
          </div>
        </div>
        <div className= "main-body">
          <div className= "main-body-left">
            <h1 className= "main-text-left">
            Acceso a tu salud, no importa donde vayas
            </h1>
            <p className= "secondary-text-left">
            Tu salud es muy importante para nosotros. Nuestro objetivo es proveer al publico un facil acceso a su historial medico, sin importar donde se encuentre.
            </p>
            <div class="button" id="button-3">
              <div id="circle"></div>
              <a className="enroll" href="/">Let's Go!</a>
            </div>
          </div>
          <div className= "main-body-right">
            <div className= "pic-container">
              <img className="right-pic" src={require('/home/elvis/Documents/GitHub/medbase/src/images/fimathing.png')} alt= "Not found"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
