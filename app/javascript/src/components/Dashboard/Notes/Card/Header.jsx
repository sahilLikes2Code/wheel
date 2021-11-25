import React from "react";

import { MenuVertical } from "neetoIcons";
import { Typography, Dropdown } from "neetoui/v2";

const Header = ({ deleteNote, title }) => {
  return (
    <div className="flex justify-between items-center">
      <Typography style="h3" weight="semibold">
        {title}
      </Typography>

      <Dropdown buttonStyle="text" position="bottom-end" icon={MenuVertical}>
        <li>Edit</li>
        <li onClick={() => deleteNote()}>Delete</li>
      </Dropdown>
    </div>
  );
};

export default Header;
