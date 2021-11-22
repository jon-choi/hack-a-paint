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
            <em>“Art has to keep moving and discovering to stay alive”</em> –
            Bill Waterson
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
