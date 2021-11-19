import React from "react";

import Card from "./Card";

export default function NotesList({ notes }) {
  return (
    <div className="px-5">
      {notes.map(note => (
        <div key={note.id}>
          <Card {...note} />
        </div>
      ))}
    </div>
  );
}
