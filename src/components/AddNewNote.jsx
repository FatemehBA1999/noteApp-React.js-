import { useState } from "react";

// function AddNewNote({ setNotes }) { // FIRST WAY
function AddNewNote({ onAddNote }) {
  //SECOND WAY
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handelSubmit(e) {
    e.preventDefault();
    if (!title || !description) return null;
    const newNote = {
      title: title,
      description: description,
      id: Date.now(),
      createAt: new Date().toISOString(),
      completed: false,
    };
    console.log(newNote);
    onAddNote(newNote);
    setDescription("");
    setTitle("");
    // setNotes((preNotes) => [...preNotes, newNote]);
  }
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handelSubmit}>
        <input
          title="😉you should fill title"
          value={title}
          onChange={(e) => {
            console.log(title);
            setTitle(e.target.value);
          }}
          type="text"
          className="text-field"
          placeholder="title note"
        />
        <input
          title="😊you should fill desciption"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
          className="text-field"
          placeholder="description note"
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
