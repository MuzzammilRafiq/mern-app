import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import CreatePost from "../Home/CreatePost";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const logout = async () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  const [meData] = useContext(UserContext);
  return (
    <>
      <div className="header">
        <div className="header-left">
          <Link to="/">Home</Link>
        </div>
        <div className="header-right">
          {/*flex-direction:column reverse */}
          <Link onClick={logout}>Logout</Link>
          <Link to="/register">Register</Link>
          <Link to="/me">
            <img src={meData?.imgsrc} alt="me" />
          </Link>
          <Link to="/admin">Admin</Link>
          <Link>
            <CreatePost />
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Header;
