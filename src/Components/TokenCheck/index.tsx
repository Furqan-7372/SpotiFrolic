import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSpotifyApi } from '../../Apis/index';

const TOKEN_KEY = 'token';
const TIMESTAMP_KEY = 'tokenTimestamp';

export const useToken = async () => {
  const { initialize } = useSpotifyApi();

  const storedToken = await AsyncStorage.getItem(TOKEN_KEY);
  const timestampString = await AsyncStorage.getItem(TIMESTAMP_KEY);
  const timestamp = timestampString ? parseInt(timestampString, 10) : null;

  if (storedToken && timestamp) {
    const isOlderThan60Min = Date.now() - timestamp > 60 * 60 * 1000;
    if (!isOlderThan60Min) {
      return storedToken;
    }
  }

  // If token is expired or not present, initialize and save the new token
  const newToken = await initialize() as string;
  console.log('new token',newToken)
  await AsyncStorage.setItem(TOKEN_KEY, newToken);
  await AsyncStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
  return newToken;
};
