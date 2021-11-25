import React from "react";

import { Typography } from "neetoui/v2";

const Body = ({ description }) => {
  return (
    <Typography style="body2" weight="light" className="text-gray-500">
      {description}
    </Typography>
  );
};

export default Body;
