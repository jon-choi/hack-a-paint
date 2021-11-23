import React from "react";
import { Link } from "react-router-dom";
import "../styles/landingPage.scss";

const LandingPage = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Welcome to the wonderful world of Pixa-Paint!
        </h1>
        <p>
          Create anything your heart desires! <br />
          1. Choose your dimensions (Go as big or small as you want) then click
          on 'Start Drawing'.
          <br />
          2. Pick a colour and start clicking on the canvas! <br />
          3. Choosing a different colour and clicking over an existing one will
          be replaced with the new colour! <br />
          4. Want to start over? Just click on 'Reset'! <br />
          5. When you're all finished, just click on 'Export' to download your
          completed painting!
        </p>

        <div className="gpt3__header-content__input">
          <button type="button">
            <Link to="/editor">Get Started</Link>
          </button>
        </div>

        <div className="gpt3__header-content__people">
          <img alt="profile" src="images/Profile.jpeg" />
          <p>Meet the Dev!</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img alt="pixel" src="images/pixel-art.gif" />
      </div>
    </div>
  );
};

export default LandingPage;
