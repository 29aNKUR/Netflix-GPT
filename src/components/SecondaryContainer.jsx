import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  // console.log(movies, "secondary container");
  return (
    <div className='bg-black text-white'>
      <div className='m-0 lg:-mt-52 pl-4 md:pl-12 relative'>
      <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies = {movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies = {movies.topRatedMovies} />
      <MovieList title={"Upcoming"} movies = {movies.upcomingMovies} />
      </div>
  
    </div>
  )
}

export default SecondaryContainer