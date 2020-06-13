import React from 'react';
import PropTypes from 'prop-types';

import classes from './CardImage.module.css';

const CardImage = (props) => (
  <div className={classes.CardImage}>
    <img src={props.src} alt={props.alt} />
  </div>
);

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CardImage;
