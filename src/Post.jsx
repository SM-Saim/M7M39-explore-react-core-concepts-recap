export default function Post({ post }) {
  const { id, title, body } = post;
  return (
    <div className="box">
      <h4>ID: {id}</h4>
      <h2>Title:{title}</h2>
      <p>Body:{body}</p>
    </div>
  );
}
