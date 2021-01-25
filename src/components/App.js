import React from 'react';
import { Route } from 'react-router-dom';
import Catalogue from '../containers/Catalogue';
import DrinkDetails from '../components/DrinkDetails';
import BrowseIndex from './BrowseIndex';

const App = () => (
  <>
    <BrowseIndex />
    <Route exact path="/">
      <Catalogue />
    </Route>
    <Route exact path="/:id">
      <DrinkDetails />
    </Route>
    <Footer />
  </>
);

export default App;
