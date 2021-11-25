import React from "react";

const TwoColumnLayout = ({ menu, mainContent }) => {
  return (
    <div className="flex w-full">
      <div>{menu}</div>
      <div className="overflow-auto w-full">{mainContent}</div>
    </div>
  );
};

export default TwoColumnLayout;
