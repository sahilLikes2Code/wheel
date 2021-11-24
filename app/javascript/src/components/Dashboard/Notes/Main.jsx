import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Search, Plus } from "neetoIcons";
import { Alert, Button, Input, PageLoader } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import { DUMMY_NOTES } from "./constants";
import NewNote from "./NewNote";
// import NewNotePane from "./NewNotePane";
import NotesList from "./NotesList";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [notes, setNotes] = useState([]);

  const allNotes = DUMMY_NOTES.concat(notes);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setIsLoading(true);
      const response = await notesApi.fetch();
      setNotes(response.data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await notesApi.destroy({ ids: selectedNoteIds });
      setShowDeleteAlert(false);
      fetchNotes();
    } catch (error) {
      logger.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <Header
        title="All Notes"
        actionBlock={
          <>
            <Input
              prefix={<Search />}
              className="mr-3 w-80"
              placeholder="Search Name, Email, Phone Number, Etc."
            />
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add Note"
              icon={Plus}
              className="py-2"
            />
          </>
        }
        menuBarToggle={"addme"}
        className="px-5"
      />
      {allNotes.length ? (
        <>
          <NotesList
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
            notes={allNotes}
            setShowDeleteAlert={setShowDeleteAlert}
          />
        </>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any notes!"
          subtitle="Add your notes to send customized emails to them."
          primaryAction={() => setShowNewNotePane(true)}
          primaryActionLabel="Add New Note"
        />
      )}
      <NewNote
        showPane={showNewNotePane}
        setShowPane={setShowNewNotePane}
        fetchNotes={fetchNotes}
      />
      {showDeleteAlert && (
        <Alert
          closeOnOutsideClick={true}
          isOpen={showDeleteAlert}
          isSubmitting={isDeleting}
          message="Are you sure you want to delete the note? This action cannot be undone."
          onClose={() => setShowDeleteAlert(false)}
          onSubmit={() => handleDelete()}
          size="md"
          title="Delete Contact"
        />
      )}
    </>
  );
};

export default Main;
