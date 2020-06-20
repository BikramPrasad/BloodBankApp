import React, { Component } from "react";
import { connect } from "react-redux";
class SearchPage extends Component {
  state = {
    city: "",
    bloodgroup: "",
  };
  handleOptionChange = (e) => {
    this.setState({
      bloodgroup: e.target.value,
    });
  };
  handleChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { auth } = this.props;
    if (!auth.uid) {
      alert("Please SignIn!!");
    } else if (this.state.city.length > 0 && this.state.bloodgroup.length > 0)
      window.open(
        `/searchResults?city=${this.state.city}&blood=${this.state.bloodgroup}`
      );
  };

  render() {
    return (
      <div className="container center white-text section">
        <form onSubmit={this.handleSubmit} className="gg">
          <h2>Donate the blood,save the life</h2>
          <span>
            <i>Donate the blood to help others</i>
          </span>
          <h3 className="bottom-line">Search the Donors</h3>
          <div className="input-field ">
            <div className="row">
              <div className="input-field col s12 m6">
                <select
                  className="browser-default"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option value="">Choose your City</option>
                  <option value="Vellore">Vellore</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Siliguri">Siliguri</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Kolkata">Kolkata</option>
                </select>
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
              <button
                id="nice"
                className="btn waves-effect waves-light red darken-2 btn-large"
                type="submit"
                name="action"
              >
                Search
              </button>
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
  };
};
export default connect(mapStateToProps)(SearchPage);
