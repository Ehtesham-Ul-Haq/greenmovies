// src/context/movies/MovieReducer.js

import { GET_MOVIES, 
  GET_MOVIE,
  GET_MOVIES_BY_GENRE,
  GET_MOVIES_BY_YEAR,
  GET_MOVIES_BY_DIRECTOR,
  GET_DIRECTORS,
  GET_GENRES
} from '../types';

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

    case GET_MOVIES_BY_GENRE:
    case GET_MOVIES_BY_YEAR:
    case GET_MOVIES_BY_DIRECTOR:
      return {
        ...state,
        movies: action.payload,
      };

      case GET_DIRECTORS:
        return {
          ...state,
          directors: action.payload,
        };

        case GET_GENRES:
          return {
            ...state,
            genres: action.payload,
          };
            
    default:
      return state;
  }
};

export default MovieReducer;
