import PropTypes from 'prop-types';

const userGuitarshape = PropTypes.shape({
  id: PropTypes.string,
  modelYear: PropTypes.string,
  guitarId: PropTypes.string,
  imageUrl: PropTypes.string,
  notes: PropTypes.string,
  controls: PropTypes.string,
  bodyWood: PropTypes.string,
  neckWood: PropTypes.string,
  fretboardWood: PropTypes.string,
  pickups: PropTypes.string,
  scaleLength: PropTypes.string,
  nutWidth: PropTypes.string,
  tuners: PropTypes.string,
  bridge: PropTypes.string,
  neckShape: PropTypes.string,
  neckDimensions: PropTypes.string,
  fretboardRadius: PropTypes.string,
  frets: PropTypes.string,
  bodyConstruction: PropTypes.string,
  neckJointConstruction: PropTypes.string,
  weight: PropTypes.string,
  uid: PropTypes.string,
});

export default userGuitarshape;
