import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants'

const MovieCard = ({moviesList}) => {
  // console.log(moviesList,"moviesList")
  return (
    <div className='w-48 pr-4'>
      <img src={IMG_CDN_URL+moviesList} alt="movie card" />
    </div>
  )
}

export default MovieCard