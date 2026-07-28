import { Link } from "react-router-dom";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Password reset link sent successfully!");
    }
  };

  return (
    <div className="login_page">
      <div className="login_container">

        {/* LEFT IMAGE */}
        <div className="login_image">
          <img
            src="images/about-img.png"
            alt="Forgot Password"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="login_box">

          <h1 className="login_title">
            Forgot Password
          </h1>

          <p className="login_subtitle">
            Enter your registered email address to receive a password reset link.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="login_form_group">

              <label>Email</label>

              <input
                placeholder="Enter your registered email"
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

            {/* Button */}
            <button
              type="submit"
              className="login_button"
            >
              Send Reset Link
            </button>

          </form>

          {/* Back to Login */}
          <p className="register_text">
            Remember your password?{" "}
            <Link to="/login">
              Login
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