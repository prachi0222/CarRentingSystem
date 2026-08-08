import React from 'react'
import Service from '../components/Service'
import { Link } from "react-router-dom";

function ServicePage() {
  return (
    <>
   <div className="banner-section services-banner">
        {/* Breadcrumb */}
        <ol className="ol-list">
          <li>
            <Link to="/">Home</Link>

            <i className="bi bi-chevron-right mx-2"></i>

            <Link to="/about">Services</Link>
          </li>
        </ol>

        {/* Banner Content */}
        <div className="about_taital_box">
          <h1 className="about_taital">
            Why Choose <span style={{ color: "#009DFF" }}>Us</span>
          </h1>

          <p className="about_text">
            We are committed to providing safe, reliable, and affordable car
            rental services. Whether you're traveling for business or leisure,
            our modern fleet and exceptional customer support ensure a smooth
            and comfortable journey every time.
          </p>
        </div>
      </div>
    <Service/>
    </>
  )
}

export default ServicePage