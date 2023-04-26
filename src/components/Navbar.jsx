import { Link } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="nav">
      <div className="container">
        <section className="nav-wrapper">
          <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search Users</label>
            <input
              type="text"
              id="search"
              placeholder="Search Users"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addusers">Add users</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
};
export default Navbar;
