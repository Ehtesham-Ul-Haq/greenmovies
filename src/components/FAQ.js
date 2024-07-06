// src/components/FAQ.js

import React from 'react';

const FAQ = () => {
  return (
    <div className="container">
      <div className="card shadow-lg p-4" style={{ backgroundColor: '#fff' }}>
        <h1 className="text-center mb-5" style={{ color: '#2c3e50' }}>Frequently Asked Questions</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <div className="accordion-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{ backgroundColor: '#008000', color: '#fff' }}
                >
                  What is Green Movies?
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ backgroundColor: '#ecf0f1' }}>
                Green Movies is an online platform that provides a vast collection of movies from various industries including Bollywood, Hollywood, and more. It allows users to browse movies by genre, release year, director, and other categories.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ backgroundColor: '#008000', color: '#fff' }}
                >
                  How do I search for movies?
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ backgroundColor: '#ecf0f1' }}>
                You can search for movies using various filters such as genre, release year, and director. Simply navigate to the Categories section and choose your preferred filter to find movies that interest you.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{ backgroundColor: '#008000', color: '#fff' }}
                >
                  Are there any subscription fees?
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ backgroundColor: '#ecf0f1' }}>
                Green Movies is free to use for browsing and discovering movies. Some movies might link to external platforms for streaming or purchase, which may have their own fees.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" id="headingFour">
              <h2 className="mb-0">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                  style={{ backgroundColor: '#008000', color: '#fff' }}
                >
                  Can I request a movie to be added?
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ backgroundColor: '#ecf0f1' }}>
                Yes, you can request movies to be added to our database by contacting us through the Contact Us page. We appreciate user suggestions and strive to keep our collection updated.
              </div>
            </div>
          </div>
          {/* Add more FAQs as needed */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
