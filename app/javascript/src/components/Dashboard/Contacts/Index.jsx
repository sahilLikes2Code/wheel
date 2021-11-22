import React from "react";

import UnequalTwoColumnSplitter from "components/Layout/UnequalTwoColumnSplitter";

import Main from "./Main";
import SideMenu from "./SideMenu";

const Contacts = () => {
  return (
    <>
      <UnequalTwoColumnSplitter menu={<SideMenu />} mainContent={<Main />} />
    </>
  );
};

export default Contacts;