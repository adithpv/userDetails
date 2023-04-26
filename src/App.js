import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Missing from "./components/Missing";
import Navbar from "./components/Navbar";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";

const App = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("userAllDetails")) || []
  );
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.designation.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [users, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = users.length ? users[users.length - 1].id + 1 : 1;

    const newUser = {
      id,
      firstName,
      designation,
      lastName,
    };
    const allUser = [...users, newUser];
    setUsers(allUser);
    localStorage.setItem("userAllDetails", JSON.stringify(allUser));
    setfirstName("");
    setLastName("");
    setDesignation("");
    navigate("/");
  };

  const handleDelete = (id) => {
    const usersList = users.filter((post) => post.id !== id);
    setUsers(usersList);
    localStorage.setItem("userAllDetails", JSON.stringify(usersList));
    navigate("/");
  };

  return (
    <div className="App">
      <Header title="User Details" />
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home users={searchResults} />} />
        <Route
          path="/addusers"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              firstName={firstName}
              setfirstName={setfirstName}
              designation={designation}
              setDesignation={setDesignation}
              lastName={lastName}
              setLastName={setLastName}
            />
          }
        />
        <Route
          path="/addusers/:id"
          element={<PostPage users={users} handleDelete={handleDelete} />}
        />

        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
