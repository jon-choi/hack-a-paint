import React from "react";

import {
  CompanyContainer,
  FooterWrapper,
  Slogan,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            <em>“Simplicity is the soul of efficiency.”</em> – Austin Freeman
          </Slogan>
        </CompanyContainer>
        <CompanyContainer>
          <Slogan>Website built by Jonathan Choi</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
