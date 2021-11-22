import React, { useState } from "react";

import { Search } from "@bigbinary/neeto-icons";
import { Button, Input } from "@bigbinary/neetoui/v2";
import { Pagination } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";

import ContactsTable from "./ContactsTable";
import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./NewContactPane";

const Main = () => {
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);

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
      <NewContactPane
        showPane={showNewContactPane}
        setShowPane={setShowNewContactPane}
      />
      <ContactsTable
        selectedNoteIds={selectedNoteIds}
        setSelectedNoteIds={setSelectedNoteIds}
        setShowDeleteAlert={setShowDeleteAlert}
      />
      <Pagination
        count={500}
        pageNo={3}
        pageSize={50}
        className="mt-9 flex justify-end mr-32"
      />
      {showDeleteAlert && (
        <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
      )}
    </>
  );
};

export default Main;
