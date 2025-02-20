import React from "react";

import TwoColumnLayout from "components/Layout/TwoColumnLayout";

import Main from "./Main";
import SideMenu from "./SideMenu";

const Contacts = () => {
  return (
    <>
      <TwoColumnLayout menu={<SideMenu />} mainContent={<Main />} />
    </>
  );
};

export default Contacts;
