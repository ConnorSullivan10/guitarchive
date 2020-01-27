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
      <div className="guitars col-4">
        <div className="card Guitar">
          <div className="card-body">
            <img className="images modelImg" src={guitar.modelImageUrl} alt=""/>
            <div className="card-header">
              <div className="row gtrCardTop align-items-center">
                <p className="card-title modelName">{guitar.modelName}</p>
                <Link className="btn btn-success usrBtn" to={`/brands/${guitar.brandId}/guitars/${guitar.id}`}>User Guitars</Link>
              </div>
              <p className="card-title">
                {guitar.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Guitar;
