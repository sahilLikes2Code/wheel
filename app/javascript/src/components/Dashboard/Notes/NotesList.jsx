import React from "react";

import Card from "./Card";

export default function NotesList({
  notes,
  setShowDeleteAlert,
  setSelectedNoteIds,
}) {
  return (
    <div className="px-5">
      {notes.map((note, index) => (
        <div key={index}>
          <Card
            {...note}
            setShowDeleteAlert={setShowDeleteAlert}
            setSelectedNoteIds={setSelectedNoteIds}
          />
        </div>
      ))}
    </div>
  );
}
