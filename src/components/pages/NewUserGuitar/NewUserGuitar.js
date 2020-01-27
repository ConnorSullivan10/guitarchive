import React from 'react';
import './NewUserGuitar.scss';
import authData from '../../../helpers/data/authData';
import userGuitarData from '../../../helpers/data/userGuitarsData';

class NewUserGuitar extends React.Component {
  state = {
    guitModelYear: '',
    guitImageUrl: '',
    guitNotes: '',
    guitControls: '',
    guitBodyWood: '',
    guitNeckWood: '',
    guitFretboardWood: '',
    guitPickups: '',
    guitScaleLength: '',
    guitNutWidth: '',
    guitTuners: '',
    guitBridge: '',
    guitNeckShape: '',
    guitNeckDimensions: '',
    guitFretboardRadius: '',
    guitFrets: '',
    guitBodyConstruction: '',
    guitNeckJointConstruction: '',
    guitWeight: '',
  }

  modelYearChange = (e) => {
    e.preventDefault();
    this.setState({ guitModelYear: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ guitImageUrl: e.target.value });
  }

  notesChange = (e) => {
    e.preventDefault();
    this.setState({ guitNotes: e.target.value });
  }

  controlsChange = (e) => {
    e.preventDefault();
    this.setState({ guitControls: e.target.value });
  }

  bodyWoodChange = (e) => {
    e.preventDefault();
    this.setState({ guitBodyWood: e.target.value });
  }

  neckWoodChange = (e) => {
    e.preventDefault();
    this.setState({ guitNeckWood: e.target.value });
  }

  fretboardWoodChange = (e) => {
    e.preventDefault();
    this.setState({ guitFretboardWood: e.target.value });
  }

  pickupsChange = (e) => {
    e.preventDefault();
    this.setState({ guitPickups: e.target.value });
  }

  scaleLengthChange = (e) => {
    e.preventDefault();
    this.setState({ guitScaleLength: e.target.value });
  }

  nutWidthChange = (e) => {
    e.preventDefault();
    this.setState({ guitNutWidth: e.target.value });
  }

  tunersChange = (e) => {
    e.preventDefault();
    this.setState({ guitTuners: e.target.value });
  }

  bridgeChange = (e) => {
    e.preventDefault();
    this.setState({ guitBridge: e.target.value });
  }

  neckShapeChange = (e) => {
    e.preventDefault();
    this.setState({ guitNeckShape: e.target.value });
  }

  neckDimensionsChange = (e) => {
    e.preventDefault();
    this.setState({ guitNeckDimensions: e.target.value });
  }

  fretboardRadiusChange = (e) => {
    e.preventDefault();
    this.setState({ guitFretboardRadius: e.target.value });
  }

  fretsChange = (e) => {
    e.preventDefault();
    this.setState({ guitFrets: e.target.value });
  }

  bodyConstructionChange = (e) => {
    e.preventDefault();
    this.setState({ guitBodyConstruction: e.target.value });
  }

  neckJointConstructionChange = (e) => {
    e.preventDefault();
    this.setState({ guitNeckJointConstruction: e.target.value });
  }

  weightChange = (e) => {
    e.preventDefault();
    this.setState({ guitWeight: e.target.value });
  }

  saveNewUserGuitarEvent = (e) => {
    e.preventDefault();
    const {
      guitModelYear, guitImageUrl, guitNotes, guitControls, guitBodyWood, guitNeckWood, guitFretboardWood,
      guitPickups, guitScaleLength, guitNutWidth, guitTuners, guitBridge, guitNeckShape, guitNeckDimensions,
      guitFretboardRadius, guitFrets, guitBodyConstruction, guitNeckJointConstruction, guitWeight,
    } = this.state;
    const { guitarId, brandId } = this.props.match.params;
    const newUserGuitar = {
      guitarId,
      modelYear: guitModelYear,
      imageUrl: guitImageUrl,
      notes: guitNotes,
      controls: guitControls,
      bodyWood: guitBodyWood,
      neckWood: guitNeckWood,
      fretboardWood: guitFretboardWood,
      pickups: guitPickups,
      scaleLength: guitScaleLength,
      nutWidth: guitNutWidth,
      tuners: guitTuners,
      bridge: guitBridge,
      neckShape: guitNeckShape,
      neckDimensions: guitNeckDimensions,
      fretboardRadius: guitFretboardRadius,
      frets: guitFrets,
      bodyConstruction: guitBodyConstruction,
      neckJointConstruction: guitNeckJointConstruction,
      weight: guitWeight,
      uid: authData.getUid(),
    };
    userGuitarData.saveNewUserGuitar(newUserGuitar)
      .then(() => this.props.history.push(`/brands/${brandId}/guitars/${guitarId}`))
      .catch((err) => console.error('error from save new user guitar', err));
  }

  render() {
    const {
      guitModelYear, guitImageUrl, guitNotes, guitControls, guitBodyWood, guitNeckWood, guitFretboardWood,
      guitPickups, guitScaleLength, guitNutWidth, guitTuners, guitBridge, guitNeckShape, guitNeckDimensions,
      guitFretboardRadius, guitFrets, guitBodyConstruction, guitNeckJointConstruction, guitWeight,
    } = this.state;
    return (
      <form className="New">
        <h1>Add Your Guitar</h1>
        <div className="form-group">
          <label className="formHeader" htmlFor="guitImgUrl">Image URL</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="guitImgUrl"
            value={guitImageUrl}
            onChange={this.imageChange}
          />
        </div>
        <div className="inputRows">
          <div className="col-4">
            <div className="form-group">
              <label className="formHeader" htmlFor="guitYear">Production Year</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitYear"
                value={guitModelYear}
                onChange={this.modelYearChange}
              />
            </div>
            <div className="form-group">
              <label className="formHeader" htmlFor="guitNotes">Special Notes</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitNotes"
                value={guitNotes}
                onChange={this.notesChange}
              />
            </div>
            <div className="form-group">
              <label className="formHeader" htmlFor="guitControls">Control Layout</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitControls"
                value={guitControls}
                onChange={this.controlsChange}
              />
            </div>
            <div className="form-group">
              <label className="formHeader" htmlFor="guitBodyWood">Body Wood</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitBodyWood"
                value={guitBodyWood}
                onChange={this.bodyWoodChange}
              />
            </div>
            <div className="form-group">
              <label className="formHeader" htmlFor="guitNeckWood">Neck Wood</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitNeckWood"
                value={guitNeckWood}
                onChange={this.neckWoodChange}
              />
            </div>
            <div className="form-group">
              <label className="formHeader" htmlFor="guitFretboardWood">Fretboard Wood</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitFretboardWood"
                value={guitFretboardWood}
                onChange={this.fretboardWoodChange}
              />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label className="formHeader" htmlFor="guitPickups">Pickups</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitPickups"
                value={guitPickups}
                onChange={this.pickupsChange}
              />
            </div>
            <div className="form-group">
              <label className="formHeader" htmlFor="guitScaleLength">Scale Length</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitScaleLength"
                value={guitScaleLength}
                onChange={this.scaleLengthChange}
              />
            </div>
            <div className="form-group">
              <label className="formHeader" htmlFor="guitNutWidth">Nut Width</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitNutWidth"
                value={guitNutWidth}
                onChange={this.nutWidthChange}
              />
            </div>
            <div className="form-group">
              <label className="formHeader" htmlFor="guitTuners">Tuners</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitTuners"
                value={guitTuners}
                onChange={this.tunersChange}
              />
            </div>
            <div className="form-group">
              <label className="formHeader" htmlFor="guitBridge">Bridge</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitBridge"
                value={guitBridge}
                onChange={this.bridgeChange}
              />
            </div>
            <div className="form-group">
              <label className="formHeader" htmlFor="guitNeckShape">Neck Shape</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitNeckShape"
                value={guitNeckShape}
                onChange={this.neckShapeChange}
              />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label className="formHeader" htmlFor="guitNeckDimensions">Neck Dimensions</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitNeckDimensions"
                value={guitNeckDimensions}
                onChange={this.neckDimensionsChange}
              />
            </div>
            <div className="form-group">
              <label className="formHeader" htmlFor="guitRadius">Fretboard Radius</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitRadius"
                value={guitFretboardRadius}
                onChange={this.fretboardRadiusChange}
              />
            </div>
            <div className="form-group">
              <label className="formHeader" htmlFor="guitFrets">Frets</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitFrets"
                value={guitFrets}
                onChange={this.fretsChange}
              />
            </div>
            <div className="form-group">
              <label className="formHeader" htmlFor="guitBodyCon">Body Construction</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitBodyCon"
                value={guitBodyConstruction}
                onChange={this.bodyConstructionChange}
              />
            </div>
            <div className="form-group">
              <label className="formHeader" htmlFor="guitNeckCon">Neck Joint Construction</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitNeckCon"
                value={guitNeckJointConstruction}
                onChange={this.neckJointConstructionChange}
              />
            </div>
            <div className="form-group">
              <label className="formHeader" htmlFor="guitWeight">Weight</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="guitWeight"
                value={guitWeight}
                onChange={this.weightChange}
              />
            </div>
          </div>
        </div>
        <button className="btn btn-lg btn-success" onClick={this.saveNewUserGuitarEvent}>Add To Collection</button>
      </form>
    );
  }
}

export default NewUserGuitar;
