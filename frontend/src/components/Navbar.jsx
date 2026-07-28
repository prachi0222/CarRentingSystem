import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function Navbar() {
  const navigate = useNavigate();

  const settingData = {
    siteName: import.meta.env.VITE_APP_SITE_NAME,
    address: import.meta.env.VITE_APP_SITE_ADDRESS,
    map: import.meta.env.VITE_APP_SITE_MAP,
    email: import.meta.env.VITE_APP_SUPPORT_EMAIL,
    phone: import.meta.env.VITE_APP_SUPPORT_PHONE,
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    };

    loadUser();

    window.addEventListener("userChanged", loadUser);

    return () => {
      window.removeEventListener("userChanged", loadUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <>
      {/* Header */}
      <div className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">

          <Link className="navbar-brand" to="/">
          <i className="fa-solid fa-car"></i>{" "}
          <span className="brand_text">Car Rental Hub</span>{" "}
          {settingData.siteName}
          </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              
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
                  {!user ? (
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  ) : (
                    <Dropdown align="end">

                      <Dropdown.Toggle
                        variant="secondary"
                        id="profile-dropdown"
                      >
                        <i className="fa-solid fa-user"></i>
                        
                      </Dropdown.Toggle>

                      <Dropdown.Menu>

                        <Dropdown.Item as={Link} to="/profile">
                          <i className="fa-solid fa-user"></i> My Profile
                        </Dropdown.Item>

                        <Dropdown.Item
                          as={Link}
                          to="/profile?option=bookings"
                        >
                          <i className="fa-solid fa-calendar-check"></i> My Bookings
                        </Dropdown.Item>

                        <Dropdown.Item as={Link} to="/admin">
                          <i className="fa-solid fa-gauge"></i> Admin Dashboard
                        </Dropdown.Item>

                        <Dropdown.Divider />

                        <Dropdown.Item onClick={handleLogout}>
                          <i className="fa-solid fa-right-from-bracket"></i> Logout
                        </Dropdown.Item>

                      </Dropdown.Menu>

                    </Dropdown>
                  )}
                </li>

              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="call_text_main">
        <div className="container">
          <div className="call_taital">

            <div className="call_text">
            
              <a
                href={settingData.map}
                target="_blank"
                rel="noreferrer"
                
              >
                <i className="fa-solid fa-location-dot"></i>
                <span className="padding_left_15">Location
                  {settingData.address}
                </span>
              </a>
            </div>

            <div className="call_text">
              <a href={`tel:${settingData.phone}`}>
                <i className="fa-solid fa-phone"></i>
                <span className="padding_left_15">
                  + 91 9027026211
                </span>
              </a>
            </div>

            <div className="call_text">
              <a href={`mailto:${settingData.email}`}>
                <i className="fa-solid fa-envelope"></i>
                <span className="padding_left_15">
                  gitixachauhan@gmail.com
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;