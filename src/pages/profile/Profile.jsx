import { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css";
import { MdOutlineFlipCameraIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://instabackend-2-fqzi.onrender.com/api/profile",
          {
            withCredentials: true, // 👈 must be present
          }
        );
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("https://instabackend-2-fqzi.onrender.com/api/logout", {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  if (!user) return <p className="text-center mt-5">Loading profile...</p>;

  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="row align-items-center text-center text-xl-start mt-4">
          <div className="col-12 col-xl-3 mb-3 mb-xl-0 d-flex justify-content-center">
            <img
              src={user.img || "https://via.placeholder.com/150"}
              alt="profile"
              className="rounded-circle shadow"
              style={{ height: "150px", width: "150px", objectFit: "cover" }}
            />
          </div>

          <div className="col-12 col-xl-9">
            <h2>{user.name}</h2>
            <p className="text-muted">{user.email}</p>

            <div className="d-flex justify-content-center justify-content-xl-start gap-5 my-3">
              <div>
                <strong>2</strong> <br /> Posts
              </div>
              <div>
                <strong>45</strong> <br /> Followers
              </div>
              <div>
                <strong>60</strong> <br /> Following
              </div>
            </div>

            <button className="btn btn-outline-dark">Edit Profile</button>
          </div>
        </div>
      </div>

      <hr className="my-5" />

      <div className="container text-center">
        <div className="d-flex justify-content-around flex-wrap mb-4">
          <h5>Posts</h5>
          <h5>Reels</h5>
          <h5>Saved</h5>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <div className="text-center">
            <MdOutlineFlipCameraIos size={100} className="text-secondary" />
            <h3>No Posts</h3>
          </div>
        </div>
      </div>
    </>
  );
}
