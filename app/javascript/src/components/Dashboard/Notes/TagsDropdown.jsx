import React from "react";

import { Select } from "@bigbinary/neetoui/v2";

export default function TagsDropdown({ name }) {
  return (
    <Select
      name={name}
      isClearable
      isSearchable
      label="Tags *"
      options={[
        {
          label: "Getting Started",
          value: "gettingStarted",
        },
        {
          label: "Onboarding",
          value: "onboarding",
        },
        {
          label: "User Flow",
          value: "userFlow",
        },
        {
          label: "UX",
          value: "ux",
        },
        {
          label: "Bugs",
          value: "bugs",
        },
        {
          label: "V2",
          value: "v2",
        },
      ]}
      placeholder="Select Role"
    />
  );
}
