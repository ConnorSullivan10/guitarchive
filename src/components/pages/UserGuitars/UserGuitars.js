import React from 'react';
import './UserGuitars.scss';
import UserGuitar from '../../shared/UserGuitar/UserGuitar';
import userGuitarsData from '../../../helpers/data/userGuitarsData';

class UserGuitars extends React.Component {
     state = {
       userGuitars: [],
     }

     componentDidMount() {
       this.getUserGuitars();
     }

   getUserGuitars = () => {
     const { guitarId } = this.props.match.params;
     userGuitarsData.getUserGuitarsByGuitarId(guitarId)
       .then((userGuitars) => this.setState({ userGuitars }))
       .catch((err) => console.error('error from get user guitars', err));
   }

   render() {
     return (
      <div className="UserGuitars d-flex flex-wrap">
          {this.state.guitars.map((userGuitar) => <UserGuitar key={userGuitar.id} UserGuitar={UserGuitar} deleteGuitar={this.deleteGuitar}/>)}
      </div>
     );
   }
}

export default UserGuitars;
