import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = (props) => <div>{props.children}</div>;

CardFooter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default CardFooter;
