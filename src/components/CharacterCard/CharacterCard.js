import React from 'react';
import PropTypes from 'prop-types';

import classes from './CharacterCard.module.css';
import { Card, CardBody, CardFooter, CardHeader, CardImage } from '../Card';
import { Button, HeaderText, ParagraphText, Span } from '../UI';

const CharacterCard = (props) => {
  const { count, character } = props;

  if (count > 80) {
    return (
      <div className={classes.CharacterCard}>
        <HeaderText>Random Character Generator</HeaderText>
        <div className={classes.BeforeCount}>
          <Button onClick={props.onClick}>Generate</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.CharacterCard}>
      <Card>
        <CardHeader>
          <HeaderText>{character.name}</HeaderText>
        </CardHeader>
        <CardImage src={character.image} alt={character.name} />
        <CardBody>
          <ParagraphText center>
            Characters Remaining: <Span bold>{count}</Span>
          </ParagraphText>
        </CardBody>
        <CardFooter>
          <Button onClick={props.onClick}>{count === 0 ? 'Reset List' : 'Generate'}</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default CharacterCard;
