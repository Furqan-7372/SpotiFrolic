// Api.tsx
import axios from 'axios';
import {
  AccessTokenResponse,
  CategoryResponse,
  ArtistResponse,
  AlbumResponse,
  TrackResponse,
  RecommendationResponse,
} from '../Interfaces/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_CATEGORIES_URL = 'https://api.spotify.com/v1/browse/categories';
const SPOTIFY_ARTIST_URL = 'https://api.spotify.com/v1/artists';
const SPOTIFY_ALBUM_URL = 'https://api.spotify.com/v1/browse/new-releases';
const SPOTIFY_TRACKS_URL =
  'https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B';
const SPOTIFY_RECOMMENDATION_URL =
  'https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA';
const SPOTIFY_ALBUM_TRACKS_URL = 'https://api.spotify.com/v1/albums';
const SPOTIFY_TRACK_URL = 'https://api.spotify.com/v1/tracks';
let token: string | undefined = '';

// API Client configuration
const client_id = 'aeba5d8ad05349f6906897cb3409db36'; // Replace with your Client ID
const client_secret = '9ccc8e4690404353bf5423a62e9ef897'; // Replace with your Client Secret

// Function to get access token
export async function fetchAccessToken(): Promise<string> {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', client_id);
  params.append('client_secret', client_secret);

  try {
    const response = await axios.post<AccessTokenResponse>(
      SPOTIFY_TOKEN_URL,
      params.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    // console.log(response, 'First Step')
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw new Error('Unable to fetch access token');
  }
}

// Function to get categories data
export async function fetchCategories(
  accessToken: string,
  retries: number = 3,
  delay: number = 1000,
): Promise<CategoryResponse> {
  try {
    const response = await axios.get<CategoryResponse>(SPOTIFY_CATEGORIES_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 429 && retries > 0) {
      // Rate limit error, retry with exponential backoff
      console.warn(`Rate limit exceeded. Retrying in ${delay} ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return fetchCategories(accessToken, retries - 1, delay * 2);
    } else {
      console.error('Error fetching categories:', error);
      throw new Error('Unable to fetch categories');
    }
  }
}

// Function to get artist data
export async function fetchArtistData(
  artistId: string,
  accessToken: string,
): Promise<ArtistResponse> {
  try {
    const response = await axios.get<ArtistResponse>(
      `${SPOTIFY_ARTIST_URL}/${artistId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching artist data:', error);
    throw new Error('Unable to fetch artist data');
  }
}

export async function fetchAlbumsData(
  accessToken: string,
): Promise<AlbumResponse> {
  try {
    const response = await axios.get<AlbumResponse>(`${SPOTIFY_ALBUM_URL}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // console.log(JSON.stringify(response.data.albums.items[0].name, null, 2), 'response')

    return response;
  } catch (error) {
    console.error('Error fetching album data:', error);
    throw new Error('Unable to fetch album data');
  }
}

export async function fetchTracksData(
  accessToken: string,
): Promise<TrackResponse> {
  try {
    const response = await axios.get<TrackResponse>(`${SPOTIFY_TRACKS_URL}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // console.log(JSON.stringify(response.data?.tracks[0], null, 2), 'response')
    return response;
  } catch (error) {
    console.error('Error fetching TRACK data:', error);
    throw new Error('Unable to fetch TRACK data');
  }
}
export async function fetchRecommendationData(
  accessToken: string,
): Promise<RecommendationResponse> {
  try {
    const response = await axios.get<RecommendationResponse>(
      `${SPOTIFY_RECOMMENDATION_URL}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    // console.log(JSON.stringify(response.data?.tracks[0], null, 2), 'response')
    return response;
  } catch (error) {
    console.error('Error fetching TRACK data:', error);
    throw new Error('Unable to fetch TRACK data');
  }
}
export async function fetchAlbumTracksData(
  accessToken: string,
  albumId: string,
): Promise<RecommendationResponse> {
  try {
    const response = await axios.get<RecommendationResponse>(
      `${SPOTIFY_ALBUM_TRACKS_URL}/${albumId}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    // console.log(JSON.stringify(response.data?.tracks[0], null, 2), 'response')
    return response;
  } catch (error) {
    console.error('Error fetching TRACK data:', error);
    throw new Error('Unable to fetch TRACK data');
  }
  // --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'
}
export async function fetchTrackData(
  accessToken: string,
  trackId: string,
): Promise<TrackResponse> {
  try {
    const response = await axios.get<TrackResponse>(
      `${SPOTIFY_TRACK_URL}/${trackId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    // console.log(JSON.stringify(response.data?.tracks[0], null, 2), 'response')
    return response;
  } catch (error) {
    console.error('Error fetching TRACK data:', error);
    throw new Error('Unable to fetch TRACK data');
  }
  // --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'
}

// Example usage of the functions

export function useSpotifyApi() {
  const initialize = async () => {
    try {
      token = await fetchAccessToken();
      console.log(token, 'token');
    } catch (error) {
      console.error('Initialization error:', error);
    }
  };

  const getCategories = async () => {
    if (!token) {
      token = await fetchAccessToken();
    }
    return await fetchCategories(token);
  };

  const getArtistData = async (artistId: string) => {
    if (!token) {
      throw new Error('Access token is not set');
    }
    return await fetchArtistData(artistId, token);
  };

  const getAlbumData = async () => {
    if (!token) {
      token = await fetchAccessToken();
    }
    return await fetchAlbumsData(token);
  };

  const getTracksData = async () => {
    if (!token) {
      token = await fetchAccessToken();
    }
    return await fetchTracksData(token);
  };

  const getRecommendationData = async () => {
    if (!token) {
      token = await fetchAccessToken();
    }
    return await fetchRecommendationData(token);
  };

  const getAlbumTracksData = async (albumId: string) => {
    if (!token) {
      token = await fetchAccessToken();
    }
    return await fetchAlbumTracksData(token, albumId);
  };

  const getTrackData = async (trackId: string) => {
    if (!token) {
      token = await fetchAccessToken();
    }
    return await fetchTrackData(token, trackId);
  };

  return {
    initialize,
    getCategories,
    getArtistData,
    getAlbumData,
    getTracksData,
    getRecommendationData,
    getAlbumTracksData,
    getTrackData,
  };
}

// albums
// several tracks
// recommendations
