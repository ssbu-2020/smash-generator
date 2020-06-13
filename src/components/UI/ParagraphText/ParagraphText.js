import React from 'react';
import PropTypes from 'prop-types';

import classes from './ParagraphText.module.css';

const ParagraphText = (props) => <p className={classes.ParagraphText}>{props.children}</p>;

ParagraphText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default ParagraphText;
