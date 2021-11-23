import React from "react";

import { Clock } from "neetoIcons";
import { Typography, Avatar, Tooltip, Tag } from "neetoui/v2";

const Footer = ({ calculateDifferenceInHours, createdAtDate }) => {
  return (
    <div className="flex justify-between items-center">
      <Tag size="large" style="solid" label="Getting Started" color="gray" />
      <div className="flex items-center">
        <Clock color="#1e1e20" size={14} />
        <Tooltip content={createdAtDate()} position="bottom-end">
          <Typography style="body3" weight="light" className="px-1">
            {calculateDifferenceInHours()}
          </Typography>
        </Tooltip>
        <Avatar
          user={{
            name: "Kieran Miller",
            imageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
          }}
          size="small"
        />
      </div>
    </div>
  );
};

export default Footer;
