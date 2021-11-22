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
          1. Choose your dimensions (Go as big or small as you want)
          <br />
          2. Pick a colour and start clicking on the canvas! <br />
          3. Choosing a different colour and clicking over an existing one will
          be replaced with the new colour!
        </p>

        <div className="gpt3__header-content__input">
          <button type="button">
            <Link to="/editor">Get Started</Link>
          </button>
        </div>

        <div className="gpt3__header-content__people">
          {/* <img src={people} /> */}
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img
          alt="pixel"
          src="https://i.pinimg.com/originals/2a/55/d3/2a55d31b740c0db49d309b086a4e40c6.gif"
        />
      </div>
    </div>
  );
};

export default LandingPage;
