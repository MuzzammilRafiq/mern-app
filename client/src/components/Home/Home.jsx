import useFetch from "../../hooks/useFetch";
import "./Home.css";
import Post from "./Post";

function Home() {
  const { data, loading, error, reFetch } = useFetch(
    "http://localhost:3001/post/"
  );
  if (error) console.log(error);
  return (
    <div className="home">
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        data.map((d, i) => <Post key={i} data={d} />)
      )}
    </div>
  );
}

export default Home;
