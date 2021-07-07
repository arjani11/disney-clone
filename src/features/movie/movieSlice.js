import { createSlice } from "@reduxjs/toolkit";
//initialState==>>Write ose si poshte(me const),ose brenda movieSlice(ez,gg).
//const initialState = {
//movies: [],
//};
const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;
