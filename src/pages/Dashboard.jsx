import React from "react";
import { DashboardContainer } from "../Components/Dashboard/dashboard.style";
import TicketsCopm from "../Components/Dashboard/TicketsCopm";

const Dashboard = () => {
  const tickets = [];
  return (
    <>
      <DashboardContainer>
        <TicketsCopm tickets={tickets} />
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
