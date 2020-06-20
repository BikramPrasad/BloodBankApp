import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  console.log(props);
  return (
    <ul className="right">
      <li>
        <NavLink to="/donate">Donate</NavLink>
      </li>
      <li>
        <Link onClick={props.signOut}>Log Out</Link>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating red lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(null, mapDispatchToProps)(SignedInLinks);
