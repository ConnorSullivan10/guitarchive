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
        <div className="loneGtr d-flex flex-row row">
          <img className="loneContainer image loneImg col-4" src={userGuitar.imageUrl} alt=""/>
          <ul className=" loneContainer col-7 specList">
            <li className="guitDescription">{userGuitar.notes}</li>
            <li>Year Made: {userGuitar.modelYear}</li>
            <li>Control Layout: {userGuitar.controls}</li>
            <li>Body: {userGuitar.bodyWood}</li>
            <li>Neck: {userGuitar.neckWood}</li>
            <li>Fretboard: {userGuitar.fretboardWood}</li>
            <li>Pickups: {userGuitar.pickups}</li>
            <li>Scale Length: {userGuitar.scaleLength}</li>
            <li>Nut Width: {userGuitar.nutWidth}</li>
            <li>Tuners: {userGuitar.tuners}</li>
            <li>Bridge: {userGuitar.bridge}</li>
            <li>Neck Shape: {userGuitar.neckShape}</li>
            <li>Neck Dimensions: {userGuitar.neckDimensions}</li>
            <li>Fretboard Radius: {userGuitar.fretboardRadius}</li>
            <li>Frets: {userGuitar.frets}</li>
            <li>Body Type: {userGuitar.bodyConstruction}</li>
            <li>Neck Joint: {userGuitar.neckJointConstruction}</li>
            <li>Weight: {userGuitar.weight}</li>
          </ul>
        </div>
       );
     }
}

export default LoneUserGuitar;
