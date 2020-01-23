import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

 logMeIn = (e) => {
   e.preventDefault();
   const provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().signInWithPopup(provider);
 }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const buildAuthButton = () => {
      if (authed) {
        return (
            <li className="nav-item logOut">
              <button className="nav-link btn btn-outline-danger" onClick={this.logMeOut}>Logout</button>
            </li>
        );
      }
      return (
              <li className="nav-item logIn">
                <button className="nav-link btn btn-outline-danger" onClick={this.logMeIn}>Login With Google</button>
              </li>
      );
    };
    return (
      <div className="MyNavbar">
        <nav className="navbar shadow-lg  p-3 mb-5 fixed-top navbar-expand-lg navbar-light bg-dark">
          <div className="nav-brand">GuitArchive</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
             { buildAuthButton() }
          </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
