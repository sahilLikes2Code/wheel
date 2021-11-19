import React from "react";

import { Select } from "neetoui/formik";

export default function TagsDropdown({ name }) {
  return (
    <Select
      name={name}
      isClearable
      isSearchable
      label="Tags"
      options={[
        {
          label: "Tag1",
          value: "tag1",
        },
        {
          label: "Tag2",
          value: "tag2",
        },
        {
          label: "Tag3",
          value: "tag3",
        },
      ]}
      placeholder="Select Role"
      required
    />
  );
}
