import React from 'react'
import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./GptMovieSuggestion"
import { Logo } from '../utils/constant'

const GPTSearh = () => {
  return (
    <div>
      <img alt='Img' src={Logo} className='absolute -z-10'></img>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GPTSearh