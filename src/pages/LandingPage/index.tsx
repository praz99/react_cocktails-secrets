import { useEffect, useState } from "react";
import axios from "axios";
import { CTA, Featured, Grid, Hero, OutlineCTA, Sub, Title } from "./styles";
import { API_MAIN } from "../../constants/api";
import Loading from "../../components/Loading";
import Drink from "../../components/Drink";

import type { Drink as DrinkType } from "../../types";

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
