import React from 'react';
import useSong from '../hooks/useSong.js';
import styles from '../components/SongView.css';

const SongView = () => {
  const { song } = useSong();

  return (
    <>
      <p className={styles.Lyrics}>{song}</p>
      <div className={styles.Div}></div>
    </>

  );
};

export default SongView;
