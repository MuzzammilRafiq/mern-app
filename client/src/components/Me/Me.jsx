import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import useFetch from "../../hooks/useFetch";
import Post from "../Home/Post";
import "./Me.css";

function Me() {
  const navigate = useNavigate();
  const [meData, meLoading, meError] = useContext(UserContext);

  const { data, loading, error } = useFetch("http://localhost:3001/post/");
  if (!localStorage.getItem("access_token")) {
    navigate("/login");
    return;
  }
  if (meError) console.log(meError);
  if (error) console.log(error);
  return (
    <div className="home">
      {meLoading ? (
        <h2>loading...</h2>
      ) : (
        <div className="card">
          <img src={meData.imgsrc} alt="me" />
          <h3>username: {meData.username}</h3>
          <h1>name: {meData.name}</h1>
        </div>
      )}
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        data.map((d, i) => <Post key={i} details={d} />)
      )}
    </div>
  );
}

export default Me;
