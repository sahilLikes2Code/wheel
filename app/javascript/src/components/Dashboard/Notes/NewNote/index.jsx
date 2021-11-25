import React from "react";

import { Pane, Typography } from "neetoui/v2";

import Form from "./Form";

export default function NewNotePane({ fetchNotes, showPane, setShowPane }) {
  const onClose = () => setShowPane(false);
  return (
    <Pane isOpen={showPane} onClose={() => onClose()} size="lg">
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <Pane.Body>
        <Form onClose={onClose} refetch={fetchNotes} />
      </Pane.Body>
    </Pane>
  );
}
