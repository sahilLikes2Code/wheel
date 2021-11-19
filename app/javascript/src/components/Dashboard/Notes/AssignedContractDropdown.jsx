import React from "react";

import { Select } from "neetoui/formik";

export default function AssignedContractDropdown({ name }) {
  return (
    <Select
      name={name}
      isClearable
      isSearchable
      label="Assigned Contact"
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
      required
      className="mb-6"
    />
  );
}
