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
        <div className="card card-body col-3 flex-fill Guitar">
            <div className="gitPicContainer text-center container">
              <img className="images modelImg img" src={guitar.modelImageUrl} alt=""/>
            </div>
            <div className="guitarCardHeader text-center">
              <p className="card-title modelName">{guitar.modelName}</p>
              <Link className="btn usrGtrBtn" to={`/brands/${guitar.brandId}/guitars/${guitar.id}`}>User Guitars</Link>
            </div>
              <p className="card-title">
                {guitar.description}
              </p>
        </div>
    );
  }
}

export default Guitar;
