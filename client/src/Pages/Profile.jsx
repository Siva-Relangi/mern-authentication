import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/auth/profile");
        setUser(res.data);
      } catch (error) {
        // token invalid / expired
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login", { replace: true });
      }
    };

    fetchProfile();
  }, [navigate]);
 return (
  <>
  {!user ? (
    <p>Loading profile...</p>
  ) : ( 
    <>
      <h1>Profile Page</h1>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
    </>
  )}
  </>
 );
};

export default Profile;
