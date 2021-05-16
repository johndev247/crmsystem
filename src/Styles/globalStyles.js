import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    font-family: "Inter" sans-serif;
    background-color: whitesmoke;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const Cards = styled.div`
  background-color: white;
  border-radius: 0.5em;
  padding: 2em;
  box-shadow: 0px 0px 23px -10px #0b0b0b;
`;

export const Title = styled.h1`
  text-align: center;
  color: #12cdee;
`;

export const SubTiltle = styled.h3``;

export const VertLine = styled.hr`
  background-color: red;
`;

export const PriButton = styled.button`
  width: 100px;
  height: 35px;
  outline: none;
  border: none;
  background-color: #3252ce;
  border-radius: 0.4em;
  margin: 0 3px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export const WarnButton = styled.button`
  width: 100px;
  height: 35px;
  outline: none;
  border: none;
  background-color: #c84344;
  border-radius: 0.4em;
  margin: 0 3px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
export const Warning = styled.p`
  color: red;
`;
//Tables
export const Table = styled.table`
  border: 1px solid #cacaca;
  height: 170px;
  width: 95%;
  margin: 1em auto;
`;
export const THead = styled.thead`
  border: 1px solid #cacaca;
`;
export const Tr = styled.tr`
  border: 1px solid #cacaca;
`;
export const Th = styled.th`
  border: 1px solid #cacaca;
`;
export const TBody = styled.tbody`
  border: 1px solid #cacaca;
`;
export const Td = styled.td`
  border: 1px solid #cacaca;
  cursor: pointer;
`;
export const TFoot = styled.tfoot`
  border: 1px solid #cacaca;
`;

//Tables

export const Link = styled.a`
  text-decoration: none;
`;

export default GlobalStyle;
