import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    //Early Return 
    if(!movies) return ;
    const mainMovie = movies[1];
    // console.log(mainMovie);
    
    const {title, overview, id} = mainMovie

  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer