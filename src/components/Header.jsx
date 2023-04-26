import style from "../styles/header.module.css";

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="container">
        <h1>{title}</h1>
      </div>
    </header>
  );
};
export default Header;
