import React from "react";

import { Clock, MenuVertical } from "@bigbinary/neeto-icons";
import {
  Typography,
  Avatar,
  Dropdown,
  Tooltip,
  Tag,
} from "@bigbinary/neetoui/v2";
import * as dayjs from "dayjs";

const Card = ({
  title,
  description,
  id,
  setShowDeleteAlert,
  setSelectedNoteIds,
  created_at,
}) => {
  const deleteNote = () => {
    setSelectedNoteIds([id]);
    setShowDeleteAlert(true);
  };

  const createdAtDate = () => {
    return dayjs(created_at).format("dddd, h:mm A");
  };

  const calculateDifferenceInHours = () => {
    const differenceInHours = Math.abs(
      dayjs(created_at).diff(dayjs().toISOString(), "hour")
    );

    return `Created ${differenceInHours} ${
      differenceInHours > 1 ? "hours" : "hour"
    } ago`;
  };

  return (
    <div className="p-4 mb-4 w-full border neeto-ui-shadow-s">
      <div className="flex justify-between items-center">
        <Typography style="h3" weight="semibold">
          {title}
        </Typography>

        <Dropdown buttonStyle="text" position="bottom-end" icon={MenuVertical}>
          <li>Edit</li>
          <li onClick={() => deleteNote()}>Delete</li>
        </Dropdown>
      </div>
      <Typography style="body2" weight="light" className="text-gray-500">
        {description}
      </Typography>
      <hr className="my-4" />
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
    </div>
  );
};

export default Card;
