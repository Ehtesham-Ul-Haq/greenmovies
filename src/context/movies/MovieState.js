import { useState, useReducer } from "react";
import MovieContext from "./movieContext";
import MovieReducer from './MovieReducer';
import {
  GET_MOVIE,
  GET_DIRECTORS,
  GET_GENRES
} from '../types';

const MovieState = (props) => {

  const host = "http://localhost:5000";
  const moviesInitial = [];

  const initialState = {
    movies: [],
    currentMovie: null,
    directors: [],
    genres: []
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const [movies, setMovies] = useState(moviesInitial);

  // fetch all movies

  const getMovies = async () => {
    try {
      const response = await fetch(`${host}/movies/getallmovies`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //   "auth-token": localStorage.getItem('token')
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const json = await response.json();
      setMovies(json);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  
  // get a single movie

  const getMovie = async (id) => {
    try {
      const response = await fetch(`${host}/movies/getsinglemovie/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //   "auth-token": localStorage.getItem('token')
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch movie');
      }
      const movie = await response.json();
      dispatch({
        type: GET_MOVIE,
        payload: movie,
      });
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
  };


  // add movie
  const addMovie = async ( title, director, releaseYear, genre, image, description, clickToWatch ) => {
    try {
      const response = await fetch(`${host}/movies/addmovie`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //   "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({  title, director, releaseYear, genre, image, description, clickToWatch }),
      });
      if (!response.ok) {
        throw new Error('Failed to add movie');
      }
      const movie = await response.json();
      setMovies(movies.concat(movie));
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };
  
  const deleteMovie = async (id) => {
    try {
      const response = await fetch(`${host}/movies/deleteamovie/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          //   "auth-token": localStorage.getItem('token')
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete movie');
      }
      const newMovie = movies.filter((movie) => movie._id !== id);
      setMovies(newMovie);
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  //  update movie
  
  const updateMovie = async ( id, title, director, releaseYear, genre, image, description, clickToWatch ) => {
    try {
      const response = await fetch(`${host}/movies/updateamovie/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          //   "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({  title, director, releaseYear, genre, image, description, clickToWatch }),
      });
      if (!response.ok) {
        throw new Error('Failed to update movie');
      }
      const json = await response.json();
      console.log(json);
      const newMovies = movies.map((movie) => {
        if (movie._id === id) {
          return { ...movie,  title, director, releaseYear, genre, image, description, clickToWatch };
        }
        return movie;
      });
      setMovies(newMovies);
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };



  // get movies by genre
  const getMoviesByGenre = async (genre) => {
    try {
      const response = await fetch(`${host}/movies/getmoviebygenre/${genre}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch movies by genre');
      }
      const movies = await response.json();
      setMovies(movies);
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
    }
  };

  // get movies by year
  const getMoviesByYear = async (releaseYear) => {
    try {
      const response = await fetch(`${host}/movies/getmoviebyyear/${releaseYear}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch movies by year');
      }
      const movies = await response.json();
      setMovies(movies);
    } catch (error) {
      console.error('Error fetching movies by year:', error);
    }
  };

  // get movies by director
  const getMoviesByDirector = async (director) => {
    try {
      const response = await fetch(`${host}/movies/getmoviebydirector/${director}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch movies by director');
      }
      const movies = await response.json();
      setMovies(movies);
    } catch (error) {
      console.error('Error fetching movies by director:', error);
    }
  };

  // Fetch directors
  const getDirectors = async () => {
    try {
      const response = await fetch(`${host}/movies/directors`);
      if (!response.ok) {
        throw new Error('Failed to fetch directors');
      }
      const directors = await response.json();
      dispatch({
        type: GET_DIRECTORS,
        payload: directors,
      });
    } catch (error) {
      console.error('Error fetching directors:', error);
    }
  };
  
    // Fetch genre
    const getGenres = async () => {
      try {
        const response = await fetch(`${host}/movies/genres`);
        if (!response.ok) {
          throw new Error('Failed to fetch genres');
        }
        const genres = await response.json();
        dispatch({
          type: GET_GENRES,
          payload: genres,
        });
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
  
  
  return (
    <MovieContext.Provider value={{ movies, getMovie, addMovie, deleteMovie, updateMovie, getMovies, getMoviesByGenre, getMoviesByYear, getMoviesByDirector, getDirectors, getGenres, genres: state.genres, directors: state.directors, currentMovie: state.currentMovie }}>
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieState;
