import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Drink from "../../components/Drink";

const drinkOne = {
  idDrink: "13501",
  strDrink: "ABC",
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
};

it("renders item component correctly", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Drink drink={drinkOne} />
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("renders a link to see drink details", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Drink drink={drinkOne} />
    </MemoryRouter>,
  );
  const link = getByTestId("details-link");
  expect(link.innerHTML).toMatch(drinkOne.strDrink);
});
