import React from "react";

import { Pane, Typography } from "@bigbinary/neetoui/v2";

import NewContactForm from "./NewContactForm";

export default function NewContactPane({ showPane, setShowPane }) {
  const onClose = () => setShowPane(false);
  return (
    <Pane isOpen={showPane} onClose={() => onClose()} size="lg">
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Pane.Body>
        <NewContactForm onClose={onClose} />
      </Pane.Body>
    </Pane>
  );
}
