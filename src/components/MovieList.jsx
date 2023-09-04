import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //  console.log(movies,"movies");

  return (
    movies && (
      <div className="px-6">
        <h1 className="text-3xl py-4">{title}</h1>
          <div className="w-full flex overflow-x-scroll ">
            <div className="flex">
            {movies.map((movie) => (
              <MovieCard moviesList={movie.poster_path} />
            ))}
            </div>
          </div>
      </div>
    )
  );
};

export default MovieList;
