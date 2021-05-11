import React from "react";
import { PriButton } from "../../Styles/globalStyles";
import { DashboardContainer, DashboardItems } from "./dashboard.style";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardItems>
        <PriButton style={{ width: "13em"  }}>Add Ticket</PriButton>
      </DashboardItems>
    </DashboardContainer>
  );
};

export default Dashboard;
