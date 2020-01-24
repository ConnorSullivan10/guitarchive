import React from 'react';
import { Link } from 'react-router-dom';
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

   deleteGuitar = (userGuitarId) => {
     const { guitarId } = this.props.match.params;
     userGuitarsData.deleteUserGuitar(userGuitarId)
       .then(() => this.getUserGuitars(guitarId))
       .catch((err) => console.error('error deleting user guitars', err));
   }

   render() {
     const { brandId, userGuitars } = this.state;
     const { guitarId } = this.props.match.params;
     return (
      <div className="UserGuitars d-flex flex-wrap">
        <Link className="btn btn-success" to={`/brands/${brandId}/guitars/${guitarId}/new`}>Add New User Guitar</Link>
          {userGuitars.map((uG) => <UserGuitar key={uG.id} userGuitar={uG} brandId={brandId} deleteGuitar={this.deleteGuitar}/>)}
      </div>
     );
   }
}

export default UserGuitars;
