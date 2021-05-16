import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../../Styles/globalStyles";

export const NavGrid = styled.div`
  display: grid;
  grid-template-rows: 70px;
`;
export const NavContainer = styled.div``;
export const Nav = styled(Container)`
  display: flex;
  position: fixed;
  top: 0;
  height: 70px;
  background-color: #12cdee;
  justify-content: space-between;
  align-items: center;

  ${Container}
`;

export const Logo = styled.h1`
  color: #fff;
  cursor: pointer;
`;

export const NavLogo = styled.div``;
export const MobileMenu = styled.div`
  z-index: 2;
  color: white;
  font-size: 2em;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const NavMenu = styled.div`
  position: fixed;
  z-index: 1;
  transition: 0.5s ease-in-out;
  color: white;
  background-color: #12cdee;
  right: ${({ click }) => (click ? "0" : "-50%")};
  top: 0;
  width: 50%;
  height: 100vh;

  @media only screen and (min-width: 768px) {
    position: relative;
    right: 0%;
    background-color: unset;
    color: white;
    height: 70px;
  }
`;
export const NavLinks = styled.ul`
  display: block;
  margin-top: 70px;
  padding: 0;
  list-style: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin: 0 100px;
    margin-top: 30px;
  }
`;
export const Links = styled.li`
  font-size: 1.2em;
  padding: 5px;
  margin: 2px;
  cursor: pointer;
  color: white;
  &:hover {
    border-radius: 3px;
    background-color: #1996ac;
  }
  @media only screen and (min-width: 768px) {
    padding: 5px 10px 0 7px;
    margin: 0;
  }
`;

export const AppLinks = styled(Link)`
  cursor: pointer;
  color: white;
  text-decoration: none;
`;
