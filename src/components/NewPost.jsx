import style from "../styles/newPost.module.css";

const NewPost = ({
  handleSubmit,
  firstName,
  setfirstName,
  designation,
  setDesignation,
  lastName,
  setLastName,
}) => {
  return (
    <div className="container">
      <main className="newPost">
        <h1>Add users</h1>
        <form className="newPostForm" onSubmit={handleSubmit}>
          <label htmlFor="usersName">Name</label>
          <input
            id="usersName"
            type="text"
            required
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            placeholder="Jhon"
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
          />
          <label htmlFor="designation">Designation</label>
          <input
            id="designation"
            type="text"
            required
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Software Engineer"
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};
export default NewPost;
