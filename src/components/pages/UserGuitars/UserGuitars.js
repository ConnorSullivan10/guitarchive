import React from 'react';
import './UserGuitars.scss';
import UserGuitar from '../../shared/UserGuitar/UserGuitar';
import guitarsData from '../../../helpers/data/guitarsData';
import userGuitarsData from '../../../helpers/data/userGuitarsData';

class UserGuitars extends React.Component {
     state = {
       userGuitars: [],
       brandId: '',
     }

     componentDidMount() {
       const { guitarId } = this.props.match.params;
       guitarsData.getSingleGuitar(guitarId)
         .then((response) => {
           this.setState({ brandId: response.data.brandId });
           this.getUserGuitars(guitarId);
         })
         .catch((err) => console.error('error in get single guitar', err));
     }

   getUserGuitars = (guitarId) => {
     userGuitarsData.getUserGuitarsByGuitarId(guitarId)
       .then((userGuitars) => this.setState({ userGuitars }))
       .catch((err) => console.error('error from get user guitars', err));
   }

   render() {
     const { brandId, userGuitars } = this.state;
     return (
      <div className="UserGuitars d-flex flex-wrap">
          {userGuitars.map((userGuitar) => <UserGuitar key={userGuitar.id} userGuitar={userGuitar} brandId={brandId} deleteGuitar={this.deleteGuitar}/>)}
      </div>
     );
   }
}

export default UserGuitars;
