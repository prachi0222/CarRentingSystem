import React from "react";
import About from "../components/About";
import { Link } from "react-router-dom";

import Features from "../components/Gallery";
import Testimonials from "../components/Testimonials";

function AboutPage() {
  return (
    <>
      <div className="banner-section about-banner">
        {/* Breadcrumb */}
        <ol className="ol-list">
          <li>
            <Link to="/">Home</Link>

            <i className="bi bi-chevron-right mx-2"></i>

            <Link to="/about">About Us</Link>
          </li>
        </ol>

        {/* Banner Content */}
        <div className="about_taital_box">
          <h1 className="about_taital">
            About <span style={{ color: "#009DFF" }}>Us</span>
          </h1>

          <p className="about_text">
            We are committed to providing safe, reliable, and affordable car
            rental services. Whether you're traveling for business or leisure,
            our modern fleet and exceptional customer support ensure a smooth
            and comfortable journey every time.
          </p>
        </div>
        <div className="readmore_btn">
          <Link to="/features">
            Book Now <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
      <About />
      <Features />
      <Testimonials />
    </>
  );
}

export default AboutPage;
