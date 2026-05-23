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
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
  gap: 0.5rem;
  padding: 0;
  margin: 0.75rem 0 1.25rem;
`;

const LinkAnchor = styled(Link)`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.03);
  color: var(--text);
  text-decoration: none;
  font-weight: 700;
  transition: transform 120ms ease, background 120ms ease;
  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(90deg, rgba(15,185,168,0.12), rgba(107,6,70,0.06));
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
