import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

import {
  AppComponent,
  HomeComponent,
} from '../components';

const AlgoVisRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={HomeComponent} />
    </Route>
  </Router>
);

export default AlgoVisRouter;
