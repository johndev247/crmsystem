import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
`;

export const Logo = styled.h1`
  text-align: center;
  color: #fff;
`;
export const NavItems = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
export const NavLogo = styled.div``;
export const MobileMenu = styled.div`
  position: absolute;
  right: 0.8em;
  color: white;
  font-size: 2em;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const NavMenu = styled.div`
  position: absolute;
  transition: 0.5s ease-in-out;
  color: white;
  background-color: #12cdee;
  right: ${({ click }) => (click ? "0" : "-50%")};
  top: 0;
  width: 50%;
  height: 100vh;

  @media only screen and (min-width: 768px) {
    position: absolute;
    right: 0;
    color: white;
    height: 100%;
  }
`;
export const NavLinks = styled.ul`
  display: block;
  margin-top: 70px;
  list-style: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    margin-top: 40px;
  }
`;
export const Links = styled.li`
  margin-bottom: 1em;
  font-size: 1.2em;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
  }
`;
