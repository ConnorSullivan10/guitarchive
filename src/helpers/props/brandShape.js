import PropTypes from 'prop-types';

const brandShape = PropTypes.shape({
  id: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  brandLogo: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
  yearStart: PropTypes.string.isRequired,
});

export default { brandShape };
