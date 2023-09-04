import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { BG_IMG } from '../utils/Constants'


const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img src={BG_IMG} alt="background image" />
        </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch