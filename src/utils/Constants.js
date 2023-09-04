export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =  "https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZBe7K0DPia9LvzIkQ4yzqX9NocZlAjS1MOyEuBQD1WmFuLKZwvq0bxc4n4_EV73khqgwed0PYLNml0V8LCymt31e7x-8jQ.png?r=229";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
    }
  };
  

  export const TOP_RATED_MOVIES = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  export const UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  export const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  export const NOW_PLAYING_MOVIES = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";


  export const SUPPORTED_LANGUAGES = [{identifier:"english",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}]


  export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_KEY;