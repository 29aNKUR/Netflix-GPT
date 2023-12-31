import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useMovies from '../hooks/useMovies';
import { NOW_PLAYING_MOVIES, POPULAR_MOVIES, TOP_RATED_MOVIES, UPCOMING_MOVIES } from '../utils/Constants';
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from '../utils/moviesSlice';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  // useMovies(addNowPlayingMovies,NOW_PLAYING_MOVIES);
  // useMovies(addPopularMovies,POPULAR_MOVIES);
  // useMovies(addTopRatedMovies,TOP_RATED_MOVIES);
  // useMovies(addUpcomingMovies,UPCOMING_MOVIES);
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      {showGptSearch ? <GptSearch/> : <>   <MainContainer/>
      <SecondaryContainer/></>}
    </div>
  )
}

export default Browse