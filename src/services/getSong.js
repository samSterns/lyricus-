export const getSong = (artist, songTitle) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
    .then(res => res.json());
};
