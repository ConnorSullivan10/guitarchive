import React from 'react';
import { Link } from 'react-router-dom';
import brandShape from '../../../helpers/props/brandShape';
import './Brand.scss';

class Brand extends React.Component {
  static propTypes = {
    brand: brandShape.brandShape,
  }

  render() {
    const { brand } = this.props;
    return (
      <div className="brands col-4">
        <div className="card flex-fill " to={`/brands/${brand.id}/guitars`}>
          <div className="card-body brandCard">
              <img className="images brandLogo" src={brand.brandLogo} alt=""/>
              <div className="brandCardCopy">
                <div className="text-center">
                  <a className="card-title" href={brand.websiteUrl} target="_blank" rel="noopener noreferrer">Site</a>
                </div>
                <p className="card-title text-center">Founded {brand.yearStart}</p>
                <Link className="btn guitarsBtn" to={`/brands/${brand.id}/guitars`}>Guitar Models</Link>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Brand;
