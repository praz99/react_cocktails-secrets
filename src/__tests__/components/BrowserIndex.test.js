import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import BrowseIndex from "../../components/BrowseIndex";
import { vi } from "vitest";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useLocation: () => ({ pathname: "http://localhost:3000/search?f=d" }),
  };
});

describe("BrowseIndex component", () => {
  it("Renders correctly", () => {
    const renderer = new ShallowRenderer();
    const wrapper = renderer.render(<BrowseIndex />);
    expect(wrapper).toMatchSnapshot();
  });
});
