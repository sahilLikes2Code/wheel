import React from "react";

import UnequalTwoColumnSplitter from "components/Layout/UnequalTwoColumnSplitter";

import Main from "./Main";
import SideMenu from "./SideMenu";

const Notes = () => {
  return (
    <>
      <UnequalTwoColumnSplitter menu={<SideMenu />} mainContent={<Main />} />
    </>
  );
};

export default Notes;
