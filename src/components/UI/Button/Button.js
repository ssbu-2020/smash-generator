import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

const Button = (props) => (
  <button onClick={props.onClick} className={classes.Button} disabled={props.disabled}>
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
