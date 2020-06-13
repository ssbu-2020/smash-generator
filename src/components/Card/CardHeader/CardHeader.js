import React from 'react';
import PropTypes from 'prop-types';

import classes from './CardHeader.module.css';

const CardHeader = (props) => <div className={classes.CardHeader}>{props.children}</div>;

CardHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default CardHeader;
