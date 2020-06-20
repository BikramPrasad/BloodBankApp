import React, { Component } from "react";
import { makeDonation } from "../../store/actions/donateActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreateDonate extends Component {
  state = {
    city: "",
    bloodgroup: "",
    contact: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleOptionChange = (e) => {
    this.setState({
      bloodgroup: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.makeDonation(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="red-text text-darken-2">Donate</h5>
          <div className="input-field ">
            <div className="row">
              <div className="input-field col s12 m6">
                <label htmlFor="city">City</label>
                <input type="text" id="city" onChange={this.handleChange} />
              </div>
              <div className="input-field col s12 m6">
                <select
                  className="browser-default"
                  value={this.state.bloodgroup}
                  onChange={this.handleOptionChange}
                >
                  <option value="">Choose your Blood</option>
                  <option value="AB-">AB-negative</option>
                  <option value="B-">B-negative</option>
                  <option value="AB+">AB+positive</option>
                  <option value="O-">O-negative</option>
                  <option value="B+">B+positive</option>
                  <option value="A-">A+positive</option>
                  <option value="O+">O+positive</option>
                </select>
              </div>
            </div>
          </div>
          <div className="input-field col s12 m6">
            <label htmlFor="contact">ContactNo</label>
            <input
              type="text"
              id="contact"
              onChange={this.handleChange}
              maxLength="10"
            />
          </div>
          <div>
            <label>
              <input type="checkbox" />
              <span>
                <b className="bold black-text">
                  I agree to donate my blood and show my Name,Contact No and
                  Email in the blood donors List.
                </b>
              </span>
            </label>
          </div>
          <div className="input-field">
            <button className="btn waves-effect waves-light red darken-2">
              Donate
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    makeDonation: (donor) => dispatch(makeDonation(donor)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateDonate);
