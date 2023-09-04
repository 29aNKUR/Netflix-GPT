import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";

//Generic hook to fetch movies of different categories
const useMovies =  (reducerName,MOVIES_URL) => {

    const dispatch = useDispatch();

    const getMovies = async () => {
        const data = await fetch(MOVIES_URL,API_OPTIONS);
        const json = await data.json();
        dispatch(reducerName(json?.results));
    }

    useEffect(()=>{
        getMovies();
    },[])
}

export default useMovies;