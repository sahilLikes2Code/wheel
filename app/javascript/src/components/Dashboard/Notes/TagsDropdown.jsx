import React from "react";

import { Select } from "neetoui/formik";

import { TAG_DROPDOWN_OPTIONS } from "./constants";

export default function TagsDropdown({ name }) {
  return (
    <Select
      name={name}
      isClearable
      isSearchable
      label="Tags *"
      options={TAG_DROPDOWN_OPTIONS}
      placeholder="Select Role"
    />
  );
}
