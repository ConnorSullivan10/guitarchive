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
        <Link className="card" to={`/brands/${brand.id}/guitars`}>
          <div className="card-body">
            <div className="card-header d-flex flex-column">
              <img className="images brandLogo" src={brand.brandLogo} alt=""/>
              <a className="card-title" href={brand.websiteUrl}>Site</a>
              <p className="card-title">Founded {brand.yearStart}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Brand;
