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
     <div className="card">
        <img className="images" src={userGuitar.imageUrl} alt=""/>
          <div className="card-body">
            <div className="card-header d-flex flex-row">
              <p className="card-title">{userGuitar.notes}</p>
               <ul>
                <li>{userGuitar.modelYear}</li>
                <li>{userGuitar.cutawayStyle}</li>
                <li>{userGuitar.controls}</li>
                <li>{userGuitar.bodyWood}</li>
                <li>{userGuitar.neckWood}</li>
                <li>{userGuitar.fretboardWood}</li>
                <li>{userGuitar.pickups}</li>
                <li>{userGuitar.pickupLayout}</li>
                <li>{userGuitar.scaleLength}</li>
                <li>{userGuitar.tuners}</li>
                <li>{userGuitar.bridge}</li>
                <li>{userGuitar.bodyDimensions}</li>
                <li>{userGuitar.neckDimensions}</li>
                <li>{userGuitar.neckShape}</li>
                <li>{userGuitar.fretboardRadius}</li>
                <li>{userGuitar.fretSize}</li>
                <li>{userGuitar.construction}</li>
              </ul>
            </div>
          </div>
      </div>
       );
     }
}

export default LoneUserGuitar;
