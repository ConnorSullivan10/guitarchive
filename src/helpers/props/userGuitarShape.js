import PropTypes from 'prop-types';

const userGuitarShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  modelYear: PropTypes.string.isRequired,
  guitarId: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  controls: PropTypes.string.isRequired,
  bodyWood: PropTypes.string.isRequired,
  neckWood: PropTypes.string.isRequired,
  fretboardWood: PropTypes.string.isRequired,
  pickups: PropTypes.string.isRequired,
  scaleLength: PropTypes.string.isRequired,
  nutWidth: PropTypes.string.isRequired,
  tuners: PropTypes.string.isRequired,
  bridge: PropTypes.string.isRequired,
  neckShape: PropTypes.string.isRequired,
  neckDimensions: PropTypes.string.isRequired,
  fretboardRadius: PropTypes.string.isRequired,
  frets: PropTypes.string.isRequired,
  bodyConstruction: PropTypes.string.isRequired,
  neckJointConstruction: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default userGuitarShape;
