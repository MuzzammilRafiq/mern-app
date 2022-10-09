import axios from "axios";
import { useState } from "react";

import "./auth.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [imgsrc, setImgsrc] = useState("");

  const login = async (e) => {
    e.preventDefault(); //prevents from refreshing page
    try {
      const res = await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
        name,
        imgsrc,
      });
      setPassword("");
      setUsername("");
      setName("");
      setImgsrc("");
    } catch (err) {
      console.log();
      // if (err.response.data.status === 420) {
      alert(err.response.data.message);
      // }
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
          required
        />
        <input
          type="password"
          placeholder="password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="src..."
          value={imgsrc}
          onChange={(e) => setImgsrc(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Login;
