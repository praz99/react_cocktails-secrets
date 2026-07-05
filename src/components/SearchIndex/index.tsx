import { useLocation } from "react-router-dom";
import DrinkList from "../../containers/DrinkList";
import {
  AlphabetNav,
  Header,
  LetterLink,
  Section,
  Subtitle,
  Title,
} from "./styles";

const ALPHABETS = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i),
);

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchIndex = () => {
  const query = useQuery();
  const search = query.get("f") || "a";

  return (
    <Section>
      <Header>
        <Title>Browse All Drinks</Title>
        <Subtitle>Select a letter to filter by name</Subtitle>
      </Header>

      <AlphabetNav aria-label="Alphabetical index">
        {ALPHABETS.map((character) => (
          <LetterLink
            key={character}
            to={`/search?f=${character}`}
            $active={search === character}
            aria-label={`Drinks starting with ${character.toUpperCase()}`}
          >
            {character.toUpperCase()}
          </LetterLink>
        ))}
      </AlphabetNav>

      <DrinkList search={search} />
    </Section>
  );
};

export default SearchIndex;
