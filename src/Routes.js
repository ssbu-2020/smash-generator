import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CharacterGenerator } from './containers';

const routes = () => (
  <Switch>
    <Route path="/" component={CharacterGenerator} />
  </Switch>
);

export default routes;
