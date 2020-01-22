import React from 'react';
import Brands from '../Brands/Brands';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
           <Brands />
      </div>
    );
  }
}

export default Home;
