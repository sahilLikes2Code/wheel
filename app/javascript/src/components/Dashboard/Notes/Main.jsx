import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Search, Plus } from "neetoIcons";
import { Button, Input, PageLoader } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import { DUMMY_NOTES } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./NewNotePane";
import NotesList from "./NotesList";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
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
      <NewNotePane
        showPane={showNewNotePane}
        setShowPane={setShowNewNotePane}
        fetchNotes={fetchNotes}
      />
      {showDeleteAlert && (
        <DeleteAlert
          selectedNoteIds={selectedNoteIds}
          onClose={() => setShowDeleteAlert(false)}
          refetch={fetchNotes}
        />
      )}
    </>
  );
};

export default Main;
