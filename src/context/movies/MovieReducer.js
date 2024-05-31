// src/context/movies/MovieReducer.js

import { GET_MOVIES, GET_MOVIE } from '../types';

const MovieReducer = (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_MOVIE:
      return {
        ...state,
        currentMovie: action.payload,
      };
    default:
      return state;
  }
};

export default MovieReducer;
