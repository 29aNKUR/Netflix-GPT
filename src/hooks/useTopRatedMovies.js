import { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies =  () => {

    const dispatch = useDispatch();

    const topRated = useSelector(store => store.movies.topRatedMovies);

    const getMovies = async () => {
        const data = await fetch(TOP_RATED_MOVIES,API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json?.results));
    }

    useEffect(()=>{
        !topRated && getMovies();
    },[])
}

export default useTopRatedMovies;