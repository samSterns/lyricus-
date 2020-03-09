import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import ArtistView from './ArtistView';

describe('ArtistView component', () => {
  it('renders an Artist View', () => {
    const wrapper = shallow(<MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}><ArtistView /></MemoryRouter>);
    expect(wrapper).toMatchSnapshot();
  });
});
