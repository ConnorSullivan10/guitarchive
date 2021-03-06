import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import image from '../../../images/logo.png';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item logOut">
              <button className="nav-link btn btn-outline-danger logoutBtn" onClick={this.logMeOut}>Logout</button>
            </li>
          </ul>
        );
      }
      return (
        <ul className="navbar-nav ml-auto"></ul>
      );
    };
    return (
      <div className="MyNavbar">
        <nav className="navbar shadow-lg p-3 mb-5 fixed-top navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand" href="/home">
            <img src={image} height="78" width="160" className=" align-top" alt="guitArchive"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             { buildNavbar() }
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
