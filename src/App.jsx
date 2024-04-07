import { useState } from "react";
import "./App.css";
import Notes from "./components/notes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Note one, very awesome and very unique note for someone",
    },
    {
      id: 2,
      text: "Note 2, fanstastic note to be published and remebered forever",
    },
  ]);

  return (
    <div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
