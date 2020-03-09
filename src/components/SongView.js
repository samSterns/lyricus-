import React from 'react';
import useSong from '../hooks/useSong.js';


const SongView = () => {
  const { song } = useSong();

  return (
    <p>{song}</p>

  );
};

export default SongView;
