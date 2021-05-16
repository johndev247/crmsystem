import React from "react";
import Dashboard from "../../pages/Dashboard";
import UserDashboard from "../../pages/UserDashboard";

const UserDashboardEntry = ({ tickets }) => {
  const Admin = true;
  return <>{Admin ? <Dashboard /> : <UserDashboard tickets={tickets} />}</>;
};
export default UserDashboardEntry;
