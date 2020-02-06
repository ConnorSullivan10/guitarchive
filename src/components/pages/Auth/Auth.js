import React from 'react';
import firebase from 'firebase/app';
import authImage from '../../../images/authImg.png';
import 'firebase/auth';
import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <div className="authContainer">
          <img className="authImg" src={ authImage } alt="" />
          <div className="overlay">
            <button className="btn btn-danger loginBtn" onClick={this.loginClickEvent}>Login with Google</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
