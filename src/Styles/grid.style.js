import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 1fr 7vh;
  grid-template-areas:
    "navbar"
    "main"
    "footer";
`;

export const NavGrid = styled.div`
  background-color: #12cdee;
  grid-area: navbar;
  width: 100%;
`;
export const MainGrid = styled.div`
  grid-area: main;
  width: 100%;
  min-height: 82vh;
`;
export const FooterGrid = styled.div`
  grid-area: footer;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #12cdee;
`;

export default Grid;
