import React from "react";

import { Modal, Button, Typography, Toastr } from "@bigbinary/neetoui/v2";

export default function DeleteAlert({ onClose }) {
  const handleDelete = async () => {
    Toastr.success("Contact deleted successfully.");
    onClose();
  };
  return (
    <Modal isOpen size="md" closeButton={false}>
      <Modal.Header>
        <Typography style="h2">Delete Note</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          Are you sure you want to delete the note? This action cannot be
          undone.
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button size="large" label="Continue" onClick={() => handleDelete()} />
        <Button style="text" size="large" label="Cancel" onClick={onClose} />
      </Modal.Footer>
    </Modal>
  );
}
