import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";


const Header = ({ title, showAdd, onAdd }) => {
  const pathname = useLocation().pathname;
  return (
    <header className="header">
      <h1>{title}</h1>
      {pathname == "/" && <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// direct CSS in js
// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }

export default Header;
