import React from "react";

import { Select } from "neetoui/formik";

import { ASSIGNED_CONTACT_DROPDOWN_OPTIONS } from "./constants";

export default function AssignedContactDropdown({ name }) {
  return (
    <Select
      name={name}
      isClearable
      isSearchable
      label="Assigned Contact  *"
      options={ASSIGNED_CONTACT_DROPDOWN_OPTIONS}
      placeholder="Select Role"
      className="mb-6"
    />
  );
}
