import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { WarnButton } from "../../../Styles/globalStyles";
import {
  AppLinks,
  Links,
  Logo,
  MobileMenu,
  Nav,
  NavContainer,
  NavGrid,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./navbar.style";

const Navbar = () => {
  const [mobile, setMobile] = useState(true);
  const [click, setClick] = useState(false);

  const history = useHistory();

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

  const handleLogOut = () => {
    history.push("/");
  };

  return (
    <NavGrid>
      <NavContainer>
        <Nav>
          <NavLogo>
            <Logo> CRM Ticketing</Logo>
          </NavLogo>
          <NavMenu click={click}>
            <NavLinks onClick={handleClickActions}>
              <Links>
                <AppLinks to="profile">Profile</AppLinks>
              </Links>
              <Links>
                <AppLinks to="dashboard">Dashboard</AppLinks>
              </Links>
              <Links>
                <AppLinks to="tickets">Tickets</AppLinks>
              </Links>
              <Links>
                <WarnButton onClick={handleLogOut}>Logout</WarnButton>
              </Links>
            </NavLinks>
          </NavMenu>
          <MobileMenu click={click} onClick={handleClickActions}>
            {mobile ? <FaBars /> : <FaTimes />}
          </MobileMenu>
        </Nav>
      </NavContainer>
    </NavGrid>
  );
};

export default Navbar;
