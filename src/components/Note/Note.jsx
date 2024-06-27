import "./Note.scss";
import "../CreateArea/CreateArea.scss";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ThemeContext } from "../Context";

function Note({ id, content, onDelete, onComplete, onCompleteIndexes }) {
  const [isChecked, setIsChecked] = useState(false);

  const theme = useContext(ThemeContext);

  function handleChange() {
    setIsChecked(true);
    onComplete();
    onCompleteIndexes(id);
  }

  function handleClick() {
    onDelete(id);
  }

  return (
    <div className={`note-div note-div--${theme}`}>
      <input
        type="radio"
        id={id}
        className="radio"
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={id} className="radio__container">
        <span className="radio__button" />
      </label>
      <p
        className="text"
        style={{
          textDecoration: isChecked && "line-through",
          color: isChecked && "hsl(234, 11%, 52%)"
        }}
      >
        {content}
        <button className="cross" onClick={handleClick}></button>
      </p>
    </div>
  );
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onCompleteIndexes: PropTypes.func.isRequired
};

export default Note;
