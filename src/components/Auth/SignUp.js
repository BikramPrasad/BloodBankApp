import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleOptionChange = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firsttName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="row">
            <label htmlFor="gender">Gender:</label>
            <p>
              <label>
                <input
                  name="group1"
                  type="radio"
                  value="male"
                  className="with-gap"
                  checked={this.state.gender === "male"}
                  onChange={this.handleOptionChange}
                />
                <span>Male</span>
              </label>
              <label>
                <input
                  name="group1"
                  type="radio"
                  value="female"
                  className="with-gap"
                  checked={this.state.gender === "female"}
                  onChange={this.handleOptionChange}
                />
                <span>Female</span>
              </label>
            </p>
          </div>
          <div className="input-field">
            <button className="btn waves-effect waves-light red darken-2">
              SIGN UP
            </button>
            <div className="red-text center">
              {authError ? <p> {authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
