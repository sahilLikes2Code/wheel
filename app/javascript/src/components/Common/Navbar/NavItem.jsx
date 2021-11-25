import React from "react";

import classnames from "classnames";
import { Button, Dropdown, Tooltip } from "neetoui/v2";
import { useHistory, useLocation } from "react-router-dom";

import SubMenu from "./SubMenu";

export default function NavItem({
  icon,
  link,
  title,
  subLinks,
  onClick,
  className,
}) {
  const history = useHistory();
  const location = useLocation();
  const isActive = link === location.pathname;

  const NavButton = () => (
    <Button
      style="icon"
      icon={icon}
      onClick={() => (onClick ? onClick() : history.push(link))}
      className={classnames(
        [
          "flex justify-center items-center w-12 h-12 text-2xl rounded-md opacity-100",
          className,
        ],
        {
          "text-white bg-purple-500 hover:bg-purple-600 hover:text-white":
            isActive,
          "text-cool-gray-600 hover:bg-cool-gray-300 hover:text-cool-gray-600":
            !isActive,
        }
      )}
    />
  );

  if (subLinks) {
    return (
      <Dropdown
        position="right-top"
        interactionKind="hover"
        customTarget={() => <NavButton />}
        closeOnSelect
      >
        <SubMenu subLinks={subLinks} title={title} />
      </Dropdown>
    );
  }

  return (
    <div className="mb-6">
      <Tooltip content={title} position="right">
        <NavButton />
      </Tooltip>
    </div>
  );
}
