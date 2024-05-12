import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    // console.log(movies[0]?.poster_path);
  return ( 
    <div className='px-6  text-white'>
        <h1 className='text-2xl py-4'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
            <div className='flex'>
                {movies?.map(movie => (<MovieCard key={movie?.id} posterPath = {movie?.poster_path}/>))} 
                
            </div>
        </div>

    </div>
  ) 
}

export default MovieList