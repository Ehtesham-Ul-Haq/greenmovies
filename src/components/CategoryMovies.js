// src/components/CategoryMovies.js

import React, { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieContext from '../context/movies/movieContext';

const CategoryMovies = () => {
  const { type, value } = useParams();
  const { getMoviesByGenre, getMoviesByYear, getMoviesByDirector, movies } = useContext(MovieContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (type === 'genre') {
      getMoviesByGenre(value);
    } else if (type === 'releaseYear') {
      getMoviesByYear(value);
    } else if (type === 'director') {
      getMoviesByDirector(value);
    }
  }, [type, value, getMoviesByGenre, getMoviesByYear, getMoviesByDirector]);


  const handleClick = (id) => {
    navigate(`/moviepage/${id}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">{value} | Movies</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie._id} onClick={() => handleClick(movie._id)} style={{ height: "400px"}}>
                <img src={movie.image} className="card-img-top" alt={movie.title} style={{ width: "100%", height: "250px", cursor: 'pointer'}}  />
                  <h4 className="text-center" onClick={() => handleClick(movie._id)} style={{cursor: 'pointer'}}>{movie.title}</h4>
                  <p className="text-center">{movie.releaseYear}</p>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center">No movies found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryMovies;
