import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    font-family: "Inter" sans-serif;
    background-color: #e4ebe2;
    }
`;

export const AppContainer = styled.div`
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
`;

export const Cards = styled.div`
  display: flex;
  background-color: white;
  border-radius: 0.5em;
  max-width: 70%;
  padding: 2em;
  box-shadow: 0px 0px 23px -10px black;
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
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
export const Warning = styled.p`
  color: red;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export default GlobalStyle;
