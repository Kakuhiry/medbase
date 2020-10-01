import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerConsult } from "../actions/authActions";
import classnames from "classnames";
import Navbar from "./Navbar.js";
import "../Styles/RegisterStyle.css";
class RegisterConsult extends Component {
  constructor() {
    super();
    this.state = {
      Hospital: "Super hospital la fogatak",
      description: "",
      recipes: "",
      symptoms: "",
      reason: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const {user} = this.props.auth
    console.log("is the problem here?")
    const newConsult = {
      userID: this.props.patient._id,
      doctorID: user.id,
      doctor: user.name,
      hospital: "super hospital la fogata",
      patient: this.props.patient.name,
      reason: this.state.reason,
      description: this.state.description,
      recipes: this.state.recipes,
      symptoms: this.state.symptoms,
    };
    console.log("do we actually get here?")
    this.props.registerConsult(newConsult, this.props.history);
    console.log(newConsult);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <h1>{this.props.patient.name}</h1>
        <Navbar />
        <div className="row">
          <div className="back-btn">
            <Link to="/dashboard" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
          </div>
          <div className="register-text">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Insert your information in the fields below
              </p>
            </div>
          </div>

          <div className="register-area">
            <div className="left-sec">
              <div className="col s8 offset-s2">
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="left-sec-text">
                    <div className="input-field col s12">
                      <input
                        disabled
                        onChange={this.onChange}
                        value={this.props.patient.name}
                        error={errors.name}
                        id="name"
                        type="text"
                        className={classnames("", {
                          invalid: errors.name,
                        })}
                      />
                      <label htmlFor="name"></label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        disabled
                        onChange={this.onChange}
                        value={this.props.auth.user.name}
                        error={errors.doctor}
                        id="doctor"
                        type="text"
                        className={classnames("", {
                          invalid: errors.doctor,
                        })}
                      />
                      <label htmlFor="doctor"></label>
                      <span className="red-text">{errors.doctor}</span>
                    </div>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.reason}
                        error={errors.reason}
                        id="reason"
                        type="text"
                        className={classnames("", {
                          invalid: errors.reason,
                        })}
                      />
                      <label htmlFor="reason">Reason</label>
                      <span className="red-text">{errors.reason}</span>
                    </div>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.symptoms}
                        error={errors.symptoms}
                        id="symptoms"
                        type="text"
                        className={classnames("", {
                          invalid: errors.symptoms,
                        })}
                      />
                      <label htmlFor="symptoms">Symptoms</label>
                      <span className="red-text">{errors.symptoms}</span>
                    </div>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.recipes}
                        error={errors.recipes}
                        id="recipes"
                        type="text"
                        className={classnames("", {
                          invalid: errors.recipes,
                        })}
                      />
                      <label htmlFor="recipes">Recipes</label>
                      <span className="red-text">{errors.recipes}</span>
                    </div>
                  </div>
                  <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <button
                      style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem",
                      }}
                      type="submit"
                      className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="right-sec">
              <div className="col s8 offset-s2">
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="left-sec-text">
                    <div className="input-field col s12" style= {{position: "relative", top: "60px"}}>
                      <textarea
                        style={{ height: "300px" }}
                        onChange={this.onChange}
                        value={this.state.description}
                        error={errors.description}
                        id="description"
                        type="text"
                        className={classnames("", {
                          invalid: errors.description,
                        })}
                      />
                      <label htmlFor="description">Description</label>
                      <span className="red-text">{errors.description}</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RegisterConsult.propTypes = {
  registerConsult: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerConsult })(
  withRouter(RegisterConsult)
);
