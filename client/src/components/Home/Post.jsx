import useFetch from "../../hooks/useFetch";
// import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
function Post({ details }) {
  const { text, ups, downs, userId } = details;
  const [u, setU] = useState(ups);
  const [d, setD] = useState(downs);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:3001/user/getone/${userId}`
  );
  const [meData, meError] = useContext(UserContext);
  if (error) console.log(error);
  if (meError) console.log(meError);
  const handleReaction = async (e) => {
    e.preventDefault();
    // const inc = e.target.value;
    // const res = await axios.post(
    //   `http://localhost:3001/reaction/`,
    //   { inc },
    //   {
    //     headers: {
    //       id: meData.id,
    //     },
    //   }
    // );
  };
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
            <p onClick={handleReaction} value={1}>
              👍{u}
            </p>
            <p onClick={handleReaction} value={-1}>
              👎{d}
            </p>
            <p>🔖 </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Post;
