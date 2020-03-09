import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useAlbum from './useAlbum';
import PropTypes from 'prop-types';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../services/getAlbum.js', () => ({
  getAlbum() {
    return Promise.resolve({ recordings: [{ title: 'Portland', type: 'City', woeid: 3456 }] });
  }
}));

describe('useAlbum hooks', () => {
  it('useAlbum', async() => {
    // eslint-disable-next-line react/prop-types
    const wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;
    const { result, waitForNextUpdate } = renderHook(() => useAlbum(), { wrapper });
    await waitForNextUpdate();
    expect(result.current.album).toEqual([
      { title: 'Portland', type: 'City', woeid: 3456 }
    ]);
  });
});
