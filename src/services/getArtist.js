export const getArtist = (id, offset) => {
  
  return fetch(`https://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&limit=25&offset=${offset}`)
    .then(res => res.json());
};
