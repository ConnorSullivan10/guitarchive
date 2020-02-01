import React from 'react';
import './LoneUserGuitar.scss';
import userGuitarsData from '../../../helpers/data/userGuitarsData';


class LoneUserGuitar extends React.Component {
     state = {
       userGuitar: {},
     }

     componentDidMount() {
       const { userGuitarId } = this.props.match.params;
       userGuitarsData.getLoneUserGuitar(userGuitarId)
         .then((userGuitar) => {
           this.setState({ userGuitar: userGuitar.data });
         })
         .catch((errFromLoneGuitar) => console.error({ errFromLoneGuitar }));
     }


     render() {
       const { userGuitar } = this.state;
       return (
        <div className="loneGtr ">
          <div className=" loneContainer card card-body specList">
            <div className="specHeader d-flex flex-row row">
              <div className="loneImgContainter col-5">
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
                    <h4>Control Layout: </h4><h5>{userGuitar.controls}</h5>
                  </div>
                  <div className="spec">
                    <h4>Body: </h4><h5>{userGuitar.bodyWood}</h5>
                  </div>
                  <div className="spec">
                    <h4>Neck: </h4><h5>{userGuitar.neckWood}</h5>
                  </div>
                  <div className="spec">
                    <h4>Fretboard: </h4><h5>{userGuitar.fretboardWood}</h5>
                  </div>
                  <div className="spec">
                    <h4>Pickups: </h4><h5>{userGuitar.pickups}</h5>
                  </div>
                  <div className="spec">
                    <h4>Scale Length: </h4><h5>{userGuitar.scaleLength}</h5>
                  </div>
                  <div className="spec">
                    <h4>Nut Width: </h4><h5>{userGuitar.nutWidth}</h5>
                  </div>
                  <div className="spec">
                    <h4>Tuners: </h4><h5>{userGuitar.tuners}</h5>
                  </div>
                </div>
                <div className="col-6 specCol">
                  <div className="spec">
                    <h4>Bridge: </h4><h5>{userGuitar.bridge}</h5>
                  </div>
                  <div className="spec">
                    <h4>Neck Shape: </h4><h5>{userGuitar.neckShape}</h5>
                  </div>
                  <div className="spec">
                    <h4>Neck Dimensions: </h4><h5>{userGuitar.neckDimensions}</h5>
                  </div>
                  <div className="spec">
                    <h4>Fretboard Radius: </h4><h5>{userGuitar.fretboardRadius}</h5>
                  </div>
                  <div className="spec">
                    <h4>Frets: </h4><h5>{userGuitar.frets}</h5>
                  </div>
                  <div className="spec">
                    <h4>Body Type: </h4><h5>{userGuitar.bodyConstruction}</h5>
                  </div>
                  <div className="spec">
                    <h4>Neck Joint: </h4><h5>{userGuitar.neckJointConstruction}</h5>
                  </div>
                  <div className="spec">
                    <h4>Weight: </h4><h5>{userGuitar.weight}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       );
     }
}

export default LoneUserGuitar;
