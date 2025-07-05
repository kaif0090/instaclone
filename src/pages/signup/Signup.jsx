import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [file, setFile] = useState(null); // image file

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // ✅ Final Combined Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("img", file); // image file
 
      const res = await axios.post(
        "https://instabackend-2-fqzi.onrender.com/api/signup",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true, // if using cookies
        }
      );

      if (res.data.user) {
        console.log("✅ Signup successful");
        navigate("/layout"); // redirect after signup
      } else {
        alert("❌ Signup failed: No user returned");
      }
    } catch (err) {
      console.error("❌ Signup error:", err);
      alert("Signup failed");
    }
  };
  return (
    <>
      <div id="signupmain" className="p-5">
        <h1 className="text-center text-light">Sign Up</h1>
        <div className="container mb-5">
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column gap-4 formbox p-3 mt-3 rounded-3 mb-5"
          >
            <div>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                name="name"
                placeholder="Name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter Password"
                value={form.password}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="c">
              <label htmlFor="img" className="form-label">
                Profile Image
              </label>
              <input
                type="file"
                name="img"
                placeholder="Image URL"
                value={form.img}
                accept="image/*"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn "
                style={{ backgroundColor: "#ff0080", color: "white" }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
