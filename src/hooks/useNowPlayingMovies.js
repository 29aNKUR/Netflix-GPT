import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies =  () => {

    const dispatch = useDispatch();

    //for memoization
    const nowPlaying = useSelector(store => store.movies.nowPlayingMovies);

    const getMovies = async () => {
        const data = await fetch(NOW_PLAYING_MOVIES,API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json?.results));
    }

    useEffect(()=>{
        !nowPlaying && getMovies();
    },[])
}

export default useNowPlayingMovies;