import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './app';
import Home from './Moduls/index';
import Map from './Moduls/componentMap/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/map/:address" component={Map}/>
  </Route>
);
