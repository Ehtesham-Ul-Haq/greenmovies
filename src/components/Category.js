// src/components/Category.js

import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MovieContext from '../context/movies/movieContext';

const Category = () => {
    const { directors, getDirectors } = useContext(MovieContext); // Correctly consume context
    const { genres, getGenres } = useContext(MovieContext); // Correctly consume context

  useEffect(() => {
    getDirectors(); // Fetch directors on component mount
    getGenres();
  }, [getDirectors, getGenres]);

  const years = Array.from({ length: 2024 - 1970 + 1 }, (_, i) => 1970 + i);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Movies by Categories</h1>
      <div className="row">
      <div className="col-md-4 mb-4">
          <h2 className="text-center">Genre</h2>
          <div className="card shadow-sm">
            <div className="card-body" >
              {directors ? (
                <ul className="list-group list-group-flush">
                  {genres.map(genre => (
                    <li className="list-group-item" key={genre}>
                      <Link to={`/categorymovies/genre/${genre}`} className="text-decoration-none">{genre}</Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center">Loading genres...</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <h2 className="text-center">Release Years</h2>
          <div className="card shadow-sm">
            <div className="card-body" >
              <ul className="list-group list-group-flush">
                {years.map(year => (
                  <li className="list-group-item" key={year}>
                    <Link to={`/categorymovies/releaseYear/${year}`} className="text-decoration-none">{year}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <h2 className="text-center">Directors</h2>
          <div className="card shadow-sm">
            <div className="card-body" >
              {directors ? (
                <ul className="list-group list-group-flush">
                  {directors.map(director => (
                    <li className="list-group-item" key={director}>
                      <Link to={`/categorymovies/director/${director}`} className="text-decoration-none">{director}</Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center">Loading directors...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
