import React from "react";

import * as dayjs from "dayjs";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

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
      <Header deleteNote={deleteNote} title={title} />
      <Body description={description} />
      <hr className="my-4" />
      <Footer
        createdAtDate={createdAtDate}
        calculateDifferenceInHours={calculateDifferenceInHours}
      />
    </div>
  );
};

export default Card;
