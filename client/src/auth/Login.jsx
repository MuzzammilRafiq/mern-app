import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import "./auth.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault(); //prevents from refreshing page
    try {
      const res = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      localStorage.setItem("access_token", res.data.access_token);

      setPassword("");
      setUsername("");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}

export default Login;
