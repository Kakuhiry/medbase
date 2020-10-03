import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "../../Styles/MainMenuStyle.css";
import Axios from "axios";

class MainMenu extends Component {
  constructor() {
    super();
    this.state = {
      foundConsults: [],
    };
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    const { user } = this.props.auth;
    console.log(user.id);
    Axios.get(
      `http://localhost:3000/api/consults/searchConsult/${user.id}`
    ).then((res) =>
      this.setState({ foundConsults: res.data }, () =>
        console.log(this.state.foundConsults)
      )
    );
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container-valign-wrapper">
        <div className="header">
          <div className="history">
            <h3
              className="history-text"
              style={{ fontWeight: "bold", fontFamily: "poppins" }}
            >
              Historial de consultas
            </h3>
          </div>
          <div>
            <img
              className="logo-med"
              src={require("../../images/MedBase-Logo.png")}
              alt="Not found"
            />
          </div>
        </div>
        <div className="patient-name">
          <p>{user.name}</p>
        </div>
        <div className="filters">
          <ul>
            <li>
              <a className="filter" href="">
                Esta semana
              </a>
            </li>
            <li>
              <a className="filter" href="">
                Este mes
              </a>
            </li>
            <li>
              <a className="filter" href="">
                Este año
              </a>
            </li>
            <li>
              <a className="filterr" href="">
                Personalizar
              </a>
            </li>
          </ul>
        </div>
        <div className="consults-box">
          {this.state.foundConsults.map((item, key) => {
            return (
              <div className="consult-result-card" key={key} style={{
                backgroundColor: "white",
                margin: "20px" 
              }}>
                <ul>
                  <li
                    style={{ marginRight: "20px", opacity: 1, color: "black" }}
                  >
                    <b>Doctor:</b> {item.doctor} <b> </b>
                  </li>
                  <li style={{ marginRight: "20px" }}>
                    <b>Hospital:</b> {item.hospital}
                  </li>
                  <li style={{ marginRight: "20px" }}>
                    <b>Date: </b> {item.date}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
        </button>
      </div>
    );
  }
}
MainMenu.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(MainMenu);
