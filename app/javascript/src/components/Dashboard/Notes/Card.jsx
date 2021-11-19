import React from "react";

import { Clock, MenuVertical } from "@bigbinary/neeto-icons";
import { Typography, Button, Avatar } from "@bigbinary/neetoui/v2";

const Card = ({ title, description }) => {
  return (
    <div className="p-4 border neeto-ui-shadow-s w-full mb-4">
      <div className="flex justify-between items-center">
        <Typography style="h3" weight="semibold">
          {title}
        </Typography>
        <MenuVertical color="#1e1e20" size={14} />
      </div>
      <Typography style="body2" weight="light" className="text-gray-500">
        {description}
      </Typography>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <Button
          label="Getting Started"
          style="secondary"
          className="font-normal"
        />
        <div className="flex items-center">
          <Clock color="#1e1e20" size={14} />
          <Typography style="body3" weight="light" className="px-1">
            Created 2 hours ago
          </Typography>
          <Avatar
            user={{
              name: "Kieran Miller",
              imageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
            }}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
