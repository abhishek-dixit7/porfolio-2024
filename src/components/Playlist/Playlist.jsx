import React from 'react';
import useSpotifyPlaylist from '../../hooks/useSpotifyPlaylist';
import { Link } from 'react-router-dom';

function Playlist() {
  const [playlists, loader] = useSpotifyPlaylist();

  //   console.log(playlists);
  return loader ? (
    <div className="text-center">Loading...</div>
  ) : (
    <section className="my-12">
      <h2 className="text-4xl mb-8 text-center hover:text-red-600">
        My Playlists
      </h2>
      {playlists &&
        playlists.map(playlist => (
          <div key={playlist.id}>
            <div className="flex justify-between items-center ">
              <Link
                to={playlist.external_urls.spotify}
                className="text-3xl hover:text-blue-500"
              >
                {playlist.name}
              </Link>
              <Link
                to={playlist.external_urls.spotify}
                className="underline hover:text-blue-500"
              >
                Link to Playlist
              </Link>
            </div>
            {playlist.description && (
              <p className="flex items-center mx-2 my-4 min-h-20 px-4 text-lg border-l-[5px] border-solid border-black dark:border-white hover:border-red-600">
                {playlist.description}
              </p>
            )}
          </div>
        ))}
    </section>
  );
}

export default Playlist;
