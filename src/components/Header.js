import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaPaintBrush } from "react-icons/fa";

import { Container, Div3, Span, Div1, SocialIcons } from "./HeaderStyles";

const Header = () => {
  return (
    <Container>
      <Div1>
        <FaPaintBrush size="4rem" />
        <Span
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
            marginLeft: "10px",
          }}
        >
          Pixe-Paint
        </Span>
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
