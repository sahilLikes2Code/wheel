import React from "react";

import { UserCircle, Text, NeetoInsights } from "@bigbinary/neeto-icons";
import { Toastr } from "@bigbinary/neetoui/v2";
import { Sidebar } from "@bigbinary/neetoui/v2/layouts";
import { withRouter, useHistory } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";

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
    <div className="flex flex-row items-start justify-start">
      <Sidebar
        appName="neetoUI"
        isCollapsed
        navLinks={[
          {
            icon: Text,
            label: "Notes",
            to: "/notes",
          },
          {
            icon: UserCircle,
            label: "Contacts",
            to: "/contacts",
          },
          {
            icon: NeetoInsights,
            label: "Reports",
            to: "#",
          },
        ]}
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
