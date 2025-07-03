import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://instabackend-2-fqzi.onrender.com/api/profile", { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => window.location.href = "/login");
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <img src={user.img} alt="profile" style={{ width: "150px", borderRadius: "50%" }} />
    </div>
  );
}
