import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Typography, Avatar, Dropdown, Table } from "@bigbinary/neetoui/v2";
import "dayjs";

import DUMMY_CONTACTS from "../../../constants/dummyContacts";

export default function ContactsTable({ setShowDeleteAlert }) {
  const deleteContact = () => {
    setShowDeleteAlert(true);
  };
  return (
    <Table
      className=""
      rowData={DUMMY_CONTACTS}
      currentPageNumber={3}
      totalCount={10}
      columnData={[
        {
          dataIndex: "name",
          key: "name",
          title: "Name & Role",
          render: (name, data) => (
            <div className="flex">
              <Avatar
                user={{
                  name: name,
                  imageUrl: data.imageUrl,
                }}
                size="medium"
                className="mr-3"
              />
              <div>
                <Typography style="h5" weight="semibold">
                  {name}
                </Typography>
                <Typography style="h6" weight="light">
                  {data.role}
                </Typography>
              </div>
            </div>
          ),
        },
        {
          dataIndex: "email",
          key: "email",
          title: "Email",
        },
        {
          dataIndex: "created_at",
          key: "created_at",
          title: "Created at",
          render: () => <div>Feb 5, 2021</div>,
        },
        {
          dataIndex: "",
          key: "",
          title: "",
          width: 10,
          render: () => (
            <Dropdown
              buttonStyle="text"
              position="bottom-end"
              icon={MenuHorizontal}
            >
              <li onClick={() => deleteContact()}>Delete Contact</li>
            </Dropdown>
          ),
        },
      ]}
    />
  );
}
