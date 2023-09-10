import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies =  () => {

    const dispatch = useDispatch();

    const popularMovies = useSelector(store => store.movies.popularMovies);

    const getMovies = async () => {
        const data = await fetch(POPULAR_MOVIES,API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json?.results));
    }

    useEffect(()=>{
        !popularMovies && getMovies();
    },[])
}

export default usePopularMovies;