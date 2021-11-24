import React from "react";
import { Link } from "react-router-dom";
import "../styles/landingPage.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { DiCss3Full } from "react-icons/di";

import { SocialIcons } from "./HeaderStyles";

const LandingPage = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1>Welcome to the wonderful world of Pixa-Paint!</h1>
        <div className="gpt3__header-image">
          <img alt="pixel" src="images/pixel-world.gif" />
        </div>
        <p>
          Unleash your creativity with Pixa-Paint! Paint, save, and show your
          friends!
          <div className="gpt3__header-content__input">
            <button type="button">
              <Link to="/editor">Get Started</Link>
            </button>
          </div>
          <h1>Walkthrough ⬇️</h1>
          <section id="demo-1">
            <div className="demo">
              <h3>
                1. Choose your dimensions (Go as big or small as you want) then
                click on 'Start Drawing'
              </h3>
              <img
                src="images/dimension-demo.gif"
                className="gif"
                alt="demo"
                width="500px"
              />
            </div>
          </section>
          <section id="demo-2">
            <div className="demo B">
              <h3>
                2. Pick a colour and start clicking on the canvas. Choosing a
                different colour and clicking over an existing one will be
                replaced with the new colour!
              </h3>
              <img
                src="images/colour-demo.gif"
                className="gif"
                alt="demo"
                width="500px"
              />
            </div>
          </section>
          <section id="demo-3">
            <div className="demo">
              <h3>3. Want to start over? Just click on 'Reset'</h3>
              <img
                src="images/reset-demo.gif"
                className="gif"
                alt="demo"
                width="500px"
              />
            </div>
          </section>
          <section id="demo-4">
            <div className="demo B">
              <h3>
                4. Click on 'Export as PNG' to download your new masterpiece!
              </h3>
              <img
                src="images/export-demo.gif"
                className="gif"
                alt="demo"
                width="500px"
              />
            </div>
          </section>
          <section id="demo-5">
            <div className="demo">
              <h3>5. Have fun!</h3>
              <div className="gpt3__header-content__input">
                <button type="button">
                  <Link to="/editor">Get Started</Link>
                </button>
              </div>
            </div>
          </section>
        </p>

        <div className="gpt3__header-content__people">
          <img alt="profile" src="images/Profile.jpeg" />
          <p>Meet the Dev!</p>
          <SocialIcons href="https://github.com/jon-choi">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/jonathan-choi-0502/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <p style={{ marginLeft: "1px", marginRight: "7px" }}>
            Website built with:{" "}
          </p>
          <FaReact size="3rem" />
          <FaHtml5 size="3rem" />
          <DiCss3Full size="3rem" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
