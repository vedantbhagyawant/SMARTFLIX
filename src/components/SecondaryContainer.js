// import React from 'react'

import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {



  const movies = useSelector(store => store.movies)
  return (
    
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
      <MovieList  title = {"Now Playing Movies"} movies = {movies.nowPlayingMovies}/>
      <MovieList title = {"Top Rated"} movies = {movies.topRated}/>
      <MovieList title = {"Popular Movies"} movies = {movies.popularMovies}/>
      <MovieList title = {"Upcoming Movies"} movies = {movies.upcomingMovies}/>
      <MovieList title = {"Tv Show"} movies = {movies.tvShows}/>
      </div>
    </div>
    
    
  )
}

export default SecondaryContainer