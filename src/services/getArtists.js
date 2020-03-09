const getArtists = (searchTerm, offset) => {

  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchTerm}&fmt=json&limit=25&offset=${offset}`)
    .then(res => res.json());
};

export default getArtists;
