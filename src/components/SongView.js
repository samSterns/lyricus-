import React from 'react';
import useSong from '../hooks/useSong.js';
import TagCloud from 'react-tag-cloud';

const SongView = () => {
  const { song } = useSong();




  return (
    <TagCloud 
      style={{
        fontFamily: 'sans-serif',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        padding: 5,
        width: '100%',
        height: '100%'
      }}> 
      <div style={{ fontSize: 50 }}>react</div>
      <div style={{ color: 'green' }}>tag</div>
      <div rotate={90}>cloud</div>
      <p>{song}</p>
    </TagCloud>
  );
};

export default SongView;
