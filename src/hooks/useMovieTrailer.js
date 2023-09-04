import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const movieTrailer = useSelector(store => store.movies.trailerVideo);
 
    // fetch trailer video and updating the store with trailer video data 
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json);
  
      //one movie has many clips
      const filterData = json.results.filter((video) => video.type == "Trailer");
      //picking one trailer from many(if any) && If no trailer present then, show first video
      const trailer = filterData.length ? filterData[0] : json.results[0];
      // console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getMovieVideos();
      }, []);

}

export default useMovieTrailer;