import style from "../styles/postPage.module.css";
import { useParams, Link } from "react-router-dom";

const PostPage = ({ users, handleDelete }) => {
  const { id } = useParams();
  const post = users.find((post) => post.id.toString() === id);

  return (
    <div className="container">
      <main className="userPage">
        <article className="userContent">
          {post && (
            <div className="details">
              <h2>First Name: {post.firstName}</h2>
              <h2>Last Name: {post.lastName}</h2>
              <h2>Designation: {post.designation}</h2>
              <button onClick={() => handleDelete(post.id)}>Delete Post</button>
            </div>
          )}
          {!post && (
            <>
              <h2>Post Not Found</h2>
              <p>Well, Thats disappointing.</p>
              <p>
                <Link to="/">Visit Home Page</Link>
              </p>
            </>
          )}
        </article>
      </main>
    </div>
  );
};
export default PostPage;
