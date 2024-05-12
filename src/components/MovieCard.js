import React from 'react'
import { Img_Sec_url } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-32 pr-4 '>
       <img alt='Movie Card' src= {Img_Sec_url + posterPath }/>
    </div>
  )
}

export default MovieCard