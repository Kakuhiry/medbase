import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "../Styles/SearchStyle.css";
import RegisterConsultPage from "./RegisterConsult";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Axios from "axios";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      patients: [],
      isModalOpen: false,
      isRegisterConsultaModalOpen: false,
      currentPatient: null,
      foundConsults: [],
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

  openConsultHistoryModal = (patient) => {
    Axios.get(
      `http://localhost:3000/api/consults/searchConsult/${patient._id}`
    ).then((res) =>
      this.setState({ foundConsults: res.data }, () =>
        console.log(this.state.foundConsults)
      )
    );
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
                      <Avatar
                        className="profile-pic"
                        size={128}
                        icon={<UserOutlined />}
                      />
                      <li className="cards" id="p-name">
                        <b>{item.name.toString()}</b>
                      </li>
                      <br />
                      <button
                        className="show-model-btn"
                        onClick={() => {
                          this.openPatientModal(item);
                          this.openConsultHistoryModal(item);
                        }}
                      >
                        Show Modal
                      </button>
                    </ul>
                  );
                })}
              </ul>

              <div className="scrollable-div">
                {this.state.isModalOpen ? (
                  <Modal className= "patient-modal" isOpen={this.state.isModalOpen} style={{}}>
                    <h1 className="consult-history-text">Consult history</h1>
                    <div className="modal-patient-consults">
                      {this.state.foundConsults.map((item, key) => {
                        return (
                          <div className="consults-box">
                            <div className="consult-result-wrapper">
                              <div
                                className="consult-result-card"
                                key={key}
                                style={{
                                  margin: "20px",
                                }}
                              >
                                <ul>
                                  <li
                                    style={{
                                      marginRight: "20px",
                                      opacity: 1,
                                      color: "black",
                                    }}
                                  >
                                    <b>Doctor:</b> {item.doctor} <b> </b>
                                  </li>
                                  <li style={{ marginRight: "20px" }}>
                                    <b>Reason:</b> {item.reason}
                                  </li>
                                  <li style={{ marginRight: "20px" }}>
                                    <b>Date: </b> {item.date}
                                  </li>
                                  <li style={{ marginRight: "20px" }}>
                                    <b>Symptoms: </b> {item.symptoms}
                                  </li>
                                  <li style={{ marginRight: "20px" }}>
                                    <b>Recipes : </b> {item.recipes}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
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
                        this.openRegisterConsultModal(
                          this.state.currentPatient
                        );
                      }}
                    >
                      <b>Create new consult</b>
                    </button>
                  </Modal>
                ) : null}
              </div>
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
