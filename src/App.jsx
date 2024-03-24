import "./App.css";
import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const handelAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handelDeleteNote = (id) => {
    // const filteredNote = notes.filter((n) => n.id !== id);
    // setNotes(filteredNote);
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  const handelCompleteNote = (e) => {
    console.log(e.target.value);
    const noteId = Number(e.target.value);
    const newNotes = notes.map((note) =>
      note.id === noteId ? { ...note, completed: !note.completed } : note
    );
    setNotes(newNotes);
    console.log(notes.map((n) => n.completed));
    // روش اول
    // روش دوم
    // setNotes((prevNotes) =>
    //   prevNotes.map((note) =>
    //     note.id === noteId ? { ...note, completed: !note.completed } : note
    //   )
    // );
  };
 
  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        {/* <AddNewNote setNotes={setNotes} /> // first way */}
        <AddNewNote onAddNote={handelAddNote} />
        {/* // second way */}
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handelDeleteNote}
            onComplete={handelCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
