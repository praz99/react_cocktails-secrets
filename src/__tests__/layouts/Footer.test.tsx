import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../layouts/Footer';

it('renders Footer component correctly', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});

it('should display developer name', () => {
  render(<Footer />);
  const devName = screen.getByText(/Developed by/);
  expect(devName).toBeInTheDocument();
});

it('should display link to linked-in page', () => {
  render(<Footer />);
  const linkInLink = screen.getByLabelText('linked-in link');
  expect(linkInLink).toBeInTheDocument();
});

it('should display link to github page', () => {
  render(<Footer />);
  const githubLink = screen.getByLabelText('github link');
  expect(githubLink).toBeInTheDocument();
});

it('should display link to twitter page', () => {
  render(<Footer />);
  const twitterLink = screen.getByLabelText('twitter link');
  expect(twitterLink).toBeInTheDocument();
});
