import React, { useContext, useEffect } from 'react';
import MovieContext from '../context/movies/movieContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const movieContext = useContext(MovieContext);
  const { movies, getMovies } = movieContext;
  const navigate = useNavigate();

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleClick = (id) => {
    navigate(`/moviepage/${id}`);
  };


  return (
    <div className='container my-1'>
      <h2 className='text-center my-3'>Welcome to Green Movies!</h2>
      {/* Display all movies */}
      <div className="featured-movies row row-cols-1 row-cols-sm-2 row-cols-md-4">
        {movies.map((movie) => (
          <div key={movie._id} className="movie col" style={{ height: "400px"}}>
            <img src={movie.image} alt={movie.title} onClick={() => handleClick(movie._id)} style={{ width: "100%", height: "330px", cursor: 'pointer'}} />
            <h4 className='text-center'  onClick={() => handleClick(movie._id)} style={{cursor: 'pointer'}}>{movie.title}</h4>
            <p className='text-center'>Release Year: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
