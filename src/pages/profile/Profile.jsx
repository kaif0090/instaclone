import { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css";
import { MdOutlineFlipCameraIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3033/api/profile", { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch(() => (window.location.href = "/"));
  }, []);

  if (!user) return <p>Loading profile...</p>;

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3033/api/logout", {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <>
      <div className="container mt-3">
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="row align-items-center text-center text-xl-start d-flex">
          <div className="col-12 col-xl-3 mb-3 mb-xl-0">
            <img
              src={user.img || "https://via.placeholder.com/150"}
              alt="profile"
              className="rounded-circle"
              style={{
                height: "150px",
                width: "150px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-12 col-xl-9">
            <h1>{user.name}</h1>
            <p>{user.email}</p>

            <div className="d-flex justify-content-center justify-content-xl-start gap-4 my-3">
              <span>
                Post <br /> 2
              </span>
              <span>
                Follower <br /> 45
              </span>
              <span>
                Following <br /> 60
              </span>
            </div>

            <div className="d-flex justify-content-center justify-content-xl-start">
              <button className="btn btn-outline-dark">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="container text-center">
        <div className="row">
          <div className="col-12 d-flex justify-content-around flex-wrap mb-5">
            <h5>Posts</h5>
            <h5>Reels</h5>
            <h5>Saved</h5>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <div>
              <MdOutlineFlipCameraIos size={100} />
              <h1>No Posts</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
