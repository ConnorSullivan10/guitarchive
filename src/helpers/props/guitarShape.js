import PropTypes from 'prop-types';

const guitarShape = PropTypes.shape({
  id: PropTypes.string,
  brandId: PropTypes.string.isRequired,
  modelName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  modelImageUrl: PropTypes.string.isRequired,
});

export default { guitarShape };
