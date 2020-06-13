import React from 'react';
import PropTypes from 'prop-types';

import classes from './Span.module.css';

const Span = (props) => <span className={[classes.Span, props.bold && classes.Bold].join(' ')}>{props.children}</span>;

Span.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Span;
