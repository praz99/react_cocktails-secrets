import { useEffect, useState } from "react";
import axios from "axios";
import Drink from "../Drink";
import { API_MAIN } from "../../constants/api";
import { CATEGORIES } from "../../constants/categories";

import type { Drink as DrinkType } from "../../types";
import {
  CategoryButton,
  CategoryGrid,
  DrinkGrid,
  Header,
  Message,
  Section,
  Subtitle,
  Title,
} from "./styles";

type BrowseState = {
  drinks: DrinkType[];
  isLoading: boolean;
  isError: boolean;
};

const BrowseIndex = () => {
  const [activeCategory, setActiveCategory] = useState("Cocktail");
  const [state, setState] = useState<BrowseState>({
    drinks: [],
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    const fetchByCategory = async () => {
      setState((prev) => ({ ...prev, isLoading: true, isError: false }));
      try {
        const res = await axios.get(
          `${API_MAIN}filter.php?c=${activeCategory}`,
        );
        const drinks = Array.isArray(res.data.drinks) ? res.data.drinks : [];
        setState({ drinks, isLoading: false, isError: false });
      } catch {
        setState({ drinks: [], isLoading: false, isError: true });
      }
    };

    fetchByCategory();
  }, [activeCategory]);

  return (
    <Section>
      <Header>
        <Title>Browse by Category</Title>
        <Subtitle>Select a category to explore drinks</Subtitle>
      </Header>

      <CategoryGrid aria-label="Category filter">
        {CATEGORIES.map((category) => (
          <CategoryButton
            key={category}
            $active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryGrid>

      {state.isError && (
        <Message>Something went wrong. Please try again…</Message>
      )}
      {state.isLoading ? (
        <Message>Loading drinks…</Message>
      ) : (
        <>
          {state.drinks.length ? (
            <DrinkGrid>
              {state.drinks.map((drink) => (
                <Drink key={drink.idDrink} drink={drink} />
              ))}
            </DrinkGrid>
          ) : (
            <Message>
              No drinks available for this category. Please try another one.
            </Message>
          )}
        </>
      )}
    </Section>
  );
};

export default BrowseIndex;
