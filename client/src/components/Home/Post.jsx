import useFetch from "../../hooks/useFetch";

function Post({ details }) {
  const { text, ups, downs, userId } = details;

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:3001/user/getone/${userId}`
  );
  if (error) console.log(error);
  return (
    <div className="feed">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <div className="feed-top">
            <p>{data.name}</p>
            <img src={data.imgsrc} alt="kuhk" />
          </div>
          <div className="feed-mid">
            <p>{text}</p>
          </div>
          <div className="feed-bottom">
            <p>👍{ups}</p>
            <p>👎{downs}</p>
            <p>🔖 </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Post;
