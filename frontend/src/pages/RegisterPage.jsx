import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
export default function RegisterPage() {
  const navigate = useNavigate();

  // const [fullName, setFullName] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  })
  const [errors, setErrors] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const getInputData = (e) => {
  const { name, value } = e.target;

  setData((prev) => ({
    ...prev,
    [name]: value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!data.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!data.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (data.confirmPassword !== data.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    // if (Object.keys(newErrors).length === 0) {

    //       // Save user in localStorage
    //       const user = {
    //         name: fullName,
    //         email: email,
    //       };

    //       localStorage.setItem("user", JSON.stringify(user));

    // // Notify Navbar immediately
    // window.dispatchEvent(new Event("userChanged"));

    // alert("Registration Successful!");

    // navigate("/");
    //}
    if (Object.keys(newErrors).length === 0) {


      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/user/signup`,
          {
            name: data.fullName,
            username: data.username,
            email: data.email,
            phone: data.phone,
            password: data.password,
          }
        )
        alert("Registration Successful")
        navigate("/login")
      } catch (error) {
        if (error.response) {
          setErrors(error.response.data.reason)
        }
        else {
          alert("Server Error")
        }
      }
    }
  }

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
            Register
          </h1>

          <p className="login_subtitle">
            Create your account and start renting cars.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Full Name */}
            <div className="login_form_group">

              <label>Full Name</label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                value={data.fullName}
                onChange={getInputData}
                className={errors.fullName ? "input_error" : ""}
              />

              {errors.fullName && (
                <p className="error_message">
                  {errors.fullName}
                </p>
              )}

            </div>

            <div className="login_form_group">
              <label>Username</label>

              <input
                type="text"
                placeholder="Enter username"
                name="username"
                value={data.username}
                onChange={getInputData}
                className={errors.username ? "input_error" : ""}
              />

              {errors.username && (
                <p className="error_message">
                  {errors.username}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="login_form_group">

              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={getInputData}
                className={errors.email ? "input_error" : ""}
              />

              {errors.email && (
                <p className="error_message">
                  {errors.email}
                </p>
              )}

            </div>

            <div className="login_form_group">
              <label>Phone</label>

              <input
                type="text"
                name="phone"
                placeholder="Enter phone number"
                value={data.phone}
                onChange={getInputData}
                className={errors.phone ? "input_error" : ""}
              />

              {errors.phone && (
                <p className="error_message">
                  {errors.phone}
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
                  name="password"
                  value={data.password}
                  onChange={getInputData}
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

            {/* Confirm Password */}
            <div className="login_form_group">

              <label>Confirm Password</label>

              <div className="password_field">

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={getInputData}
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

            {/* Register Button */}
            <button
              type="submit"
              className="login_button"
            >
              Register
            </button>

          </form>

          {/* Login Link */}
          <p className="register_text">
            Already have an account?{" "}
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