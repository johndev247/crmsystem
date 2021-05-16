import React from "react";
import TicketsDetailPage from "./TicketsDetailPage";

const UserDashboard = () => {
  const tickets = [];
  return (
    <>
      <TicketsDetailPage tickets={tickets} />
    </>
  );
};

export default UserDashboard;
