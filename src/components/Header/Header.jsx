// import iconSun from "../../assets/images/icon-sun.svg";
import "./Header.scss";
import CreateArea from "../CreateArea/CreateArea";
import PropTypes from "prop-types";
import { ThemeContext } from "../Context";
import { useContext } from "react";

function Header({ onAdd, changeTheme }) {
  const theme = useContext(ThemeContext);
  function handleClick() {
    changeTheme();
  }
  return (
    <div>
      <div className="header">
        <h1 className="header__text">TODO</h1>
        <img
          className="header__img"
          src={
            theme === "dark"
              ? "../../../images/icon-sun.svg"
              : "../../../images/icon-moon.svg"
          }
          onClick={handleClick}
        />
      </div>
      <CreateArea add={onAdd} />
    </div>
  );
}
Header.propTypes = {
  onAdd: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired
};
export default Header;
