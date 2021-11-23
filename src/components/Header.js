import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiPaintFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import { Container, Div3, Span, Div1, SocialIcons } from "./HeaderStyles";

const Header = () => {
  return (
    <Container>
      <Div1>
        <Link to="/">
          <RiPaintFill size="3rem" />
          <Span
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
              marginLeft: "10px",
            }}
          >
            Pixa-Paint
          </Span>
        </Link>
      </Div1>
      <Div3>
        <SocialIcons href="https://github.com/jon-choi">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/jonathan-choi-0502/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
