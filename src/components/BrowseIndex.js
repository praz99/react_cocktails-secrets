import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import DrinkList from '../containers/DrinkList';
import '../styles/BrowseIndex.css';

const ALPHABETS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const useQuery = () => new URLSearchParams(useLocation().search);

const BrowseIndex = () => {
  const query = useQuery();
  let search = query.get('f');
  if (!search) {
    search = 'a';
  }

  return (
    <>
      <div className="browse-index-container">
        <h3>Search Index</h3>
        <ul className="list-alphabetical">
          {ALPHABETS.map(character => (
            <li key={`${character}-1`}>
              <Link to={`/search?f=${character}`} className="browse-index-links">{character.toUpperCase()}</Link>
            </li>
          )) }
        </ul>
      </div>
      <DrinkList search={search} />
    </>
  );
};

export default BrowseIndex;
