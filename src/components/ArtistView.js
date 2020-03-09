import React from 'react'; 
import useArtist from '../hooks/useArtist';
import { Link, useParams } from 'react-router-dom';
import placeholder from '../assets/placeholder.png';


const ArtistView = () => {
  const { name } = useParams();
  const { releases, pageChange } = useArtist();

  const albumArtStyle = {
    height: '100px'
  };

  const addDefaultSrc = (event) => {
    event.target.src = placeholder;
  };

  const mappedReleases = releases.map(({ id, title }) => {
    return (
      <>
        <li key={id}>
          <Link to={`/album/${name}/${id}`}>
            <img style={albumArtStyle} src={`http://coverartarchive.org/release/${id}/front`} onError={(event) => addDefaultSrc(event)}/>
            <h3>{title}</h3>
          </Link>
        </li>
      </>
    );
  });
  return (
    <>
      <ul>
        {mappedReleases}
      </ul>

      <button value="prev" onClick={({ target }) => pageChange(target.value)}>previous</button>
      <button value="next" onClick={({ target }) => pageChange(target.value)}>next</button>
    </>
  );
};

export default ArtistView;
