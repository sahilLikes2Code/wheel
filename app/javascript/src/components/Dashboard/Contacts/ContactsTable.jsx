import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import "dayjs";
import { Checkbox } from "neetoui";

import dummyContacts from "../../../constants/dummyContacts";

export default function ContactsTable({
  selectedNoteIds,
  setSelectedNoteIds,
  notes = [],
}) {
  return (
    <div className="w-full px-4">
      <table className="nui-table nui-table--checkbox">
        <thead>
          <tr>
            <th>
              <Checkbox
                checked={
                  selectedNoteIds.length === notes.map(note => note.id).length
                }
                onClick={() => {
                  const noteIds = notes.map(note => note.id);
                  if (selectedNoteIds.length === noteIds.length) {
                    setSelectedNoteIds([]);
                  } else {
                    setSelectedNoteIds(noteIds);
                  }
                }}
              />
            </th>
            <th className="text-left">Name & Role</th>
            <th className="text-left">Email</th>
            <th className="text-left">Created At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dummyContacts.map(contact => (
            <tr
              key={contact.id}
              className={"cursor-pointer bg-white hover:bg-gray-50"}
            >
              <td>
                <Checkbox />
              </td>
              <td>
                <Typography style="h5" weight="semibold">
                  {contact.name}
                </Typography>
                <Typography style="h6" weight="light">
                  {contact.role}
                </Typography>
              </td>
              <td>{contact.email}</td>
              <td>Feb 5, 2021</td>
              <td>
                <MenuHorizontal />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
