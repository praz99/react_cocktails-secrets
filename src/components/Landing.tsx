import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Drink from "./Drink";
import { API_MAIN } from "../constants/api";
import { Link } from "react-router-dom";
import type { Drink as DrinkType } from "../types";
import Loading from "./Loading";

/* ---------------- Hero ---------------- */

const Hero = styled.section`
  padding: 3rem 1.5rem;
  text-align: center;
  color: var(--text);
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  color: var(--accent);
`;

const Subtitle = styled.p`
  color: var(--muted);
  margin-bottom: 1.5rem;
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CTA = styled(Link)`
  background: var(--accent);
  color: var(--bg-2);
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
`;

/* ---------------- Layout ---------------- */

const Featured = styled.div`
  padding: 2rem 1.5rem 5rem;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div<{ offset?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50%;

  ${({ offset }) =>
    offset &&
    `
    transform: translateY(10rem);
  `}

  @media (max-width: 768px) {
    width: 100%;
    transform: none;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
`;

/* ---------------- Types ---------------- */

type DrinkState = {
  loading: boolean;
  data?: DrinkType;
};

/* ---------------- Component ---------------- */

const Landing = () => {
  const [cards, setCards] = useState<DrinkState[]>([]);

  useEffect(() => {
    const initial = Array.from({ length: 3 }).map(() => ({
      loading: true,
    }));

    setCards(initial);

    initial.forEach(async (_, index) => {
      try {
        const res = await axios.get(`${API_MAIN}random.php`);
        const drink = res.data.drinks?.[0];

        setCards((prev) => {
          const copy = [...prev];
          copy[index] = { loading: false, data: drink };
          return copy;
        });
      } catch (err) {
        setCards((prev) => {
          const copy = [...prev];
          copy[index] = { loading: false, data: undefined };
          return copy;
        });
      }
    });
  }, []);

  /* split into columns */
  const left: DrinkState[] = [];
  const right: DrinkState[] = [];

  cards.forEach((card, index) => {
    if (index % 2 === 0) left.push(card);
    else right.push(card);
  });

  const renderCard = (card: DrinkState) => {
    if (card.loading) return <Loading />;
    if (!card.data) return <div>Failed to load</div>;
    return <Drink drink={card.data} large />;
  };

  return (
    <div>
      <Hero>
        <Title>Welcome to The CockTails</Title>
        <Subtitle>
          Discover crafted cocktail recipes — loaded progressively.
        </Subtitle>

        <CTAGroup>
          <CTA to="/search?f=a">Browse All</CTA>
          <CTA to="/browse">Browse Categories</CTA>
        </CTAGroup>
      </Hero>

      <Featured>
        <Grid>
          <Column>
            {left.map((card, i) => (
              <CardWrapper key={`l-${i}`}>{renderCard(card)}</CardWrapper>
            ))}
          </Column>

          <Column offset>
            {right.map((card, i) => (
              <CardWrapper key={`r-${i}`}>{renderCard(card)}</CardWrapper>
            ))}
          </Column>
        </Grid>
      </Featured>
    </div>
  );
};

export default Landing;
