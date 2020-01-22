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
        <Link className="card" to={`/brands/${guitar.brandId}/guitars/${guitar.id}`}>
          <div className="card-body">
            <div className="card-header d-flex flex-column">
              <img className="images modelImg" src={guitar.modelImageUrl} alt=""/>
              <p className="card-title">{guitar.modelName}</p>
              <p className="card-title">{guitar.description}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Guitar;
