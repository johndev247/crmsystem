import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddTicketPage from "./pages/AddTicketPage";
import TicketsDetailPage from "./pages/TicketsDetailPage";
import LogRegFormEntry from "./Components/AppEntries/Home";
import UserDashboardEntry from "./Components/AppEntries/UserDashboardEntry";
import PrivateRoute from "./Components/AppEntries/PrivateRoute";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogRegFormEntry} />
        <PrivateRoute path="/dashboard">
          <UserDashboardEntry />
        </PrivateRoute>
        <PrivateRoute path="/ticket/:tid">
          <TicketsDetailPage />
        </PrivateRoute>
        <PrivateRoute path="/addticket">
          <AddTicketPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
