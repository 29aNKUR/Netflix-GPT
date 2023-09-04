import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants'

const MovieCard = ({posterPath}) => {
  // console.log(moviesList,"moviesList")
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>
      <img src={IMG_CDN_URL+posterPath} alt="movie card" />
    </div>
  )
}

export default MovieCard