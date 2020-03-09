import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSong } from '../services/getSong';

const useSong = () => {
  const [song, setSong] = useState([]);
  const { name, title } = useParams();

  useEffect(() => {  
    getSong(name, title)
      .then(res => setSong(res.lyrics));
  }, []);

  return { song };
}; 

export default useSong;
