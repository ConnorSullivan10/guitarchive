import React from 'react';
import './LoneUserGuitar.scss';
import { Link } from 'react-router-dom';
import guitarsData from '../../../helpers/data/guitarsData';
import userGuitarsData from '../../../helpers/data/userGuitarsData';
import bodyImg from '../../../images/body.jpg';
import controlImg from '../../../images/controlLayout2.jpg';
import neckWoodImg from '../../../images/neckwood.jpg';
import fretboardWoodImg from '../../../images/fretboard.jpg';
import pickupImg from '../../../images/pickups2.jpg';
import scaleLengthImg from '../../../images/scaleLength2.png';


class LoneUserGuitar extends React.Component {
     state = {
       userGuitar: {},
       brandId: '',
     }

     componentDidMount() {
       const { userGuitarId } = this.props.match.params;
       userGuitarsData.getLoneUserGuitar(userGuitarId)
         .then((userGuitar) => {
           this.setState({ userGuitar: userGuitar.data });
           guitarsData.getSingleGuitar(userGuitar.data.guitarId)
             .then((response) => {
               this.setState({ brandId: response.data.brandId });
             });
         })
         .catch((errFromLoneGuitar) => console.error({ errFromLoneGuitar }));
     }


     render() {
       const { userGuitar, brandId } = this.state;
       return (
        <div className="loneGtr ">
          <div className=" loneContainer card card-body specList">
            <div className="specHeader d-flex flex-row row">
              <div className="loneImgContainer col-5">
                <img className="loneContainer image loneImg" src={userGuitar.imageUrl} alt=""/>
                <h4 className="loneYear text-center">Model Year: {userGuitar.modelYear}</h4>
              </div>
              <h4 className="guitDescription col-7">
                {userGuitar.notes}
              </h4>
            </div>
            <br></br>
            <div className="specs">
              <h2 className="text-center">Specifications</h2>
              <br></br>
              <div className="specColumns d-flex flex-row row">
                <div className="col-6 specCol">
                  <div className="spec">
                    <div className="d-flex flex-row">
                      <img src={ controlImg } className="specImg" alt="controls"/>
                      <div className="d-flex flex-column">
                        <h4>Control Layout: </h4>
                        <h5>{userGuitar.controls}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="spec">
                    <div className="d-flex flex-row">
                      <img src={ bodyImg } className="specImg" alt="body wood"/>
                      <div className="d-flex flex-column">
                        <h4>Body: </h4>
                        <h5>{userGuitar.bodyWood}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="spec">
                    <div className="d-flex flex-row">
                      <img src={ neckWoodImg } className="specImg" alt="neck wood"/>
                      <div className="d-flex flex-column">
                        <h4>Neck: </h4>
                        <h5>{userGuitar.neckWood}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="spec">
                    <div className="d-flex flex-row">
                      <img src={ fretboardWoodImg } className="specImg" alt="fretboard wood"/>
                      <div className="d-flex flex-column">
                        <h4>Fretboard: </h4>
                        <h5>{userGuitar.fretboardWood}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="spec">
                    <div className="d-flex flex-row">
                      <img src={ pickupImg } className="specImg" alt="pickups"/>
                      <div className="d-flex flex-column">
                        <h4>Pickups: </h4>
                        <h5>{userGuitar.pickups}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="spec">
                    <div className="d-flex flex-row">
                      <img src={ scaleLengthImg } className="specImg" alt="scale length"/>
                      <div className="d-flex flex-column">
                        <h4>Scale Length: </h4>
                        <h5>{userGuitar.scaleLength}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="spec">
                    <div className="d-flex flex-row"></div>
                    <div className="d-flex flex-column">
                      <h4>Nut Width: </h4>
                      <h5>{userGuitar.nutWidth}</h5>
                    </div>
                  </div>
                  <div className="spec">
                    <div className="d-flex flex-row"></div>
                    <div className="d-flex flex-column">
                      <h4>Tuners: </h4>
                      <h5>{userGuitar.tuners}</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6 specCol">
                  <div className="spec">
                    <div className="d-flex flex-row"></div>
                    <div className="d-flex flex-column">
                      <h4>Bridge: </h4>
                      <h5>{userGuitar.bridge}</h5>
                    </div>
                  </div>
                  <div className="spec">
                    <div className="d-flex flex-row"></div>
                    <div className="d-flex flex-column">
                      <h4>Neck Shape: </h4>
                      <h5>{userGuitar.neckShape}</h5>
                    </div>
                  </div>
                  <div className="spec">
                    <div className="d-flex flex-row"></div>
                    <div className="d-flex flex-column">
                      <h4>Neck Dimensions: </h4>
                      <h5>{userGuitar.neckDimensions}</h5>
                    </div>
                  </div>
                  <div className="spec">
                    <div className="d-flex flex-row"></div>
                    <div className="d-flex flex-column">
                      <h4>Fretboard Radius: </h4>
                      <h5>{userGuitar.fretboardRadius}</h5>
                    </div>
                  </div>
                  <div className="spec">
                    <div className="d-flex flex-row"></div>
                    <div className="d-flex flex-column">
                      <h4>Frets: </h4>
                      <h5>{userGuitar.frets}</h5>
                    </div>
                  </div>
                  <div className="spec">
                    <div className="d-flex flex-row"></div>
                    <div className="d-flex flex-column">
                      <h4>Body Type: </h4>
                      <h5>{userGuitar.bodyConstruction}</h5>
                    </div>
                  </div>
                  <div className="spec">
                    <div className="d-flex flex-row"></div>
                    <div className="d-flex flex-column">
                      <h4>Neck Joint: </h4>
                      <h5>{userGuitar.neckJointConstruction}</h5>
                    </div>
                  </div>
                  <div className="spec">
                    <div className="d-flex flex-row"></div>
                    <div className="d-flex flex-column">
                      <h4>Weight: </h4>
                      <h5>{userGuitar.weight}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <Link className="btn text-center col-12 backUsrBtn" to={`/brands/${brandId}/guitars/${userGuitar.guitarId}`}>Back To User Guitars</Link>
            </div>
          </div>
        </div>
       );
     }
}

export default LoneUserGuitar;
