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

  deleteUserGuitarEvent = (e) => {
    e.preventDefault();
    const { userGuitar, deleteGuitar } = this.props;
    deleteGuitar(userGuitar.id);
  }

  render() {
    const { brandId, userGuitar } = this.props;
    const userUid = authData.getUid();
    const buildButtons = () => {
      if (userUid === userGuitar.uid) {
        return (
            <div className="userBtnContainer">
              <Link className="btn btn-warning updateBtn" to={`/brands/${brandId}/guitars/${userGuitar.guitarId}/${userGuitar.id}/edit`}>Edit</Link>
              <button className="btn btn-danger closeBtn" onClick={this.deleteUserGuitarEvent}>Delete</button>
            </div>
        );
      }
      return <div className="nothing"></div>;
    };
    return (
      <div className="userGuitars col-4">
        <div className="card userGtrCard" >
          <div className="card-body userGtrBody">
            <div className="card-header d-flex flex-column">
              <img className="images userGtrImg card-img-top" src={userGuitar.imageUrl} alt=""/>
              <div className="userGtrCopy">
                <p className="card-title">Model Year: {userGuitar.modelYear}</p>
                <Link className="card-title" to={`/brands/${brandId}/guitars/${userGuitar.guitarId}/${userGuitar.id}`}>
                    More Details
                </Link>
              </div>
              { buildButtons() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserGuitar;
