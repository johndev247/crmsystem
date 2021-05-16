import React, { useEffect, useState } from "react";
import { Form, FormInput } from "../../Styles/forms.style";
import {
  PriButton,
  Table,
  TBody,
  Td,
  Th,
  THead,
  Tr,
} from "../../Styles/globalStyles";
import { SearchBar, TicketsCounter } from "./dashboard.style";
const TicketsCopm = ({ tickets }) => {
  const [newticket, setNewTickets] = useState(tickets);

  const [value, setValue] = useState("");

  var openedTickets = 0;
  newticket.forEach((ticket) => {
    if (ticket.status === "Opened") {
      openedTickets++;
    }
  });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const result = tickets.filter((ticket) =>
      ticket.title.toLowerCase().includes(value.toLowerCase())
    );
    if (result) {
      setNewTickets(result);
    } else {
      return tickets;
    }
  };

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <>
      <TicketsCounter>
        <p>Total Tickets: {newticket.length}</p>
        <p>Opened Tickets: {openedTickets}</p>
      </TicketsCounter>

      <SearchBar>
        <h3>Recently Added Tickets</h3>
        <Form style={{ display: "flex" }} onSubmit={handleSearch}>
          <FormInput
            style={{ width: "8rem" }}
            type="text"
            value={value}
            onChange={handleChange}
          />
          <PriButton style={{ margin: " 13px 0  0 5px" }} type="submit">
            Search
          </PriButton>
        </Form>
      </SearchBar>

      <Table>
        <THead>
          <Tr>
            <Th> User</Th>
            <Th>Title</Th>
            <Th>Status</Th>
            <Th>Date</Th>
          </Tr>
        </THead>
        <TBody>
          {newticket.length ? (
            newticket.map((ticket) => (
              <Tr key={ticket.id} onClick={() => handleClick(ticket)}>
                <Td>{ticket.user}</Td>
                <Td>{ticket.title}</Td>
                <Td>{ticket.status}</Td>
                <Td>{ticket.date}</Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th>No Ticket Found!</Th>
              <Th></Th>
            </Tr>
          )}
        </TBody>
      </Table>
    </>
  );
};

export default TicketsCopm;
