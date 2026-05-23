import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../../layouts/Navbar";

it("renders Navbar component correctly", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should display the heading", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
  expect(getByTestId("navbar-heading")).toHaveTextContent("The CockTails");
});

it("should display link for home page", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
  const homeAnchorNode = screen.getByText("The CockTails");
  expect(homeAnchorNode).toBeInTheDocument();
});
