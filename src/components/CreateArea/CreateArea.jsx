import "./CreateArea.scss";
import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../Context";

function CreateArea({ add }) {
  const [note, setNote] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const theme = useContext(ThemeContext);

  function handleChange(event) {
    const { value } = event.target;
    setNote(value);
  }

  function handleRadioChange(event) {
    setIsChecked(true);
    handleSubmit(event);
  }

  function handleSubmit(event) {
    event.preventDefault();
    add(note);
    setNote("");
    setIsChecked(false);
  }

  return (
    <div>
      <form className={`form form--${theme}`} onSubmit={handleSubmit}>
        <input
          type="radio"
          id="submit"
          className="radio"
          checked={isChecked}
          onChange={handleRadioChange}
        />
        <label htmlFor="submit" className="radio__container">
          <span className="radio__button" />
        </label>
        <input
          type="text"
          name="content"
          className={`text-input text-input--${theme}`}
          placeholder="Create a new todo..."
          autoComplete="off"
          onChange={handleChange}
          value={note}
        />
      </form>
    </div>
  );
}

CreateArea.propTypes = {
  add: PropTypes.func.isRequired
};

export default CreateArea;
