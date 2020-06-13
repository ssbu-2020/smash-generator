import React from 'react';
import PropTypes from 'prop-types';

import classes from './HeaderText.module.css';

const HeaderText = (props) => <h1 className={classes.HeaderText}>{props.children}</h1>;

HeaderText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default HeaderText;
