import React from "react";

import { Select } from "@bigbinary/neetoui/v2";

export default function AssignedRoleDropdown({ name }) {
  return (
    <Select
      name={name}
      isClearable
      isSearchable
      label="Assigned Contact *"
      options={[
        {
          label: "Manager",
          value: "manager",
        },
        {
          label: "Client",
          value: "client",
        },
        {
          label: "Admin",
          value: "admin",
        },
      ]}
      placeholder="Select Role"
      className="mb-6"
    />
  );
}
