import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "../Styles/SearchStyle.css";
import RegisterConsultPage from "./RegisterConsult";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      patients: [],
      isModalOpen: false,
      isRegisterConsultaModalOpen: false,
      currentPatient: null,
    };
  }

  openPatientModal = (patient) => {
    this.setState((state) => {
      return {
        ...state,
        isModalOpen: true,
        isRegisterConsultaModalOpen: false,
        currentPatient: patient,
      };
    });
  };

  openRegisterConsultModal = (patient) => {
    this.setState((state) => {
      return {
        ...state,
        isModalOpen: false,
        isRegisterConsultaModalOpen: true,
        currentPatient: patient,
      };
    });
  };

  hideModal = () => {
    this.setState(() => ({
      ...this.state,
      currentPatient: null,
      isModalOpen: false,
    }));
  };

  onSubmit = (e) => {
    axios
      .get(`http://localhost:3000/api/consults/search/${this.state.name}`)
      //?email=${datausr.email} (req.query.email) in the backend
      .then((res) =>
        this.setState({ ...this.state, patients: res.data }, () =>
          console.log()
        )
      )
      .then(() => {
        return (
          <div>
            <h1>The consult have been registered successfully</h1>
            <button>
              <a href="/dashboard/search">Go back</a>
            </button>
          </div>
        );
      });
  };

  onChange = (e) => {
    this.setState(
      {
        name: e.target.value,
      },
      () => {
        console.log();
      }
    );
  };
  render() {
    return (
      <div>
        <div
          className="header"
          style={{ display: "list-item", height: "230px" }}
        >
          <div className="back-btn">
            <Link to="/dashboard" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
          </div>
          <img
            className="logo"
            src={require("../images/MedBase-Logo.png")}
            alt="Not found"
            style={{}}
          />
        </div>
        <div className="body-sec">
          <div
            className="left-sect"
            style={{ width: "800px", height: "600px" }}
          >
            <div
              className="search-field"
              style={{
                paddingTop: "100px",
                paddingLeft: "200px",
                display: "list-item",
              }}
            >
              <input
                onChange={this.onChange}
                type="text"
                id="name"
                value={this.state.name}
                placeholder="Search"
                rules={{
                  ".textfield-input::placeholder": {
                    opacity: 1.5,
                  },
                }}
                style={{
                  alignItems: "center",
                  width: "350px",
                }}
              />
            </div>
            <button
              onClick={this.onSubmit}
              style={{
                position: "relative",
                left: "320px",
                top: "20px",
                width: "100px",
                height: "30px",
                backgroundColor: "transparent",
                border: "none",
                fontWeight: "300",
              }}
            >
              Search
            </button>
          </div>

          <div
            className="right-sect"
            style={{
              position: "relative",
              borderLeft: "2px #C1C1C1 solid",
              right: "120px",
            }}
          >
            <div className="results-wrapper">
              <ul className="results">
                {this.state.patients.map((item, key) => {
                  return (
                    <ul
                      key={key}
                      className="usr-card"
                      style={{ margin: "20px" }}
                    >
                      <li className="cards" id="p-name">
                        <b>{item.name.toString()}</b>
                      </li>
                      <br />
                      <li className="cards" id="bhd">
                        birthday: {item.birthdate}
                      </li>
                      <li className="cards" id="dir1">
                        direction1: {item.direction1.toString()}
                      </li>
                      <li className="cards" id="phone-num">
                        phone number: {item.phoneNumber.toString()}
                      </li>
                      <button onClick={() => this.openPatientModal(item)}>
                        Show Modal
                      </button>
                    </ul>
                  );
                })}
              </ul>
              {this.state.isModalOpen ? (
                <Modal isOpen={this.state.isModalOpen} style={{}}>
                  <div
                    className="modal-patient-name"
                    style={{
                      fontSize: "40px",
                      position: "relative",
                      left: "40px",
                    }}
                  >
                    <b>Name: </b> {this.state.currentPatient.name}
                  </div>
                  <div
                    className="modal-patient-name"
                    style={{
                      fontSize: "40px",
                      position: "relative",
                      left: "40px",
                    }}
                  >
                    <b>Birthday: </b> {this.state.currentPatient.birthdate}
                  </div>
                  <div></div>
                  <div>Birthday = {this.state.currentPatient.birthdate}</div>
                  <button
                    onClick={() => this.hideModal()}
                    style={{
                      position: "relative",
                      top: "600px",
                      left: "40px",
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                  >
                    Close
                  </button>
                  <button
                    style={{
                      position: "relative",
                      fontWeight: "500",
                      color: "green",
                      fontSize: "50px",
                      backgroundColor: "transparent",
                      border: "none",
                      top: "600px",
                      left: "1230px",
                    }}
                    onClick={() => {
                      this.openRegisterConsultModal(this.state.currentPatient);
                    }}
                  >
                    <b>Create new consult</b>
                  </button>
                </Modal>
              ) : null}

              {this.state.isRegisterConsultaModalOpen ? (
                <Modal isOpen={this.state.isRegisterConsultaModalOpen}>
                  <RegisterConsultPage patient={this.state.currentPatient} />
                </Modal>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
