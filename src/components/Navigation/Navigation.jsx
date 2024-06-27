import "./Navigation.scss";
import PropTypes from "prop-types";
import { ThemeContext } from "../Context";
import { useContext } from "react";

function Navigation({ remaining, onDeleteCompleted }) {
  const theme = useContext(ThemeContext);

  function handleClick() {
    onDeleteCompleted();
  }

  return (
    <div className={`nav-container nav-container--${theme}`}>
      <p className="paragraph">{remaining} item(s) left</p>
      <ul className="nav">
        <li className="nav__item">
          <a href="#" className="nav__link active">
            All
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className={`nav__link nav__link--${theme}`}>
            Active
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className={`nav__link nav__link--${theme}`}>
            Completed
          </a>
        </li>
      </ul>
      <button className={`clear-btn clear-btn--${theme}`} onClick={handleClick}>
        Clear completed
      </button>
    </div>
  );
}

Navigation.propTypes = {
  remaining: PropTypes.number.isRequired,
  onDeleteCompleted: PropTypes.func.isRequired
};

export default Navigation;
