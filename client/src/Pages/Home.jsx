import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/login");
};
  return (
    <>
      <h1>Welcome to Home Page</h1>
      {token?(
      <>
        <p>You are Loggedin</p>
        <p>Visit your profile</p>
        <Link to="/profile">Profile</Link>
        <button onClick={handleLogout}>Logout</button>
      </>
      ):(
      <>
        <p>Please login to access more features</p>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </>
      )}
    </>
  );
};

export default Home;
