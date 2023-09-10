import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_MOVIES } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies =  () => {

    const dispatch = useDispatch();

    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);
    const getMovies = async () => {
        const data = await fetch(UPCOMING_MOVIES,API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json?.results));
    }

    useEffect(()=>{
        !upcomingMovies && getMovies();
    },[])
}

export default useUpcomingMovies;