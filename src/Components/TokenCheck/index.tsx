import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchToken } from '../../Apis/index'; // Adjust the path to where fetchToken is located

const TOKEN_KEY = 'token';
const TIMESTAMP_KEY = 'tokenTimestamp';

export const useToken = async (): Promise<string | null> => {
  try {
    const storedToken = await AsyncStorage.getItem(TOKEN_KEY);
    const timestampString = await AsyncStorage.getItem(TIMESTAMP_KEY);
    const timestamp = timestampString ? parseInt(timestampString, 10) : null;

    // Check if the token exists and is not expired
    if (storedToken && timestamp) {
      const isExpired = Date.now() - timestamp > 60 * 60 * 1000; // 60 minutes
      if (!isExpired) {
        return storedToken; // Return the valid token
      }
    }

    // Fetch a new token if the previous one is expired or does not exist
    const newToken = await fetchToken(); // Fetch the new token
    if (newToken) {
      await AsyncStorage.setItem(TOKEN_KEY, newToken);
      await AsyncStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
      return newToken; // Return the new token
    }
  } catch (error) {
    console.error('Error fetching or saving token:', error);
    return null; // Handle the error gracefully
  }
  
  return null; // Fallback return if something goes wrong
};
