import React, { useContext, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import MovieContext from '../context/movies/movieContext';

const MoviePage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const movieContext = useContext(MovieContext);
  const { getMovie, currentMovie } = movieContext;

  useEffect(() => {
    getMovie(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);


  if (!currentMovie) {
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      window.location.href = currentMovie.clickToWatch; // Navigate to the download URL
    } else {
      navigate('/login'); // Redirect to login page
    }
  };


  const iMeStyle = {
    padding: '.5rem 1rem',
    background: '#000000',
    fontWeight: 600,
    display: 'inline-block',
    borderRadius: '.2rem',
    color: '#fff'
  };

  const iSpanStyle = {
    background: 'rgb(255 102 7)',
    borderRadius: '3px',
    color: '#222',
    fontSize: '11px',
    height: 'auto',
    lineHeight: 'normal',
    padding: '4px 6px',
    right: '8px',
    top: '8px',
    width: 'auto',
    zindex: '4',
    position: 'absolute'
  };


  const iTitleStyle = {
    position: 'absolute',
    background: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, .65) 28%, rgba(0, 0, 0, .65))',
    bottom: '0',
    left: '0',
    padding: '5px',
    textAlign: 'center',
    width: '100%',
    zIndex: '1'
  };


  return (
    <div className="container my-3">
      <div className="card border-0 mb-3 shadow">
        <div className='card-header p-0'>
          <img src={currentMovie.image} alt={currentMovie.title} className='d-block cover' style={{ width: "100%", maxHeight: "470px", position: "relative" }} />
        </div>
        <div className="card-body">
          <div className="row">
            <div className='col-12 col-lg-2 d-none d-lg-block'>
              <img src={currentMovie.image} alt={currentMovie.title} className="img-fluid" />
              <h4 className='text-center'>{currentMovie.title}</h4>
            </div>
            <div className='col-12 col-lg-7 border-sm-end'>
              <h1 className='card-title fs-4'>{currentMovie.title}</h1>
              <div className='fst-italic lh-sm mb-2' style={{ color: "darkgray" }}>{currentMovie.description}</div>
              <div className='row'>
                <div className='col-12 col-md-8'>
                  <p className='mb-1'><strong>Genre:</strong> {currentMovie.genre}</p>
                  <p className='mb-1'><strong>Director:</strong> {currentMovie.director}</p>
                </div>
                <div className='col-12 col-md-4'>
                  <p className='mb-1'><strong>Release Year:</strong> {currentMovie.releaseYear}</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-3'>
              <div className='d-grid gap-2'>
                <button className='btn btn-danger' type='button' onClick={handleClick}>Stream in HD</button>
                <button className='btn btn-success' type='button' onClick={handleClick}>Download in HD</button>
              </div>
            </div>
          </div>
        </div>
        <div className='card-footer border-0 tags'>
          <strong className='me-1'>Keywords:</strong>
          {currentMovie.title} - {currentMovie.director} - {currentMovie.genre} - {currentMovie.releaseYear} - Green Movies
        </div>
      </div>



      <div className='card border-0 mb-3'>
        <div className='card-header bg-transparent border-0 p-0 mb-3'>
          <div style={iMeStyle}>You May Also Like</div>
        </div>


        <div className='row row-cols-2 row-cols-sm-4 row-cols-lg-6 list-rel g-3'>
          <div className="col">
            <div className='card h-100 border-0 shadow'>
              <Link to="/" className='rounded poster'>
                <picture>
                  <source />
                  <img src={currentMovie.image} alt="" width={200} height={300} className='lazy card-img-top entered loaded' />
                </picture>
                <div className='card-body' style={iTitleStyle}>
                  <h2 className='card-title text-light fs-6 m-0'>{currentMovie.title}</h2>
                </div>
                <span style={iSpanStyle}>HD</span>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className='card h-100 border-0 shadow'>
              <Link to="/" className='rounded poster'>
                <picture>
                  <source />
                  <img src={currentMovie.image} alt="" width={200} height={300} className='lazy card-img-top entered loaded' />
                </picture>
                <div className='card-body' style={iTitleStyle}>
                  <h2 className='card-title text-light fs-6 m-0'>{currentMovie.title}</h2>
                </div>
                <span style={iSpanStyle}>HD</span>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className='card h-100 border-0 shadow'>
              <Link to="/" className='rounded poster'>
                <picture>
                  <source />
                  <img src={currentMovie.image} alt="" width={200} height={300} className='lazy card-img-top entered loaded' />
                </picture>
                <div className='card-body' style={iTitleStyle}>
                  <h2 className='card-title text-light fs-6 m-0'>{currentMovie.title}</h2>
                </div>
                <span style={iSpanStyle}>HD</span>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className='card h-100 border-0 shadow'>
              <Link to="/" className='rounded poster'>
                <picture>
                  <source />
                  <img src={currentMovie.image} alt="" width={200} height={300} className='lazy card-img-top entered loaded' />
                </picture>
                <div className='card-body' style={iTitleStyle}>
                  <h2 className='card-title text-light fs-6 m-0'>{currentMovie.title}</h2>
                </div>
                <span style={iSpanStyle}>HD</span>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className='card h-100 border-0 shadow'>
              <Link to="/" className='rounded poster'>
                <picture>
                  <source />
                  <img src={currentMovie.image} alt="" width={200} height={300} className='lazy card-img-top entered loaded' />
                </picture>
                <div className='card-body' style={iTitleStyle}>
                  <h2 className='card-title text-light fs-6 m-0'>{currentMovie.title}</h2>
                </div>
                <span style={iSpanStyle}>HD</span>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className='card h-100 border-0 shadow'>
              <Link to="/" className='rounded poster'>
                <picture>
                  <source />
                  <img src={currentMovie.image} alt="" width={200} height={300} className='lazy card-img-top entered loaded' />
                </picture>
                <div className='card-body' style={iTitleStyle}>
                  <h2 className='card-title text-light fs-6 m-0'>{currentMovie.title}</h2>
                </div>
                <span style={iSpanStyle}>HD</span>
              </Link>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default MoviePage






