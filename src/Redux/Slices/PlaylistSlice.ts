import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {PlaylistState} from '../../Interfaces/index'

// Define the initial state using the PlaylistState type
const initialState: PlaylistState = {
  songs: [],
};

// Create the slice
const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    addSong: (state, action: PayloadAction<string>) => {
      state.songs.push(action.payload);
    },
    removeSong: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter(song => song !== action.payload);
    },
  },
});

// Export the actions and the reducer
export const { addSong, removeSong } = playlistSlice.actions;
export default playlistSlice.reducer;

// To Use as sample
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addSong, removeSong, selectPlaylist } from '../features/playlist/playlistSlice';

// const Playlist = () => {
//   const dispatch = useDispatch();
//   const playlist = useSelector(selectPlaylist);

//   const handleAddSong = (song) => {
//     dispatch(addSong({ song }));
//   };

//   const handleRemoveSong = (song) => {
//     dispatch(removeSong({ song }));
//   };

//   return (
//     <div>
//       <h1>My Playlist</h1>
//       <ul>
//         {playlist.map((song, index) => (
//           <li key={index}>
//             {song}
//             <button onClick={() => handleRemoveSong(song)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => handleAddSong('New Song')}>Add Song</button>
//     </div>
//   );
// };

// export default Playlist;
