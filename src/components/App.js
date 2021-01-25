import React from 'react';
import DrinkList from '../containers/DrinkList';
import BrowseIndex from './BrowseIndex';
import Footer from '../layouts/Footer';

const App = () => (
  <>
    <BrowseIndex />
    <DrinkList />
    <Footer />
  </>
);

export default App;
