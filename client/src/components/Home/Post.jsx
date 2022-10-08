function Post(data) {
  const { text, ups, downs, userId } = data.data;
  return (
    <div className="feed">
      <div className="feed-top">
        <p>{userId}</p>
        <img src="https://kdbkw.jpg" alt="kuhk" />
      </div>
      <div className="feed-mid">
        <p>{text}</p>
      </div>
      <div className="feed-bottom">
        <p>👍{ups}</p>
        <p>👎{downs}</p>
        <p>🔖 </p>
      </div>
    </div>
  );
}

export default Post;
