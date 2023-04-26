import { Link } from "react-router-dom";

const Post = ({ firstName, lastName, designation, id }) => {
  return (
    <article className="card">
      <div className="card-wrapper">
        <Link to={`/addusers/${id}`}>
          <h2>{firstName}</h2>
          <h2>{lastName}</h2>
        </Link>
        <p className="postBody">{designation}</p>
      </div>
    </article>
  );
};
export default Post;
