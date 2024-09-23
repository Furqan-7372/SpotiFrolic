import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {AuthState} from '../../Interfaces/index'
import { PURGE } from 'redux-persist';

// Define the initial state using the PlaylistState type
const initialState: AuthState = {
  isLoggedIn: false,
  accessToken: null,
};

// Create the slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true
      state.accessToken = action.payload
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.accessToken = null
    },
  },
});

// Export the actions and the reducer
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectIsLoggedIn = (state: {auth: AuthState}) => state.auth.isLoggedIn