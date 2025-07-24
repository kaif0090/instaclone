import { useState } from "react";
import axios from "axios";
import "./upoload.css";

export default function Upload() {
  // ✅ Initial state with file and description
  const [data, setData] = useState({
    file: "",
    des: ""
  });

  // ✅ handleChange fixed: correct syntax for setState and spelling
  const handleChange = (e) => {
    const { name, value } = e.target;

    // ❌ BUG: You wrote `...prev` wrong. It should be inside an object.
    // ❌ BUG: `e.targer.name` has a typo. It should be `e.target.name`
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ handleSubmit sends form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ❌ BUG: There was a space in the URL (" http://...") that breaks the request
      const res = await axios.post("https://instabackend-1-pla6.onrender.com/Reels", data);
      console.log(res.data);
      setData({
        file:"",
        des: ""
      })
      console.log("upload done")
    } catch (error) {
      console.log(error, "fail try again");
    }
  };

  return (
    <>
      <div className="upload">
        <div
          className="container"
          style={{
            marginTop:"100px",
            width: "80%",
            height: "300px",
            border: "1px solid black",
            padding: "20px",
            borderRadius: "20px",
            zIndex: "1000",
            backgroundColor: " rgba(255, 255, 255, 0.6)",
          }}
        >
          <form className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
            {/* Upload File Input */}
            <div>
              <label htmlFor="file" className="form-label">Upload File</label>
              <input
                name="file"
                id="file"
               
                placeholder="Enter video/image URL"
                className="form-control"
                onChange={handleChange}
                value={data.file}
              />
              
            </div>

            {/* Description Input */}
            <div>
              <label htmlFor="des" className="form-label">Description</label>
              <input
                type="text"
                name="des"
                id="des"
                className="form-control"
                placeholder="Description"
                onChange={handleChange}
                value={data.des} 
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "rgb(255, 0, 128)", color: "white" }}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
