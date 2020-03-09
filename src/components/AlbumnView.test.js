import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import AlbumView from './AlbumView';

describe('AlbumView component', () => {
  it('renders an Album View', () => {
    const match = { params: { searchTerm: 'jay' } };
    const wrapper = shallow(<MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}><AlbumView match={match} /></MemoryRouter>);
    expect(wrapper).toMatchSnapshot();
  });
});
