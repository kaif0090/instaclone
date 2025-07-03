import { useState } from "react";
import axios from "axios";
import "./login.css"
export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://instabackend-2-fqzi.onrender.com/api/login", form, {
        withCredentials: true,
      }); 

      window.location.href = "/Layout/";
    } catch (err) {
      console.log(err.response?.data?.message || "Login failed");
      window.location.href = "/signup";
    }
  };

  return (
    <>
      <div style={{ height:"100%"}} id="loginmain">
        <h1 className="text-center pt-5" >Login Form</h1>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column gap-3 mt-5 container  p-5"  
          style={{backgroundColor:"rgba(243, 237, 240, 0.78)"}}
        >
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
          <div className="">
            <button
              type="submit"
              className="btn btn- "
              style={{ backgroundColor: "rgb(255, 0, 128)", color: "white" }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
