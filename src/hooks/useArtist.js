import { useState, useEffect } from 'react';
import  { useParams } from 'react-router-dom';
import { getArtist } from '../services/getArtist';

const useArtist = () => {
  const { id } = useParams();
  const [releases, setReleases] = useState([]);
  const [offset, setOffset] = useState(0);

  
  const fetchArtist = () => {
    getArtist(id, offset)
      .then(res => setReleases(res.releases));
  };
  
  const pageChange = (choice) => {
    if(choice === 'prev' && offset > 25) {
      setOffset(offset - 25);
      fetchArtist();
    }
    if(choice === 'next') {
      setOffset(offset + 25);
      fetchArtist();
    }
  };

  useEffect(() => {
    fetchArtist();
  }, [offset]);

  return { releases, pageChange };
}; 

export default useArtist;
