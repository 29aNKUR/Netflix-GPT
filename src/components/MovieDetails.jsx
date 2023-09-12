import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/Constants";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [video, setVideo] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json?.results);
    setVideo(json?.results[0]);
  };

  
  const fetchMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    setMovieDetails(json);
  };

  useEffect(() => {
    fetchMovies(), fetchMovieDetails();
  }, []);


  return (
    <div>
      <div className="absolute z-20 text-white bg-gradient-to-r from-black  w-screen aspect-video">
        <Link to="/">
          <button className="text-3xl bg-red-700 text-white py-2 px-3 m-3 rounded-l-full">
            Back
          </button>
        </Link>

        <div className="ml-11">
          <h1 className="font-bold text-2xl md:text-4xl mt-52">
            {movieDetails?.title}
          </h1>
          <p className="hidden md:hidden lg:inline-block py-6 text-lg w-2/4">
            {movieDetails?.overview}
          </p>
        </div>

        {movieDetails?.genres.map((genre) => (
          <h2 className="flex justify-between hidden md:hidden lg:inline-block text-lg  ml-11 px-3 py-1 bg-slate-700 rounded-3xl">
            {genre.name}
          </h2>
        ))}
      </div>
      <div className="w-screen absolute">
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            video?.key +
            "?&autoplay=1&mute=1"
          }
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetails;
