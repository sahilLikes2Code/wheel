import React from "react";

import { Select } from "@bigbinary/neetoui/v2";

export default function AssignedContractDropdown({ name }) {
  return (
    <Select
      name={name}
      isClearable
      isSearchable
      label="Assigned Contact  *"
      options={[
        {
          label: "User1",
          value: "user1",
        },
        {
          label: "User2",
          value: "user2",
        },
        {
          label: "User3",
          value: "user3",
        },
      ]}
      placeholder="Select Role"
      className="mb-6"
    />
  );
}
