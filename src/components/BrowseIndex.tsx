import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import styled from 'styled-components';
import DrinkList from '../containers/DrinkList';

const ALPHABETS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const useQuery = () => new URLSearchParams(useLocation().search);

const Container = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  text-align: center;
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  padding: 0;
  margin: 0.5rem 0;
`;

const LinkAnchor = styled(Link)`
  color: #000;
  text-decoration: none;
  padding: 0 5px;
  &:hover {
    color: #6b0646;
  }
`;

const BrowseIndex = () => {
  const query = useQuery();
  let search = query.get('f');
  if (!search) {
    search = 'a';
  }

  return (
    <>
      <Container>
        <Title>Search Index</Title>
        <List>
          {ALPHABETS.map(character => (
            <li key={`${character}-1`}>
              <LinkAnchor to={`/search?f=${character}`}>
                {character.toUpperCase()}
              </LinkAnchor>
            </li>
          ))}
        </List>
      </Container>
      <DrinkList search={search} />
    </>
  );
};

export default BrowseIndex;
