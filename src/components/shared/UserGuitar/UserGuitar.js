import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import authData from '../../../helpers/data/authData';
import userGuitarShape from '../../../helpers/props/userGuitarShape';
import './UserGuitar.scss';

class UserGuitar extends React.Component {
  static propTypes = {
    guitar: userGuitarShape.userGuitarShape,
    brandId: PropTypes.string,
    deleteGuitar: PropTypes.func,
  }

  deleteUserGuitarEvent = (e) => {
    e.preventDefault();
    const { guitar, deleteGuitar } = this.props;
    deleteGuitar(guitar.id);
  }

  render() {
    const { brandId, guitar } = this.props;
    const userUid = authData.getUid();
    const buildButtons = () => {
      if (userUid === guitar.uid) {
        return (
            <div className="userBtnContainer">
              <Link className="btn btn-warning updateBtn" to={`/brands/${brandId}/guitars/${guitar.guitarId}/${guitar.id}/edit`}>Edit</Link>
              <button className="btn btn-danger closeBtn" onClick={this.deleteUserGuitarEvent}>Delete</button>
            </div>
        );
      }
      return <div className="nothing"></div>;
    };
    return (
        <div className="card card-body col-4 flex-fill userGtrCard" >
            <img className="images userGtrImg img" src={guitar.imageUrl} alt=""/>
            <br></br>
            <div className="d-flex flex-column">
              <div className="userGtrCopy">
                <p className="card-title">Model Year: {guitar.modelYear}</p>
                <Link className="card-title" to={`/brands/${brandId}/guitars/${guitar.guitarId}/${guitar.id}`}>
                    More Details
                </Link>
              </div>
              { buildButtons() }
            </div>
        </div>
    );
  }
}

export default UserGuitar;
