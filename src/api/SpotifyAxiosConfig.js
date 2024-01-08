import axios from 'axios';
import { env } from '../constants/constants';

const spotifyAxios = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

spotifyAxios.interceptors.request.use(
  async config => {
    if (config.headers.Authorization === undefined) {
      const token =
        sessionStorage.getItem('spotifyToken') === null
          ? await getSpotifyAccessToken()
          : sessionStorage.getItem('spotifyToken');
      sessionStorage.setItem('spotifyToken', token);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

const getSpotifyAccessToken = async () => {
  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    {
      grant_type: 'client_credentials',
      client_id: env.spotifyClientId,
      client_secret: env.spotifyClientSecret,
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
  return response.data.access_token;
};

export default spotifyAxios;
