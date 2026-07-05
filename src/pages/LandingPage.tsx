import { useEffect, useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import Drink from "../components/Drink";
import { API_MAIN } from "../constants/api";
import { Link } from "react-router-dom";
import type { Drink as DrinkType } from "../types";
import Loading from "../components/Loading";

const fadeIn = keyframes`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}`;

const Hero = styled.section`
  padding: 4rem 1.5rem 3rem;
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent},
    #48d1c0
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Sub = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.05rem;
  margin-bottom: 2rem;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
`;

const CTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.bg2};
  padding: 0.7rem 1.5rem;
  border-radius: ${({ theme }) => theme.radius.full};
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  margin: 0 0.4rem 0.75rem;
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const OutlineCTA = styled(CTA)`
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  &:hover {
    background: ${({ theme }) => theme.colors.accentGlow};
  }
`;

const Featured = styled.section`
  padding: 1rem 1.5rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
  animation: ${fadeIn} 0.6s ease-out 0.2s both;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

type DrinkState = { loading: boolean; data?: DrinkType };

const LandingPage = () => {
  const [cards, setCards] = useState<DrinkState[]>([]);

  useEffect(() => {
    const initial = Array.from({ length: 6 }, () => ({ loading: true }));
    setCards(initial);

    initial.forEach(async (_, index) => {
      try {
        const res = await axios.get(`${API_MAIN}random.php`);
        const drink = res.data.drinks?.[0];
        setCards((prev) => {
          const c = [...prev];
          c[index] = { loading: false, data: drink };
          return c;
        });
      } catch {
        setCards((prev) => {
          const c = [...prev];
          c[index] = { loading: false };
          return c;
        });
      }
    });
  }, []);

  return (
    <div>
      <Hero>
        <Title>Welcome to The CockTails</Title>
        <Sub>
          Discover crafted cocktail recipes from around the world. Mix, sip, and
          enjoy.
        </Sub>
        <div>
          <CTA to="/search?f=a">Browse All Drinks</CTA>
          <OutlineCTA to="/browse">Browse Categories</OutlineCTA>
        </div>
      </Hero>
      <Featured>
        <Grid>
          {cards.map((card, i) =>
            card.loading ? (
              <Loading key={i} />
            ) : card.data ? (
              <Drink key={card.data.idDrink} drink={card.data} large />
            ) : (
              <div key={i}>Failed to load</div>
            ),
          )}
        </Grid>
      </Featured>
    </div>
  );
};

export default LandingPage;
