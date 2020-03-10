import React from 'react';
import PropTypes from 'prop-types';
import useSearch from '../hooks/useSearch';
import { Link } from 'react-router-dom';
import styles from '../components/SearchViewStyle.css';

const SearchView = ({ value }) => {
  
  const { search, setSearch, searchTerm, searchResults, pageChange } = useSearch();
  
  const artists = searchResults.map(({ id, name }) => {
    return (
      <>
        <li key={id}>
          <Link to={`/artist/${name}/${id}`} >
            <h3>{name}</h3>
          </Link>
        </li>
      </>
    );
  });

  return (
    <>
      <form className={styles.Form} onSubmit={() => search(searchTerm)} >
        <input type='text' value={value} onChange={(event) => setSearch(event.target.value)} placeholder='Artist Name'></input>
        <button>Search</button>
      </form>  

      <button className={styles.pageButton} value="prev" onClick={({ target }) => pageChange(target.value)}>Previous</button>
      <button className={styles.pageButton} value="next" onClick={({ target }) => pageChange(target.value)}>Next</button>
    
      <ul>
        {artists}
      </ul>
    </>
  );
    
};

SearchView.propTypes = {
  value: PropTypes.string
};

export default SearchView;
