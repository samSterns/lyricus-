  
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbum } from '../services/getAlbum';

const useAlbum = () => {

  const [album, setAlbum] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getAlbum(id)
      .then(res => setAlbum(res.recordings));
  }, []);

  return { album };
};

export default useAlbum;
