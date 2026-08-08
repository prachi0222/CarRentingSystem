import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const settingData = {
    siteName: import.meta.env.VITE_APP_SITE_NAME,
    address: import.meta.env.VITE_APP_SITE_ADDRESS,
    map: import.meta.env.VITE_APP_SITE_MAP,
    email: import.meta.env.VITE_APP_SUPPORT_EMAIL,
    phone: import.meta.env.VITE_APP_SUPPORT_PHONE,
    person: import.meta.env.VITE_APP_SUPPORT_PERSON
  };
  return (
    <>
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <Link className="footerLogo" to="/">
                <img src="images/Car-Renting-Logo.png" className="logo_img mr-2" />
                   {settingData.siteName}
                </Link>
              </div> 
            </div>
          </div>
          <div className="footer_section_2">
            <div className="row">
              <div className="col">
                <h4 className="footer_taital">Subscribe Now</h4>
                <p className="footer_text">
                Subscribe for exclusive offers, latest deals, and travel updates.
                </p>
                <div className="form-group">
                  <textarea
                    className="update_mail"
                    placeholder="Enter Your Email"
                    rows="5"
                    id="comment"
                    name="Enter Your Email"
                  ></textarea>
                  <div className="subscribe_bt">
                    <a href="#">Subscribe</a>
                  </div>
                </div>
              </div>
              <div className="col">
              <h4 className="footer_taital">Information</h4>

                <ul className="location_text">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/fleet">Our Fleet</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/rental-policy">Rental Policies</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
               </ul>                
              </div>    
               <div className="col">
                <h4 className="footer_taital">Helpful Links</h4>
                <ul className="location_text">
                    <li><a href="/features">Book a Car</a></li>
                    <li><a href="/fleet">FAQ</a></li>
                    <li><a href="/pricing">My Bookings</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/privacy-policy">Terms & Conditions</a></li>
                </ul>   
              </div>
              
              <div className="col">
                <h4 className="footer_taital">Contact Us</h4>
                <ul className="location_text">
                  <li>
                  <a href={settingData.map} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="padding_left_15">
                      {settingData.address}
                    </span>
                  </a>
                  </li>
                </ul>
                <ul className="location_text">
                  <li>
                  <a href={`tel:${settingData.phone}`}>
                    <i className="fa-solid fa-phone"></i>
                    <span className="padding_left_15">{settingData.phone}</span>
                  </a>
                  </li>
                </ul>
                <ul className="location_text">
                  <li>
                  <a href={`mailto:${settingData.email}`}>
                    <i className="fa-solid fa-envelope"></i>
                    <span className="padding_left_15">{settingData.email}</span>
                  </a>
                  </li>
                </ul>
               
                <div className="social_icon">
                  <ul>
                    <li>
                      <a href="facebook">
                        <i className="bi bi-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="twitter">
                        <i className="bi bi-twitter-x" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="linkedin">
                        <i className="bi bi-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="instagram">
                        <i className="bi bi-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p className="copyright_text">
              Copyright ©2026 All rights reserved | This template is made by{" "}
                <a href="www.linkedin.com/in/gitixa-chauhan-6bb230264">{settingData.person}</a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
