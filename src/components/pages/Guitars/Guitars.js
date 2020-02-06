import React from 'react';
import './Guitars.scss';
import Guitar from '../../shared/Guitar/Guitar';
import guitarsData from '../../../helpers/data/guitarsData';

class Guitars extends React.Component {
     state = {
       guitars: [],
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
          <h1 className="text-center">Guitar Models</h1>
          <div className="guitCards d-flex flex-row flex-wrap justify-content-center">
              {guitars.map((guitar) => <Guitar key={guitar.id} guitar={guitar} />)}
          </div>
         </div>
       );
     }
}

export default Guitars;
