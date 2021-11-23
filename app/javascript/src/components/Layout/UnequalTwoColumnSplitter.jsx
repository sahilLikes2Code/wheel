import React from "react";

const UnequalTwoColumnSplitter = ({ menu, mainContent }) => {
  return (
    <div className="flex w-full">
      <div>{menu}</div>
      <div className="w-full overflow-auto">{mainContent}</div>
    </div>
  );
};

export default UnequalTwoColumnSplitter;
