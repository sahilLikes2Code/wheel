import React from "react";

import { Toastr } from "neetoui/v2";
import { Sidebar } from "neetoui/v2/layouts";
import { withRouter, useHistory } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";

import { NAV_LINKS } from "./constants";

const NavBar = () => {
  const authDispatch = useAuthDispatch();
  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      Toastr.error(error);
    }
  };

  let history = useHistory();

  const navigateToProfileSettings = () => {
    history.push("/my/profile");
  };

  return (
    <div className="flex flex-row justify-start items-start">
      <Sidebar
        appName="neetoUI"
        isCollapsed
        navLinks={NAV_LINKS}
        profileInfo={{
          dropdownProps: [
            {
              label: "Edit",
              onClick: () => navigateToProfileSettings(),
            },
            {
              label: "Logout",
              onClick: () => handleLogout(),
            },
          ],
          imageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
          name: "Kieran Miller",
        }}
      />
    </div>
  );
};

export default withRouter(NavBar);
