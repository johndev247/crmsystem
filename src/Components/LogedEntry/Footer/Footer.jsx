import React from "react";
import { Container } from "../../../Styles/globalStyles";
import { FooterGrid } from "../../../Styles/grid.style";
import { CopyRight, FooterSection } from "./footer.style";

const Footer = () => {
  return (
    <FooterGrid>
      <FooterSection>
        <Container>
          <CopyRight> 2021 Crm Ticketing</CopyRight>
        </Container>
      </FooterSection>
    </FooterGrid>
  );
};

export default Footer;
