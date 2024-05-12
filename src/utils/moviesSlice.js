import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice(
    {
        name: "movies",
        initialState:{
            nowPlayingMovies:null,
            trailerVideo:null
        },
        reducers:{
            addNowPlayingMovies: (state,action) =>{
                state.nowPlayingMovies = action.payload;
            },
            addPopularMovies: (state,action) =>{
                state.popularMovies = action.payload;
            },
            addTopRatedMovies: (state,action) =>{
                state.topRated = action.payload;
            },
            addUpcomingMovies: (state,action) =>{
                state.upcomingMovies = action.payload;
            },
            addTvShows: (state,action) =>{
                state.tvShows = action.payload;
            },
            addTrailerVideo:(state, action) =>{
                state.trailerVideo = action.payload;
            }

        },
    }
);
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addTvShows} = moviesSlice.actions;
export default moviesSlice.reducer;