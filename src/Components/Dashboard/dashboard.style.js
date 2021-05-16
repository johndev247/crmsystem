import styled from "styled-components";
import { Container } from "../../Styles/globalStyles";

export const DashboardContainer = styled(Container)`
  ${Container}
`;

export const AddTicket = styled.div`
  display: flex;
  align-self: center;
  margin-top: 3em;
  flex-direction: column;
  grid-area: addticket;
  text-align: center;
`;
export const AddTicketButton = styled.div``;

export const SearchBar = styled(Container)`
  display: flex;
  flex-flow: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }
  ${Container}
`;

export const TicketsDetails = styled.div`
  margin-top: 1em;
`;

export const TicketListsContainer = styled.ul`
  list-style: none;
  margin: 0;
  border: 1px solid #cacaca;
  padding: 0;
  display: flex;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const TicketLists = styled.li`
  padding: 0;
  width: 100%;
  border: 1px solid #cacaca;
`;

export const TicketItems = styled.p`
  padding: 0;
  margin: 0;
  text-align: center;
  border: 1px solid #cacaca;
  height: 50px;
`;

export const TicketName = styled.p`
  padding: 0;
  margin: 0;
  height: 35px;
  text-align: center;
  border: 1px solid #cacaca;
`;

export const TicketsCounter = styled(Container)`
  display: flex;
  flex-flow: column;
  align-items: center;
  ${Container}
`;

export const TicketStatus = styled.p`
  padding: 0;
  margin: 0;
  height: 35px;
  text-align: center;
  border: 1px solid #cacaca;
`;

export const TicketDate = styled.p`
  padding: 0;
  margin: 0;
  height: 35px;
  text-align: center;
  border: 1px solid #cacaca;
`;
