import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from "react-bootstrap/Dropdown";

function Navbar() {

   let [settingData, setSettingData] = useState({
      siteName: import.meta.env.VITE_APP_SITE_NAME,
      address: import.meta.env.VITE_APP_SITE_ADDRESS,
      map: import.meta.env.VITE_APP_SITE_MAP,
      email: import.meta.env.VITE_APP_SUPPORT_EMAIL,
      phone: import.meta.env.VITE_APP_SUPPORT_PHONE
 } )

   return (
      <>
         <div className="header_section">
            <div className="container">
               <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                  <Link className="navbar-brand" to="/"><i className='fa-solid fa-car'></i>{settingData.siteName}</Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/features">Vehicles</NavLink>
                        </li>
                       
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                           <Dropdown>
                              <Dropdown.Toggle variant="secondary">
                                 Prachi
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                 <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                                 <Dropdown.Item as={Link} to="/admin">Admin Dashboard</Dropdown.Item>
                                 <Dropdown.Item as={Link} to="/profile?option=bookings">Bookings</Dropdown.Item>
                                 <Dropdown.Item as={Link} to="/logout">Logout</Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </li>
                     </ul>
                     <form className="form-inline my-2 my-lg-0">
                     </form>
                  </div>
               </nav>
            </div>
         </div>


         <div className="call_text_main">
            <div className="container">
               <div className="call_taital">

                  <div className="call_text">
                     <Link target='_blank' rel='noreferrer' to={settingData.map}>
                        <i className="fa-solid fa-location-dot" aria-hidden="true">
                        </i>
                        <span className="padding_left_15">{settingData.address}</span>
                     </Link>
                  </div>
                  <div className="call_text">
                     <Link target='_blank' rel='noreferrer' to={`tel:${settingData.phone}`}>
                        <i className="fa-solid fa-phone" aria-hidden="true"></i>
                        <span className="padding_left_15">{settingData.phone}</span>
                     </Link>
                  </div>
                  <div className="call_text">
                     <Link target='_blank' rel='noreferrer' to={`mailto:${settingData.email}`}>
                        <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                        <span className="padding_left_15">{settingData.email}</span>
                     </Link>
                  </div>
               </div>
            </div>
         </div>

      </>

   )}

export default Navbar