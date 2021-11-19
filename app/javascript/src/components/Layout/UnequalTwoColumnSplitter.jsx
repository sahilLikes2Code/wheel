import React from "react";

const UnequalTwoColumnSplitter = ({ menu, mainContent }) => {
  return (
    <div className="flex w-full">
      <div className="max-w-max">{menu}</div>
      <div className="w-full">{mainContent}</div>
    </div>
  );
};

export default UnequalTwoColumnSplitter;
