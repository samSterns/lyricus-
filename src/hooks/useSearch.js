import { useState } from 'react';
import getArtists from '../services/getArtists';

const useSearch = () => {
  const [offset, setOffset] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const setSearch = (value) => {
    setSearchTerm(value);
  };

  const fetchArtists = () => {
    getArtists(searchTerm, offset)
      .then(res => {
        setSearchResults(res.artists);
      }); 
  };

  const pageChange = (choice) => {
    if(choice === 'prev' && offset > 25) {
      setOffset(offset - 25);
      fetchArtists();
    }
    if(choice === 'next') {
      setOffset(offset + 25);
      fetchArtists();
    }
  };


  const search = (searchTerm) => {
    event.preventDefault();
    getArtists(searchTerm, offset)
      .then(res => {
        setSearchResults(res.artists);
      });   
  };

  return { search, setSearch, searchTerm, searchResults, pageChange };
};

export default useSearch;
