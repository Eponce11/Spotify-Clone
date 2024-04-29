export const getArtistNames = (artists: any[]): string => {
  let artistNames = "";
  artists.forEach((artist: any, idx: number) => {
    if (idx !== artists.length - 1) {
      artistNames += `${artist.name}, `;
    } else {
      artistNames += `${artist.name}`;
    }
  });
  return artistNames;
};
