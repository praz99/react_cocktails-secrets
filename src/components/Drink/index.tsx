import type { Drink as DrinkType } from "../../types";
import { Card, Name } from "./styles";

type DrinkProps = { drink: DrinkType; large?: boolean };

const Drink = ({ drink, large = false }: DrinkProps) => (
  <Card
    to={`/details/${drink.idDrink}`}
    $bg={drink.strDrinkThumb}
    $large={large}
    data-testid="details-link"
  >
    <Name>{drink.strDrink}</Name>
  </Card>
);

export default Drink;
