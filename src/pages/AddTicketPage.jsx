import React from "react";
import { Container } from "../Styles/globalStyles";
import { AddTicketPageStyle } from "../Components/AddTicket/addticketcomp.style";
import AddTicketComp from "../Components/AddTicket/AddTicketComp";

const AddTicketPage = () => {
  return (
    <div>
      <Container>
        <AddTicketPageStyle>
          <AddTicketComp />
        </AddTicketPageStyle>
      </Container>
    </div>
  );
};

export default AddTicketPage;
