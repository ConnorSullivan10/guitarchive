import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import authData from '../../../helpers/data/authData';
import userGuitarShape from '../../../helpers/props/userGuitarShape';
import './UserGuitar.scss';

class UserGuitar extends React.Component {
  static propTypes = {
    userGuitar: userGuitarShape.userGuitarShape,
    brandId: PropTypes.string,
    deleteGuitar: PropTypes.func,
  }

  render() {
    const { brandId, userGuitar } = this.props;
    const userUid = authData.getUid();
    const buildButtons = () => {
      if (userUid === userGuitar.uid) {
        return (
            <div className="userBtnContainer">
              <Link className="btn btn-warning" to={`/brands/${brandId}/guitars/${userGuitar.guitarId}/userGuitars/${userGuitar.id}/edit`}>Edit</Link>
              <button className="btn btn-danger" onClick={this.deleteUserGuitarEvent}>X</button>
            </div>
        );
      }
      return <div className="nothing"></div>;
    };
    return (
      <div className="guitars col-4">
        <div className="card" >
          <div className="card-body">
            <div className="card-header d-flex flex-column">
              <img className="images userGtrImg" src={userGuitar.imageUrl} alt=""/>
              <p className="card-title">{userGuitar.modelYear}</p>
              { buildButtons() }
              <Link className="card-title" to={`/brands/${brandId}/guitars/${userGuitar.guitarId}/${userGuitar.id}`}>
                  More Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserGuitar;
