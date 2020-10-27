import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "../../Styles/DoctorMenuStyle.css";
class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container-valign-wrapper-Doctor">
        <div className="header">
          <div className="doctor-name">
            <h5>{user.name}</h5>
          </div>
        </div>
        <div className="body-sec">
          <div className="options-menu">
            <ul>
              <li>
                <a className="btn-enclouser" href="/dashboard/Register">
                  <div class="main-container">
                    <section>
                      <button class="btn btn-blue btn-border">
                        Registrar paciente
                      </button>
                    </section>
                  </div>
                </a>
              </li>
              <li>
                <a className="btn-enclouser" href="/dashboard">
                  <div class="main-container">
                    <section>
                      <button class="btn btn-blue btn-border">
                        Configuracion
                      </button>
                    </section>
                  </div>
                </a>
              </li>
              <li>
                <a className="btn-enclouser" href="/dashboard/search">
                  <div class="main-container">
                    <section>
                      <button class="btn btn-blue btn-border">
                        Buscar Paciente
                      </button>
                    </section>
                  </div>
                </a>
              </li>
              <li>
                <a className="btn-enclouser" href="/login">
                  <div class="main-container">
                    <section>
                      <button
                        class="btn btn-blue btn-border"
                        onClick={this.onLogoutClick}
                      >
                        Log out
                      </button>
                    </section>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="right-sec">
            <img
              className="right-img"
              src={require("../../images/HDmedBaseRightPic.png")}
              alt=""
            />
            <img className= "main-logo" src={require("../../images/MedBase-Logo.png")} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
