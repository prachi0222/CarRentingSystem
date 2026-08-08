import React from 'react'
import { Link } from "react-router-dom";
import Gallery from '../components/Gallery'

export default function GalleryPage() {
  return (
    <>
  <div className="banner-section services-banner">
        {/* Breadcrumb */}
        <ol className="ol-list">
          <li>
            <Link to="/">Home</Link>

            <i className="bi bi-chevron-right mx-2"></i>

            <Link to="/features">Features</Link>
          </li>
        </ol>

        {/* Banner Content */}
        <div className="about_taital_box">
          <h1 className="about_taital">
            VEHICLE <span style={{ color: "#009DFF" }}>FEATURES</span>
          </h1>

          <p className="about_text">
            We are committed to providing safe, reliable, and affordable car
            rental services. Whether you're traveling for business or leisure,
            our modern fleet and exceptional customer support ensure a smooth
            and comfortable journey every time.
          </p>
        </div>
      </div>

      <Gallery/>
    </>
  )
}


// <<<<<<< HEAD
// export default GalleryPage;
// =======
// export default GalleryPage
// >>>>>>> origin/main
