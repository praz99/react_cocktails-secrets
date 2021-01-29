import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import DrinkDetails from './components/DrinkDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/search" component={App} />
      <Route path="/details/:id" component={DrinkDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
