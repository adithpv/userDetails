import { Link } from "react-router-dom";
import Img from "../assets/noImg.jpg";

const Feed = ({ firstName, lastName, designation, id }) => {
  return (
    <>
      <article className="card">
        <div className="card-wrapper">
          <Link to={`/addusers/${id}`} className="details">
            <img
              src="https://media.istockphoto.com/vectors/no-image-available-sign-vector-id1138179183?k=6&m=1138179183&s=612x612&w=0&h=prMYPP9mLRNpTp3XIykjeJJ8oCZRhb2iez6vKs8a8eE="
              alt=""
              width="150px"
              height="150px"
              className="no-image"
            />

            <h3>First name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
            <h3>Designation: {designation}</h3>
          </Link>
        </div>
      </article>
    </>
  );
};
export default Feed;
