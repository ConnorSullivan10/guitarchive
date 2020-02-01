import React from 'react';
import { Link } from 'react-router-dom';
import './UserGuitars.scss';
import UserGuitar from '../../shared/UserGuitar/UserGuitar';
import ToneChasingModal from '../../shared/ToneChasingModal/ToneChasingModal';
import guitarsData from '../../../helpers/data/guitarsData';
import userGuitarsData from '../../../helpers/data/userGuitarsData';

class UserGuitars extends React.Component {
     state = {
       userGuitars: [],
       show: false,
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

  modalOpen = () => this.setState({ show: true });

  modalClose = () => this.setState({ show: false });

  render() {
    const { brandId, userGuitars, show } = this.state;
    const { guitarId } = this.props.match.params;
    return (
      <div className="UserGuitars d-flex flex-column">
        <h1 className="text-center">User Guitars</h1>
        <div className="text-center">
            <button className="btn btn-success text-center" onClick={this.modalOpen}>Tone Tips</button>
        </div>
        <ToneChasingModal modalClose={this.modalClose} show={show}/>
        <Link className="btn btn-success addUsrGtr" to={`/brands/${brandId}/guitars/${guitarId}/new`}>Add New User Guitar</Link>
        <div className="userGtrsContainer d-flex flex-row">
          {userGuitars.map((uG) => <UserGuitar key={uG.id} guitar={uG} brandId={brandId} deleteGuitar={this.deleteGuitar}/>)}
        </div>
      </div>
    );
  }
}

export default UserGuitars;
