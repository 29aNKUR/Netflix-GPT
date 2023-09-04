import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/Constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleGPTSearchClick = async () => {
    // console.log(searchText.current.value);
    //Make an API call to GPT API and get movie results

    //Prompt for getting concise results
    const gptPrompt =
      "Act as a Movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Golmaal, Sholay, Dhamaal, Gadar, Don";

    const gptSearchResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptPrompt }],
      model: "gpt-3.5-turbo",
    });

    if(!gptSearchResult.choices) {alert("Something went wrong with the GPT API")}

    console.log(gptSearchResult.choices[0]?.message?.content);
  
    //GPT movies array
    const gptMovies = gptSearchResult.choices[0]?.message?.content.split(",");

    // [Promise, Promise, Promise, Promise, Promise] - 5 Promises
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    //Adding movie names and movie result in the store
    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    
  
  };

  const languageKey = useSelector((store) => store.config.lang);
  // console.log(language)
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-10"
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-2 m-4"
          onClick={handleGPTSearchClick}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
