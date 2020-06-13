import React from 'react';
import PropTypes from 'prop-types';

import classes from './Card.module.css';

const Card = (props) => <div className={classes.Card}>{props.children}</div>;

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Card;
