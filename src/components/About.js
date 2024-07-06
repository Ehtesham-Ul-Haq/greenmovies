// src/components/About.js

import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="card shadow-lg p-4">
        <h1 className="text-center mb-5">About Green Movies</h1>
        <p className="lead">
          Welcome to Green Movies, your ultimate destination for exploring and discovering movies from various renowned movie industries around the world. We aim to provide a comprehensive collection of movies, including those from Bollywood, Hollywood, and more.
        </p>
        <h2 className="mt-4">Industries Featured:</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Bollywood</li>
          <li className="list-group-item">Hollywood</li>
          <li className="list-group-item">Tollywood</li>
          <li className="list-group-item">Kollywood</li>
          <li className="list-group-item">Mollywood</li>
          <li className="list-group-item">Sandalwood</li>
          <li className="list-group-item">Pollywood</li>
          <li className="list-group-item">Chinese Cinema</li>
          <li className="list-group-item">Japanese Cinema</li>
          <li className="list-group-item">Korean Cinema</li>
          {/* Add more industries as needed */}
        </ul>
        <p className="mt-4">
          Our platform strives to offer a user-friendly experience, allowing you to browse movies by genre, release year, director, and more. Whether you're a casual movie enthusiast or a dedicated cinephile, Green Movies caters to all tastes and preferences.
        </p>
        <p>
          Stay tuned for updates and new additions to our extensive movie database. Start exploring today!
        </p>
      </div>
    </div>
  );
};

export default About;
