import { useState, useEffect } from 'react';
import spotifyAxios from '../api/SpotifyAxiosConfig';
import { env } from '../constants/constants';

const useSpotifyPlaylist = () => {
  const [playlist, setPlaylist] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const sessionPlaylist = sessionStorage.getItem('playlist');

    if (!sessionPlaylist) {
      spotifyAxios
        .get(`/users/${env.spotifyUserId}/playlists`)
        .then(response => {
          // console.log(config);
          sessionStorage.setItem(
            'playlist',
            JSON.stringify(response.data.items),
          );
          setPlaylist(response.data.items);
          setLoader(false);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      setPlaylist(JSON.parse(sessionPlaylist));
      setLoader(false);
    }
  }, []);

  return [playlist, loader];
};
export default useSpotifyPlaylist;
