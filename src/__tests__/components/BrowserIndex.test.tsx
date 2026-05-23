import React from 'react';
import { vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BrowseIndex from '../../components/BrowseIndex';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLocation: () => ({ pathname: 'http://localhost:3000/search?f=d' }),
  };
});

describe('BrowseIndex component', () => {
  it('Renders correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <BrowseIndex />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
