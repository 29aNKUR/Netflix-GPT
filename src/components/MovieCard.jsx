import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, id }) => {
  // console.log(moviesList,"moviesList")
  if (!posterPath) return null;
  if (!id) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <Link to={"/browse/" + id}>
        <img src={IMG_CDN_URL + posterPath} alt="movie card" />
      </Link>
    </div>
  );
};

export default MovieCard;
