import { Link } from "react-router-dom";

const Fotter = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
      {/* Can be done in html but this way there isn't a reload everytime */}
      {/* <a href="/about">About</a> */}
    </footer>
  );
};

export default Fotter;
