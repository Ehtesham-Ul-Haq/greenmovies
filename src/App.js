// src/App.js

import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import MovieState from './context/movies/MovieState';
import './App.css'; // Import CSS file for global styles
import Footer from './components/Footer';
import About from './components/About';
import MoviePage from './components/MoviePage';
import Alert from "./components/Alert";
import AdminPanel from './components/AdminPanel';

const App = () => {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type :type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  return (
    <>
    <MovieState>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home  showAlert={showAlert}/>} />
            <Route exact path="/login" element={<Login  showAlert={showAlert}/>} />
            <Route exact path="/register" element={<Register  showAlert={showAlert}/>} />
            <Route exact path="/notfound" element={<NotFound  showAlert={showAlert}/>} />
            <Route exact path="/about" element={<About  showAlert={showAlert}/>} />
            <Route exact path="/moviepage/:id" element={<MoviePage  showAlert={showAlert}/>} />
            <Route exact path="/admin" element={<AdminPanel  showAlert={showAlert}/>} />
            
            
            
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    </MovieState>
    </>
  );
};

export default App;
