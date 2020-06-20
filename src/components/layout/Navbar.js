import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedoutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth, profile } = props;
  //console.log(auth.email);
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedoutLinks />
  );
  return (
    <nav className="nav-wrapper red darken-2">
      <div className="container">
        <Link to="/" className="brand-logo">
          BloodApp
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(Navbar);
