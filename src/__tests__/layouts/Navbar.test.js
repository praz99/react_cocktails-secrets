import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../../layouts/Navbar';

afterEach(cleanup);

it('renders Navbar component correctly', () => {
  const nav = renderer.create(<Navbar />).toJSON();
  expect(nav).toMatchSnapshot();
});

it('should display the heading', () => {
  const { getByTestId } = render(<Navbar />);
  expect(getByTestId('navbar-heading')).toHaveTextContent('The CockTails');
});

it('should display link for home page', () => {
  render(<Navbar />);
  const homeAnchorNode = screen.getByText('The CockTails');
  expect(homeAnchorNode).toBeInTheDocument();
});
