

import React, { useState, useEffect, useContext } from 'react';
import MovieContext from '../context/movies/movieContext';
import '../styles/Admin.css';

const Admin = (props) => {
    const movieContext = useContext(MovieContext);
    const { movies, getMovies, addMovie, updateMovie, deleteMovie } = movieContext;



    const [movieData, setMovieData] = useState({
        _id: null,
        title: '',
        description: '',
        genre: '',
        director: '',
        releaseYear: '',
        image: '',
        clickToWatch: ''
    });

    useEffect(() => {
        getMovies();
        // eslint-disable-next-line
    }, []);

    const handleChange = (e) => {
        setMovieData({ ...movieData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (movieData._id) {
            updateMovie(
                movieData._id,
                movieData.title,
                movieData.director,
                movieData.releaseYear,
                movieData.genre,
                movieData.image,
                movieData.description,
                movieData.clickToWatch
            );
        } else {
            addMovie(
                movieData.title,
                movieData.director,
                movieData.releaseYear,
                movieData.genre,
                movieData.image,
                movieData.description,
                movieData.clickToWatch
            );
        }
        setMovieData({
            _id: null,
            title: '',
            description: '',
            genre: '',
            director: '',
            releaseYear: '',
            image: '',
            clickToWatch: ''
        });

    };

    const handleEdit = (movie) => {
        setMovieData(movie);
    };

    const handleDelete = (id) => {
        deleteMovie(id);
    };


    return (
        <div className="container admin-container">
            <h2 className='text-center'>Admin Panel</h2>

            <form className='form-container' onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={movieData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={movieData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="genre">Genre</label>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        value={movieData.genre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="director">Director</label>
                    <input
                        type="text"
                        id="director"
                        name="director"
                        value={movieData.director}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="releaseYear">Release Year</label>
                    <input
                        type="number"
                        id="releaseYear"
                        name="releaseYear"
                        value={movieData.releaseYear}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="image">Image URL</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={movieData.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="clickToWatch">Watch URL</label>
                    <input
                        type="text"
                        id="clickToWatch"
                        name="clickToWatch"
                        value={movieData.clickToWatch}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    {movieData._id ? 'Update Movie' : 'Add Movie'}
                </button>
            </form>

            <h3 className='text-center'>Movies List</h3>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <div className="admin-movie-card" key={movie._id} style={{ position: "relative" }}>
                        <img src={movie.image} alt={movie.title} className="card-img-top" />
                        <div className="icon-container">
                            <i className="fa-sharp fa-solid fa-pen btn btn-warning" onClick={() => handleEdit(movie)}></i>
                            <i className="fa-sharp fa-solid fa-trash btn btn-danger" onClick={() => handleDelete(movie._id)}></i>
                        </div>
                        <div className="title-container">
                            <h6 className="card-title">{movie.title}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin;
