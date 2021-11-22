import React from "react";

const UnequalTwoColumnSplitter = ({ menu, mainContent }) => {
  return (
    <div className="flex">
      <div className="background-light-gray">{menu}</div>
      <div className="entire-remaining-vw">{mainContent}</div>
    </div>
  );
};

export default UnequalTwoColumnSplitter;
