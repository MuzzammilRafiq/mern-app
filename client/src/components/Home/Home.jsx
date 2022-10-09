import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import CreatePost from "./CreatePost";
import "./Home.css";
import Post from "./Post";

function Home() {
  const { data, loading, error, reFetch } = useFetch(
    "http://localhost:3001/post/"
  );
  const a = localStorage.getItem("access_token");
  const navigate = useNavigate();
  if (a == undefined) {
    navigate("/login");
    return;
  }

  if (error) console.log(error);
  return (
    <div className="home">
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        data.map((d, i) => <Post key={i} details={d} />)
      )}
    </div>
  );
}

export default Home;
