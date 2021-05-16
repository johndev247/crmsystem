import styled from "styled-components";

export const TicketsDetailsContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 10450px) {
    display: flex;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const TicketsDetails = styled.div`
  background-color: white;
  flex-basis: 48%;
  margin: 5px 0 15px 0;
  padding: 0 5px;
  @media only screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const TicketDetailsTitle = styled.h2`
  text-align: center;
`;

export const TicketsDetailsBody = styled.div`
  display: block;
`;

export const TicketsDetailsItems = styled.div`
  display: flex;
  background-color: #f3fbfa;
  margin-bottom: 0;
  padding-left: 5px;
  border: 1px solid #12cdee;
`;
export const TicketSendMessageCont = styled.div`
  display: flex;
  margin-bottom: 5px;
  padding-left: 5px;
`;
export const TicketItems = styled.p`
  margin-right: 20px;
`;

export const TicketDeleteSection = styled.p`
  margin-right: 20px;
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 3rem;
  justify-content: center;
  align-items: center;
`;

export const TicketDiscription = styled.blockquote`
  margin-right: 10px;
`;

export const SendTicketsMessage = styled.div`
  flex-basis: 48%;
  background-color: white;
  margin: 5px 0;
  padding: 0 5px;
  @media only screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;
export const TicketsMessages = styled.div`
  margin: 5px 0;
  padding: 0 5px;
  max-height: 450px;
  overflow: scroll;
`;

export const TicketsMessagesCont = styled.div`
  flex-basis: 48%;
  background-color: white;
  @media only screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const MessageCont = styled.div`
  display: block;
  background-color: whitesmoke;
  margin: 5px 5px;
  display: flex;
  flex-flow: column;
  border-radius: 8px;
`;
export const MessageSender = styled.div`
  padding: 5px;
  color: #12cdee;
`;

export const MessageSenderDate = styled.div`
  padding: 5px;
  color: #000;
`;

export const MyMessages = styled.div`
  padding: 5px;
  color: #12cdee;
`;

export const MyMessagesDate = styled.div`
  padding: 5px;
  color: #000;
`;

export const Combiner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Message = styled.blockquote`
  padding: 0 0 10px 0;
  color: #151515;
`;
