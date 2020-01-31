import React from 'react';
import { Link } from 'react-router-dom';
import guitarShape from '../../../helpers/props/guitarShape';
import './Guitar.scss';

class Guitar extends React.Component {
  static propTypes = {
    guitar: guitarShape.guitarShape,
  }

  render() {
    const { guitar } = this.props;
    return (
        <div className="card card-body flex-fill Guitar col-4">
            <img className="images modelImg" src={guitar.modelImageUrl} alt=""/>
            <div className="card-header">
              <p className="card-title modelName">{guitar.modelName}</p>
              <Link className="btn btn-success usrBtn" to={`/brands/${guitar.brandId}/guitars/${guitar.id}`}>User Guitars</Link>
              <p className="card-title">
                {guitar.description}
              </p>
            </div>
        </div>
    );
  }
}

export default Guitar;
