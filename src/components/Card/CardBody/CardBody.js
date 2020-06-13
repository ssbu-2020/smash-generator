import React from 'react';
import PropTypes from 'prop-types';

import classes from './CardBody.module.css';

const CardBody = (props) => {
  return <div className={classes.CardBody}>{props.children}</div>;
};

CardBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default CardBody;
