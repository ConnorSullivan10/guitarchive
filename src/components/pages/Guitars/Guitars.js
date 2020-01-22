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
      <div className="Guitars d-flex flex-wrap">
          {guitars.map((guitar) => <Guitar key={guitar.id} guitar={guitar} />)}
      </div>
       );
     }
}

export default Guitars;
