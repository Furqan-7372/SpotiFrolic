import axios from 'axios';

// Define the types for the API responses
interface AccessTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface ArtistImage {
  height: number;
  url: string;
  width: number;
}

interface ArtistResponse {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: ArtistImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

// Configuration
const CLIENT_ID = 'aeba5d8ad05349f6906897cb3409db36';
const CLIENT_SECRET = '9ccc8e4690404353bf5423a62e9ef897';
const TOKEN_URL = 'https://accounts.spotify.com/api/token';
const ARTIST_URL = 'https://api.spotify.com/v1/artists/';

const getAccessToken = async (): Promise<string> => {
  try {
    const response = await axios.post<AccessTokenResponse>(TOKEN_URL, 
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    throw new Error('Failed to fetch access token');
  }
};

const getArtistData = async (artistId: string): Promise<ArtistResponse> => {
  const accessToken = await getAccessToken();
  try {
    const response = await axios.get<ArtistResponse>(`${ARTIST_URL}${artistId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch artist data');
  }
};

// Example usage
const fetchArtistData = async () => {
  const artistId = '4Z8W4fKeB5YxbusRsdQVPb'; // Example artist ID
  try {
    const artistData = await getArtistData(artistId);
    console.log(artistData);
  } catch (error) {
    console.error(error);
  }
};

// Export functions for use in other components
export { getAccessToken, getArtistData, fetchArtistData };
