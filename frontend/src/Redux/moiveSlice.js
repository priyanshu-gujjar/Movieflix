import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayMovies: null,
    popularMovie: null,
    topratedMovies: null,
    upcomingMovies: null,
    toggle: false,
    trailerMovie: null,
    open: false,
    id: "",
  },
  reducers: {
    getNowPlayMovies: (state, action) => {
      state.nowPlayMovies = action.payload;
    },
    getPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    getTopRatedMovie: (state, action) => {
      state.topratedMovies = action.payload;
    },
    getUpcomingMovie: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    getTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    getId:(state,action)=> {
      state.id = action.payload

    }
  },
});
export const {
  getNowPlayMovies,
  getPopularMovie,
  getUpcomingMovie,
  getTopRatedMovie,
  setToggle,
  getTrailerMovie,
  setOpen,
  getId
} = movieSlice.actions;
export default movieSlice.reducer;
