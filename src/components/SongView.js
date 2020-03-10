import React from 'react';
import useSong from '../hooks/useSong.js';


const SongView = () => {
  const { song } = useSong();

  // const cloud = WordCloud(document.getElementById({ song }), { ['song', 6, {song} ]});


  return (
    <>
      <p>{song}</p>

    </>
  );
};

export default SongView;
