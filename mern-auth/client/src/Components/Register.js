import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
import Navbar from "./Navbar.js"
import "../Styles/RegisterStyle.css";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      birthdate: "",
      direction1: "",
      direction2: "",
      phoneNumber: "",
      country: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      birthdate: this.state.birthdate,
      phoneNumber: this.state.phoneNumber,
      direction1: this.state.direction1,
      direction2: this.state.direction2,
      country: this.state.country,
    };
    this.props.registerUser(newUser, this.props.history); 
    console.log(newUser);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
      <Navbar/>
        <div className="row">
          <div className="back-btn">
            <Link to="/" className="btn-flat waves-effect">
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
                Already have an account? <Link to="/login">Log in</Link>
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
                        onChange={this.onChange}
                        value={this.state.name}
                        error={errors.name}
                        id="name"
                        type="text"
                        className={classnames("", {
                          invalid: errors.name
                        })}
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("", {
                          invalid: errors.email
                        })}
                      />
                      <label htmlFor="email">Email</label>
                      <span className="red-text">{errors.email}</span>
                    </div>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        className={classnames("", {
                          invalid: errors.password
                        })}
                      />
                      <label htmlFor="password">Password</label>
                      <span className="red-text">{errors.password}</span>
                    </div>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.password2}
                        error={errors.password2}
                        id="password2"
                        type="password"
                        className={classnames("", {
                          invalid: errors.password2
                        })}
                      />
                      <label htmlFor="password2">Confirm Password</label>
                      <span className="red-text">{errors.password2}</span>
                    </div>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.birthdate}
                        error={errors.birthdate}
                        id="birthdate"
                        type="text"
                        className={classnames("", {
                          invalid: errors.birthdate
                        })}
                      />
                      <label htmlFor="birthdate">birthday</label>
                      <span className="red-text">{errors.birthdate}</span>
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
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.direction1}
                        error={errors.direction1}
                        id="direction1"
                        type="text"
                        className={classnames("", {
                          invalid: errors.direction1
                        })}
                      />
                      <label htmlFor="direction1">Direction 1</label>
                      <span className="red-text">{errors.direction1}</span>

                    </div>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.direction2}
                        error={errors.direction2}
                        id="direction2"
                        type="text"
                        className={classnames("", {
                          invalid: errors.direction2
                        })}
                      />
                      <label htmlFor="direction2">Direction 2 (optional)</label>
                      <span className="red-text">{errors.direction2}</span>
                    </div>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.phoneNumber}
                        error={errors.phoneNumber}
                        id="phoneNumber"
                        type="text"
                        className={classnames("", {
                          invalid: errors.phoneNumber
                        })}
                      />
                      <label htmlFor="phoneNumber">Phone number</label>
                      <span className="red-text">{errors.phoneNumber}</span>
                    </div>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.country}
                        error={errors.country}
                        id="country"
                        type="text"
                        className={classnames("", {
                          invalid: errors.country
                        })}
                      />
                      <label htmlFor="country">Country</label>
                      <span className="red-text">{errors.country}</span>
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
