import React from 'react';
import { Link } from 'react-router-dom';
import './UserGuitars.scss';
import UserGuitar from '../../shared/UserGuitar/UserGuitar';
import ToneChasingModal from '../../shared/ToneChasingModal/ToneChasingModal';
import guitarsData from '../../../helpers/data/guitarsData';
import userGuitarsData from '../../../helpers/data/userGuitarsData';
import toneLegendsData from '../../../helpers/data/toneLegendsData';

class UserGuitars extends React.Component {
     state = {
       userGuitars: [],
       toneLegends: [],
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
       toneLegendsData.getToneLegendsByGuitarId(guitarId)
         .then((toneLegends) => this.setState({ toneLegends }))
         .catch((err) => console.error('error from get legends by guitar', err));
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
    const {
      brandId, userGuitars, show, toneLegends,
    } = this.state;
    const { guitarId } = this.props.match.params;
    const toneTipBuilder = () => {
      if (brandId !== 'brand3') {
        return (
        <button className="btn btn-md toneTipsBtn" onClick={this.modalOpen}>Tone Tips</button>
        );
      }
      return (<div></div>);
    };
    return (
      <div className="UserGuitars d-flex flex-column">
        <h1 className="text-center">User Guitars</h1>
        <center><Link className="btn btn-md btn-success text-center addUsrGtrBtn" to={`/brands/${brandId}/guitars/${guitarId}/new`}>Add New User Guitar</Link></center>
        <div className="usrBtnContainer d-flex flex-row">
          <Link className="btn btn-md backGtrBtn" to={`/brands/${brandId}/guitars`}>Back To Guitar Models</Link>
          { toneTipBuilder() }
        </div>
        <ToneChasingModal modalClose={this.modalClose} show={show} toneLegends={toneLegends}/>
        <div className="userGtrsContainer d-flex flex-row">
          {userGuitars.map((uG) => <UserGuitar key={uG.id} guitar={uG} brandId={brandId} deleteGuitar={this.deleteGuitar}/>)}
        </div>
      </div>
    );
  }
}

export default UserGuitars;
