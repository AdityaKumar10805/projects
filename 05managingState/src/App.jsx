import { useState,useEffect } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [inp, setInp] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  useEffect(() => {

    const savedNotes = localStorage.getItem("notes");

    if (savedNotes) {

      setNotes(JSON.parse(savedNotes));

    }

  }, []);

  

  useEffect(() => {

    localStorage.setItem(

      "notes",

      JSON.stringify(notes)

    );

  }, [notes]);

  function handleAdd() {
    if (inp.trim() === "") return;

    if (editingId !== null) {
      setNotes(
        notes.map((note) =>
          note.id === editingId
            ? { ...note, text: inp }
            : note
        )
      );
      setEditingId(null);
    } else {
      const newNote = {
        id: Date.now(),
        text: inp,
      };

      setNotes([...notes, newNote]);
    }

    setInp("");
  }

  function handleDelete(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function handleEdit(note) {
    setInp(note.text);
    setEditingId(note.id);
  }

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Notes App</h1>

      <h2>Total Notes: {notes.length}</h2>

      <input
        type="text"
        placeholder="Write a note..."
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />

      <button onClick={handleAdd}>
        {editingId ? "Update Note" : "Add Note"}
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredNotes.length === 0 ? (
        <p>No notes found</p>
      ) : (
        <ul>
          {filteredNotes.map((note) => (
            <li key={note.id}>
              {note.text}

              <button
                onClick={() => handleEdit(note)}
                style={{ marginLeft: "10px" }}
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(note.id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}