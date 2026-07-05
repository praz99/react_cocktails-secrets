import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Drink from "./Drink";
import Loading from "./Loading";
import { API_MAIN } from "../constants/api";
import { CATEGORIES } from "../constants/categories";
import type { Drink as DrinkType } from "../types";

const Section = styled.section`
  padding: 1.5rem 0;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
`;

const CategoryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin: 1rem 0 2rem;
`;

const CategoryButton = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1.25rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.glassBg};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.bg2 : theme.colors.text};
  font-weight: ${({ $active }) => ($active ? "700" : "600")};
  font-size: 0.85rem;
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? "transparent" : theme.colors.glassBorder};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    background: ${({ $active, theme }) =>
      $active ? theme.colors.accent : theme.colors.accentGlow};
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const DrinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
  padding: 0 0 2rem;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.95rem;
  text-align: center;
`;

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
