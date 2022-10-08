function Post(data) {
  const { text, ups, downs, userId, imgsrc } = data.data;
  return (
    <div className="feed">
      <div className="feed-top">
        <p>{userId.slice(20)}</p>
        <img src={imgsrc} alt="kuhk" />
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
