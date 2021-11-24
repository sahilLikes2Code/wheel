import React from "react";

import * as dayjs from "dayjs";
import { MenuHorizontal } from "neetoIcons";
import { Typography, Avatar, Dropdown, Table } from "neetoui/v2";

import { DUMMY_CONTACTS } from "./constants";

export default function ContactsTable({ setShowDeleteAlert }) {
  const deleteContact = () => {
    setShowDeleteAlert(true);
  };

  const createdAtDayAndDate = created_at => {
    return dayjs(created_at).format("ddd, DD, YYYY");
  };

  const columnData = [
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
      render: created_at => <div>{createdAtDayAndDate(created_at)}</div>,
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
          <li onClick={() => deleteContact()}>Delete</li>
        </Dropdown>
      ),
    },
  ];

  return (
    <Table
      rowData={DUMMY_CONTACTS}
      currentPageNumber={3}
      totalCount={10}
      columnData={columnData}
    />
  );
}
