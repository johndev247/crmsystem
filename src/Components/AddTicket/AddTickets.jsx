import React from "react";
import { PriButton } from "../../Styles/globalStyles";
import { AddTicket, AddTicketButton } from "../Dashboard/dashboard.style";
import { AppLinks } from "../LogedEntry/Navbar/navbar.style";

const AddTickets = ({ tickets }) => {
  return (
    <AddTicket>
      <AddTicketButton>
        <AppLinks to="addticket">
          <PriButton
            style={{
              width: "35%",
              height: "5em",
              fontSize: "1em",
              maxWidth: "15em",
            }}
          >
            Add Ticket
          </PriButton>
        </AppLinks>
      </AddTicketButton>
    </AddTicket>
  );
};

export default AddTickets;
