// src/components/Navbar.js

import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  // Using useLocation hook to access the current location
  const location = useLocation();
  let navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios.get('http://localhost:5000/auth/checkadmin', config);
        setIsAdmin(data.isAdmin);
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };

    checkAdmin();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAdmin(false);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h1 className="logo"><Link to="/">Green Movies</Link></h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav-links">
            <li><Link className={`${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link></li>
            <li><Link className={`${location.pathname === "/Categories" ? "active" : ""}`} to="/Categories">Category</Link></li>
            <li><Link className={`${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link></li>
            <li><Link className={`${location.pathname === "/FAQ" ? "active" : ""}`} to="/FAQ">FAQ</Link></li>
            {isAdmin && <li><Link className={`${location.pathname === "/admin" ? "active" : ""}`} to="/admin">Admin Panel</Link></li>}
          </ul>

          {!localStorage.getItem('token') ? (
            <form className="d-flex mx-3">
              <Link className="button login mx-1" role="button" to="/login">Login</Link>
              <Link className="button register mx-1" role="button" to="/register">Register</Link>
            </form>
          ) : (
            <button onClick={handleLogout} className="button logout mx-1">Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
