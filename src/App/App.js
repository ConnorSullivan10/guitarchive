import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';

import firebaseConnection from '../helpers/data/connection';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Home from '../components/pages/Home/Home';
import Brands from '../components/pages/Brands/Brands';
import Guitars from '../components/pages/Guitars/Guitars';
import UserGuitars from '../components/pages/UserGuitars/UserGuitars';
import LoneUserGuitar from '../components/pages/LoneUserGuitar/LoneUserGuitar';
import EditUserGuitar from '../components/pages/EditUserGuitar/EditUserGuitar';
import NewUserGuitar from '../components/pages/NewUserGuitar/NewUserGuitar';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/brands', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/brands', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();

class App extends React.Component {
    state = {
      authed: false,
    }


    componentDidMount() {
      this.removeListener = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ authed: true });
        } else {
          this.setState({ authed: false });
        }
      });
    }

    componentWillUnmount() {
      this.removeListener();
    }

    render() {
      const { authed } = this.state;
      return (
        <div className="App">
          <Router>
            <MyNavbar authed={authed}/>
            <Switch>
              <PublicRoute path="/home" exact component={Home} authed={authed}/>
              <PublicRoute path="/brands" exact component={Brands} authed={authed}/>
              <PublicRoute path="/brands/:brandId/guitars" exact component={Guitars} authed={authed}/>
              <PublicRoute path="/brands/:brandId/guitars/:guitarId/userGuitars" exact component={UserGuitars} authed={authed}/>
              <PublicRoute path="/brands/:brandId/guitars/:guitarId/userGuitars/:userGuitarId" exact component={LoneUserGuitar} authed={authed}/>
              <PrivateRoute path="/brands/:brandId/guitars/:guitarId/userGuitars/:userGuitarId/edit" exact component={EditUserGuitar} authed={authed}/>
              <PrivateRoute path="/brands/:brandId/guitars/:guitarId/userGuitars/new" exact component={NewUserGuitar} authed={authed}/>
            </Switch>
          </Router>
        </div>
      );
    }
}

export default App;
