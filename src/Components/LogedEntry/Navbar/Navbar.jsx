import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Container, WarnButton } from "../../../Styles/globalStyles";
import { NavGrid } from "../../../Styles/grid.style";
import {
  Links,
  Logo,
  MobileMenu,
  Nav,
  NavItems,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./navbar.style";

const Navbar = () => {
  const [mobile, setMobile] = useState(true);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const toggleMobile = () => {
    setMobile(!mobile);
  };

  const handleClickActions = () => {
    toggleMobile();
    handleClick();
  };

  console.log(click);

  return (
    <NavGrid>
      <Nav>
        <Container>
          <NavItems>
            <NavLogo>
              <Logo> CRM Ticketing</Logo>
            </NavLogo>
            <NavMenu click={click}>
              <NavLinks onClick={handleClickActions}>
                <Links>Profile</Links>
                <Links>Dashboard</Links>
                <Links>Tickets</Links>
                <Links>
                  <WarnButton>Logout</WarnButton>
                </Links>
              </NavLinks>
            </NavMenu>
            <MobileMenu click={click} onClick={handleClickActions}>
              {mobile ? <FaBars /> : <FaTimes />}
            </MobileMenu>
          </NavItems>
        </Container>
      </Nav>
    </NavGrid>
  );
};

export default Navbar;
