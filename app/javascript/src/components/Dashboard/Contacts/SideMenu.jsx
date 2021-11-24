import React from "react";

import { Search, Settings, Plus } from "neetoIcons";
import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";

export default function SideMenu() {
  return (
    <MenuBar showMenu={true} title="Contacts" className="min-h-full">
      <MenuBar.Block label="All" count={0} active />
      <MenuBar.Block label="Archived" count={0} />
      <MenuBar.Block label="Completed" count={0} />
      <MenuBar.Block label="Phase 2" count={0} />

      <MenuBar.SubTitle iconProps={[{ icon: Search }]}>
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Segments
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Settings,
          },
          {
            icon: Plus,
          },
          {
            icon: Search,
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Tags
        </Typography>
      </MenuBar.SubTitle>
    </MenuBar>
  );
}
