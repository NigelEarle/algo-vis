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
  BubbleSortComponent,
  InsertionSortComponent,
  MergeSortComponent,
  SelectionSortComponent,
  QuickSortComponent,
} from '../components';

const AlgoVisRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={HomeComponent} />
      <Route path="/bubblesort" component={BubbleSortComponent} />
      <Route path="/insertionsort" component={InsertionSortComponent} />
      <Route path="/mergesort" component={MergeSortComponent} />
      <Route path="/selectionsort" component={SelectionSortComponent} />
      <Route path="/quicksort" component={QuickSortComponent} />
    </Route>
  </Router>
);

export default AlgoVisRouter;
