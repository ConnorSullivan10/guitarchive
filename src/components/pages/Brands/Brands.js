import React from 'react';
import './Brands.scss';
import Brand from '../../shared/Brand/Brand';
import brandsData from '../../../helpers/data/brandsData';

class Brands extends React.Component {
     state = {
       brands: [],
     }

     componentDidMount() {
       this.getBrands();
     }

   getBrands = () => {
     brandsData.getAllBrands()
       .then((brands) => {
         this.setState({ brands });
       })
       .catch((errFromTeam) => console.error({ errFromTeam }));
   }

   render() {
     return (
      <div className="Brands d-flex flex-wrap">
          {this.state.brands.map((brand) => <Brand key={brand.id} brand={brand}/>)}
      </div>
     );
   }
}

export default Brands;
