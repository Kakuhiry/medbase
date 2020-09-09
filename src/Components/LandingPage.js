import React from 'react';
import '../Styles/LangingPageStyle.css';
import '../Styles/UniversalStyling.css';

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className= "grad">
        <div className = "header">
          <img className="logo" src={require('../images/MedBase-Logo.png')} alt= "Not found"/>
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
              <a href="/login">Login</a>
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
            </div>
          <div className= "main-body-right">
            <img className="right-pic" src={require('/home/elvis/Documents/GitHub/medbase/src/images/fimathing.png')} alt= "Not found"/>
          </div>
        </div>
          <div class="box-1">
            <div class="btn btn-one">
              <span>Enroll today</span>
            </div>
          </div>
          <div className= "socials">
            <ul>
              <li><img className= "sLogo" id= "fLogo" src={require("/home/elvis/Documents/GitHub/medbase/src/images/facebook-logo.png")} alt="1"/></li>
              <li><img className= "sLogo" id= "iLogo" src={require("/home/elvis/Documents/GitHub/medbase/src/images/Logo-instagram.png")} alt="2"/></li>
              <li><img className= "sLogo" id= "tLogo" src={require("/home/elvis/Documents/GitHub/medbase/src/images/twitter-logo.png")} alt="3"/></li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default LandingPage;
