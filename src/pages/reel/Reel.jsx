
import "./reel.css"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Reel() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("https://instabackend-1-81at.onrender.com/api/reels").then((res) => {
      setVideos(res.data);
    });
  }, []);

  return (
    <div className="">
      <h2 className="text-center">Reels</h2>
      {videos.map((video) => (
        <div key={video._id} className="text-center mb-5">
          {/* <video
            controls
            autoPlay
            loop
className="video"
          >
            <source
              src={`http://localhost:3033${video.file}`}
              type="video/mp4"
            />
            Your browser does not support the video tag. 
          </video> */}
          <img src={video.file} alt="" className="video"/>

          <h5>{video.des}</h5>
        </div>
      ))}
    </div>
  );
}
