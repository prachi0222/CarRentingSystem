import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    // If there are no errors
    if (Object.keys(newErrors).length === 0) {
      console.log("Login successfully");
    }
  };

  return (
    <div className="login_page">

      <div className="login_container">

        {/* LEFT SIDE */}
        <div className="login_image">
          <img
        src="images/about-img.png"
            alt="Car Rental"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="login_box">

          <h1 className="login_title">
            Login
          </h1>

          <p className="login_subtitle">
            Welcome back! Please login to your account.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="login_form_group">

              <label>Email</label>

              <input
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

            {/* Password */}
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

            {/* Remember + Forgot */}
            <div className="login_options">

              <label className="remember_me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <Link to="/forgot-password">
                Forgot Password?
              </Link>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="login_button"
            >
              Login
            </button>

          </form>

          {/* Signup */}
          <p className="register_text">
            Don't have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </p>

          {/* Back Home */}
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

