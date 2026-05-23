import React from "react";
import renderer from "react-test-renderer";
import { render, screen, cleanup } from "@testing-library/react";
import Navbar from "../../layouts/Navbar";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);

it("renders Navbar component correctly", () => {
  const nav = renderer
    .create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )
    .toJSON();
  expect(nav).toMatchSnapshot();
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
