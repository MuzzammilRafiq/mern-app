import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <Link to="/">Home</Link>
        </div>
        <div className="header-right">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/me">me</Link>
          <Link to="/admin">Admin</Link>
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
