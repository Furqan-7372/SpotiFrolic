import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from '../Slices/PlaylistSlice';

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
  },
});
