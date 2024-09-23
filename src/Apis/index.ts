import axios from 'axios';
import { useToken } from '../Components/TokenCheck/index'; // Adjust the path to where useToken is located
import {
  AccessTokenResponse,
  CategoryResponse,
  TrackResponse,
  AlbumResponse,
  ArtistResponse,
  RecommendationResponse,
} from '../Interfaces/index'; // Adjust based on your project structure

const axiosInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

// Request interceptor to include the access token
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await useToken(); // Fetch the tokens
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh on 401 errors
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Token refresh logic can be added here if using refresh tokens
      console.log('Token expired. Please handle refreshing the token here.');
      // Retry the request after refreshing the token if needed
    }
    return Promise.reject(error);
  }
);

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const client_id = 'aeba5d8ad05349f6906897cb3409db36'; // Replace with your Client ID
const client_secret = '9ccc8e4690404353bf5423a62e9ef897'; // Replace with your Client Secret

export async function fetchToken(): Promise<string> {
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
      }
    );
    return response.data.access_token; // Return the access token
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw new Error('Unable to fetch access token');
  }
}

// Function to fetch categories
export const fetchCategories = async (): Promise<CategoryResponse> => {
  try {
    const response = await axiosInstance.get('browse/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Unable to fetch categories');
  }
};

// Function to fetch available genre seeds
export const fetchAvailableGenres = async (): Promise<string[]> => {
  try {
    const response = await axiosInstance.get('recommendations/available-genre-seeds');
    return response.data.genres; // Adjust based on the actual response structure
  } catch (error) {
    console.error('Error fetching available genres:', error);
    throw new Error('Unable to fetch available genres');
  }
};

// Function to fetch artist details by ID
export const fetchArtist = async (id: string): Promise<ArtistResponse> => {
  try {
    const response = await axiosInstance.get(`artists/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching artist:', error);
    throw new Error('Unable to fetch artist');
  }
};

// Function to fetch new releases
export const fetchNewReleases = async (): Promise<AlbumResponse> => {
  try {
    const response = await axiosInstance.get('browse/new-releases');
    return response.data;
  } catch (error) {
    console.error('Error fetching new releases:', error);
    throw new Error('Unable to fetch new releases');
  }
};

// Function to fetch tracks by IDs
export const fetchTracks = async (ids: string): Promise<TrackResponse> => {
  try {
    const response = await axiosInstance.get(`tracks?ids=${ids}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching multiple tracks:', error);
    throw new Error('Unable to fetch multiple tracks');
  }
};

// Function to fetch recommendations based on seeds
export const fetchRecommendations = async (): Promise<RecommendationResponse> => {
  try {
    const response = await axiosInstance.get(`recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw new Error('Unable to fetch recommendations');
  }
};

// Function to fetch album tracks by album ID
export const fetchAlbumTracks = async (): Promise<TrackResponse> => {
  try {
    const response = await axiosInstance.get(`browse/new-releases`);
    return response.data;
  } catch (error) {
    console.error('Error fetching album tracks:', error);
    throw new Error('Unable to fetch album tracks');
  }
};

export const fetchAlbum = async (id: string): Promise<TrackResponse> => {
  try {
    const response = await axiosInstance.get(`albums/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching single album:', error);
    throw new Error('Unable to fetch single album');
  }
};

// Function to fetch a specific track by ID
export const fetchTrack = async (id: string): Promise<TrackResponse> => {
  try {
    const response = await axiosInstance.get(`tracks/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching single track:', error);
    throw new Error('Unable to fetch single track');
  }
};

// Add more API functions as needed...

// export default axiosInstance; // Export the configured Axios instance if needed
