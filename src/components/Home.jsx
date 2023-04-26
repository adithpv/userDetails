import Feed from "./Feed";

const Home = ({ users }) => {
  return (
    <div className="container">
      <main className="home">
        {users.length ? (
          users.map((data) => (
            <Feed
              key={data.id}
              firstName={data.firstName}
              lastName={data.lastName}
              designation={data.designation}
              id={data.id}
            />
          ))
        ) : (
          <p style={{ marginTop: "2rem" }}>No Users to display</p>
        )}
      </main>
    </div>
  );
};
export default Home;
