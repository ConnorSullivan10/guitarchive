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
        <div className="card card-body flex-fill Guitar col-3">
            <div className="gitPicContainer container">
              <img className="images modelImg img" src={guitar.modelImageUrl} alt=""/>
            </div>
            <div className="guitarCardHeader text-center">
              <p className="card-title modelName">{guitar.modelName}</p>
              <Link className="btn btn-success usrGtrBtn" to={`/brands/${guitar.brandId}/guitars/${guitar.id}`}>User Guitars</Link>
            </div>
              <p className="card-title">
                {guitar.description}
              </p>
        </div>
    );
  }
}

export default Guitar;
