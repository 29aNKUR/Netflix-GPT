import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const gpt = useSelector(store => store.gpt);

  const {movieResults, movieNames} = gpt;

  if(!movieNames) return 'Loading...';
   
  return (
    <div className='p-4 m-4 text-white bg-black bg-opacity-90'>
      <div>
        {
          movieNames.map((movieName,index) => <MovieList key={movieName} title = {movieName} movies = {movieResults[index]}/>)
        }

      </div>
    </div>
  )
}

export default GptMovieSuggestion