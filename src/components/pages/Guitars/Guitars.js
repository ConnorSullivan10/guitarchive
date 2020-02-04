import React from 'react';
import { Link } from 'react-router-dom';
import Guitar from '../../shared/Guitar/Guitar';
import guitarsData from '../../../helpers/data/guitarsData';
import './Guitars.scss';

class Guitars extends React.Component {
     state = {
       guitars: [],
       show: false,
     }

     componentDidMount() {
       const { brandId } = this.props.match.params;
       guitarsData.getGuitarsByBrandId(brandId)
         .then((guitars) => {
           this.setState({ guitars });
         })
         .catch((errFromGetGuitarsByBrand) => console.error({ errFromGetGuitarsByBrand }));
     }

     render() {
       const { guitars } = this.state;
       return (
         <div className="Guitars ">
          <h1 className="text-center guitarTitle">Guitar Models</h1>
          <center><Link className="btn btn-md backBrandBtn" to={'/brands'}>Back To Guitar Brands</Link></center>
          <div className="guitCards d-flex flex-row flex-wrap justify-content-center">
              {guitars.map((guitar) => <Guitar key={guitar.id} guitar={guitar} />)}
          </div>
         </div>
       );
     }
}

export default Guitars;
