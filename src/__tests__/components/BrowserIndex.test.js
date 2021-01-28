import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import BrowseIndex from '../../components/BrowseIndex';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'http://localhost:3000/search?f=d',
  }),
}));

describe('BrowseIndex component', () => {
  it('Renders correctly', () => {
    const renderer = new ShallowRenderer();
    const wrapper = renderer.render(<BrowseIndex />);
    expect(wrapper).toMatchSnapshot();
  });
});
