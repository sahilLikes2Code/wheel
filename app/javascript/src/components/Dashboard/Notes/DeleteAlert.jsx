import React, { useState } from "react";

import { Modal, Button, Typography } from "@bigbinary/neetoui/v2";

import notesApi from "apis/notes";

export default function DeleteAlert({ refetch, onClose, selectedNoteIds }) {
  const [deleting, setDeleting] = useState(false);
  const handleDelete = async () => {
    try {
      setDeleting(true);
      await notesApi.destroy({ ids: selectedNoteIds });
      onClose();
      refetch();
    } catch (error) {
      logger.error(error);
    } finally {
      setDeleting(false);
    }
  };
  return (
    <Modal isOpen size="md" closeButton={false} loading={deleting}>
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
