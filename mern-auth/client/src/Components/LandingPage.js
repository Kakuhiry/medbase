import React from "react";
import "../Styles/LangingPageStyle.css";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="grad">
        <div className="header">
          <img
            className="logo"
            src={require("../images/MedBase-Logo.png")}
            alt="Not found"
          />
          <div className="nav-bar-left">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="nav-bar-right">
            <ul>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-body">
          <div className="main-body-left">
            <h1 className="main-text-left">
              Acceso a tu salud, no importa donde vayas
            </h1>
            <p className="secondary-text-left">
              Tu salud es muy importante para nosotros. Nuestro objetivo es
              proveer al publico un facil acceso a su historial medico, sin
              importar donde se encuentre.
            </p>
            <div class="buttonsB">
              <div class="containerB">
                <a
                  href="/login"
                  class="btn1 effect04"
                  data-sm-link-text="Enroll today"
                  target="_blank"
                >
                  <span>Join us</span>
                </a>
              </div>
            </div>
          </div>
          <div className="main-body-right">
            <img
              className="right-pic"
              src={require("../images/fimathing.png")}
              alt="Not found"
            />
          </div>
        </div>

        <div className="socials">
          <ul>
            <li>
              <img
                className="sLogo"
                id="fLogo"
                src={require("../images/facebook-logo.png")}
                alt="1"
              />
            </li>
            <li>
              <img
                className="sLogo"
                id="iLogo"
                src={require("../images/Logo-instagram.png")}
                alt="2"
              />
            </li>
            <li>
              <img
                className="sLogo"
                id="tLogo"
                src={require("../images/twitter-logo.png")}
                alt="3"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
