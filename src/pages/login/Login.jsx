import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://instabackend-1-81at.onrender.com/api/login",
        form,
        { withCredentials: true } // required for cookies
      );

      if (res.data.token || res.data.user) {
        navigate("/layout"); // Redirect to dashboard
      } else {
        setError("Login failed: No user/token returned");
      }
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ height: "100%" }} id="loginmain">
      <h1 className="text-center pt-5">Login Form</h1>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-3 mt-5 container p-5"
        style={{ backgroundColor: "rgba(243, 237, 240, 0.78)" }}
      >
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: "rgb(255, 0, 128)", color: "white" }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
