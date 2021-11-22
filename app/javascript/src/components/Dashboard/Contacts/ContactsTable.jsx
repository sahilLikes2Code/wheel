import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Typography, Avatar, Dropdown } from "@bigbinary/neetoui/v2";
import "dayjs";
import { Checkbox } from "neetoui";

import DUMMY_CONTACTS from "../../../constants/dummyContacts";

export default function ContactsTable({ setShowDeleteAlert }) {
  const deleteNote = () => {
    setShowDeleteAlert(true);
  };
  return (
    <div className="w-full px-4">
      <table className="nui-table nui-table--checkbox">
        <thead>
          <tr>
            <th>
              <Checkbox />
            </th>
            <th className="text-left">Name & Role</th>
            <th className="text-left">Email</th>
            <th className="text-left">Created At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {DUMMY_CONTACTS.map(contact => (
            <tr
              key={contact.id}
              className={"cursor-pointer bg-white hover:bg-gray-50"}
            >
              <td>
                <Checkbox />
              </td>
              <td>
                <div className="flex">
                  <Avatar
                    user={{
                      name: contact.name,
                      imageUrl: contact.imageUrl,
                    }}
                    size="medium"
                    className="mr-3"
                  />
                  <div>
                    <Typography style="h5" weight="semibold">
                      {contact.name}
                    </Typography>
                    <Typography style="h6" weight="light">
                      {contact.role}
                    </Typography>
                  </div>
                </div>
              </td>
              <td>{contact.email}</td>
              <td>Feb 5, 2021</td>
              <td>
                <Dropdown
                  buttonStyle="text"
                  position="bottom-end"
                  icon={MenuHorizontal}
                >
                  <li onClick={() => deleteNote()}>Delete Note</li>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
