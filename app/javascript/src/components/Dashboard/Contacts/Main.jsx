import React, { useState } from "react";

import { Search } from "neetoIcons";
import { Alert, Button, Input, Pagination, Toastr } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

import ContactsTable from "./ContactsTable";
import NewContact from "./NewContact";

const Main = () => {
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleDelete = () => {
    Toastr.success("Contact deleted successfully.");
    setShowDeleteAlert(false);
  };

  return (
    <div className="mx-5">
      <Header
        title="All Contacts"
        actionBlock={
          <>
            <Input
              prefix={<Search />}
              className="mr-3 w-80"
              placeholder="Search Name, Email, Phone Number, Etc."
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
      />
      <NewContact
        showPane={showNewContactPane}
        setShowPane={setShowNewContactPane}
      />
      <div>
        <ContactsTable setShowDeleteAlert={setShowDeleteAlert} />
        <Pagination
          count={500}
          pageNo={3}
          pageSize={50}
          className="flex justify-end mt-9"
        />
      </div>
      {showDeleteAlert && (
        <Alert
          isOpen={showDeleteAlert}
          closeOnOutsideClick={true}
          message="Are you sure you want to delete the contact? This action cannot be undone."
          onClose={() => setShowDeleteAlert(false)}
          onSubmit={() => handleDelete()}
          size="md"
          title="Delete Contact"
        />
      )}
    </div>
  );
};

export default Main;
