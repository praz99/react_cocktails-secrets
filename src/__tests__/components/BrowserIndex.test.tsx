import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { vi } from 'vitest';
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
    const renderer = createRenderer();
    const wrapper = renderer.render(<BrowseIndex />);
    expect(wrapper).toMatchSnapshot();
  });
});
