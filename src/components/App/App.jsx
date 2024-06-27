import "./App.scss";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Note from "../Note/Note";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../Context";

function App() {
  const [noteArray, setNoteArray] = useState([]);
  const [noCompleted, setNoCompleted] = useState(0);
  const [completedIndexesArray, setCompletedIndexesArray] = useState([]);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const topContainer = document.getElementsByClassName("container__top")[0];
    const bottomContainer =
      document.getElementsByClassName("container__bottom")[0];
    if (theme === "light") {
      topContainer.classList.add("container__top--light");
      bottomContainer.classList.add("container__bottom--light");
    } else {
      topContainer.classList.remove("container__top--light");
      bottomContainer.classList.remove("container__bottom--light");
    }
  }, [theme]);

  function addNote(note) {
    const newNote = { id: uuidv4(), content: note };
    setNoteArray((prevValues) => [...prevValues, newNote]);
  }

  function deleteNote(id) {
    setNoteArray((prevValues) => prevValues.filter((note) => note.id !== id));
    setNoCompleted((prevValues) => {
      if (prevValues === 0) {
        return 0;
      } else {
        return prevValues - 1;
      }
    });
  }

  function increaseCompleted() {
    setNoCompleted((prevCount) => prevCount + 1);
  }

  function getIndexes(id) {
    setCompletedIndexesArray((prevValues) => [...prevValues, id]);
  }

  function deleteCompletedNotes() {
    setNoteArray((prevValues) =>
      prevValues.filter((note) => !completedIndexesArray.includes(note.id))
    );
    setCompletedIndexesArray([]);
    setNoCompleted(0);
  }

  function toggleTheme() {
    setTheme((prevValue) => {
      return prevValue === "dark" ? "light" : "dark";
    });
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="flex-container">
        <Header onAdd={addNote} changeTheme={toggleTheme} />
        <div>
          {noteArray.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              content={note.content}
              onDelete={deleteNote}
              onComplete={increaseCompleted}
              onCompleteIndexes={getIndexes}
            />
          ))}
          <Navigation
            remaining={noteArray.length - noCompleted}
            onDeleteCompleted={deleteCompletedNotes}
          />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
