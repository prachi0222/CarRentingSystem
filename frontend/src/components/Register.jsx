import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");s
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Registration successful!");
    }
  };

  return (
    <div className="login_page">
      <div className="login_container">
        {/* LEFT SIDE - IMAGE */}
        <div className="login_image">
          <img
            src="images/about-img.png"
            alt="Car Rental"
          />
        </div>

        {/* RIGHT SIDE - REGISTER FORM */}
        <div className="login_box">
          <h1 className="login_title">Register</h1>

          <p className="login_subtitle">
            Create your account and start renting cars.
          </p>

          <form onSubmit={handleSubmit}>
            {/* FULL NAME */}
            <div className="login_form_group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={errors.fullName ? "input_error" : ""}
              />

              {errors.fullName && (
                <p className="error_message">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className="login_form_group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "input_error" : ""}
              />

              {errors.email && (
                <p className="error_message">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="login_form_group">
              <label>Password</label>

              <div className="password_field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={errors.password ? "input_error" : ""}
                />

                <span
                  className="toggle_password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>

              {errors.password && (
                <p className="error_message">
                  {errors.password}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="login_form_group">
              <label>Confirm Password</label>

              <div className="password_field">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={errors.confirmPassword ? "input_error" : ""}
                />

                <span
                  className="toggle_password"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </span>
              </div>

              {errors.confirmPassword && (
                <p className="error_message">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* REGISTER BUTTON */}
            <button
              type="submit"
              className="login_button"
            >
              Register
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="register_text">
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>

          {/* BACK HOME */}
          <div className="back_home">
            <Link to="/">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}