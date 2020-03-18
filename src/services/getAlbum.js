export const getAlbum = (releaseId) => {
  return fetch(`https://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
    .then(res => res.json());
};

