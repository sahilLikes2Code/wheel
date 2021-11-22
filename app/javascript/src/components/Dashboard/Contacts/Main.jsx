import React, { useState, useEffect } from "react";

import { Search } from "@bigbinary/neeto-icons";
import { Button, Input, PageLoader } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Pagination } from "@bigbinary/neetoui/v2";

import notesApi from "apis/notes";
import ContactsTable from "./ContactsTable";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await notesApi.fetch();
      setNotes(response.data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
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
              className="mr-3"
              placeholder="Search Name, Email, Phone Number, Etc."
              style={{ width: "305px" }}
            />
            <Button
              onClick={() => setShowNewContactPane(true)}
              label="Add Contact"
              icon="ri-add-line"
              className="py-2"
            />
          </>
        }
        menuBarToggle={"addme"}
        className="px-5"
      />
      <ContactsTable
        selectedNoteIds={selectedNoteIds}
        setSelectedNoteIds={setSelectedNoteIds}
        notes={notes}
      />
      <Pagination
        count={500}
        pageNo={3}
        pageSize={50}
        className="mt-9 flex justify-end mr-32"
      />
    </>
  );
};

export default Main;
