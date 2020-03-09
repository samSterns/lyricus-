import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAlbum from '../hooks/useAlbum';

const AlbumView = () => {
  const { name } = useParams();
  const { album } = useAlbum();

  const mappedAlbum = album.map(({ id, title }) => {
    return (
      <li key={id}>
        <Link to={`/song/${name}/${title}`}>
          <h3>{title}</h3>
        </Link>
      </li>
    );
  });
  return (
    <ul>
      {mappedAlbum}
    </ul>
  );
};

export default AlbumView;
